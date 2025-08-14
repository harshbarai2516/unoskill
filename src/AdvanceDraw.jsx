import React, { useState, useEffect } from 'react';

const SLOT_INTERVAL_MINUTES = 15;
const START_TIME = '10:30';
const END_TIME = '23:45';

function generateTimeSlots(start, end, interval) {
  const slots = [];
  let [h, m] = start.split(':').map(Number);
  const [endH, endM] = end.split(':').map(Number);
  while (h < endH || (h === endH && m <= endM)) {
    const ampm = h < 12 ? 'am' : 'pm';
    const displayH = h > 12 ? h - 12 : h;
    slots.push({
      label: `${displayH.toString().padStart(2, '0')}:${m.toString().padStart(2, '0')} ${ampm}`,
      hour: h,
      minute: m
    });
    m += interval;
    if (m >= 60) {
      h += Math.floor(m / 60);
      m = m % 60;
    }
  }
  return slots;
}

export default function AdvanceDraw({ onClose }) {


  const [selectedSlots, setSelectedSlots] = useState([]);
  const [remainingDraw, setRemainingDraw] = useState(54);
  const [search, setSearch] = useState('');
  const [allSlots, setAllSlots] = useState([]);
  const [visibleSlots, setVisibleSlots] = useState([]);
  const [nextDrawIn, setNextDrawIn] = useState('00:00');
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  // Add react-router-dom navigate

  useEffect(() => {
    setAllSlots(generateTimeSlots(START_TIME, END_TIME, SLOT_INTERVAL_MINUTES));
  }, []);

  useEffect(() => {
    const updateSlots = () => {
      const now = new Date();
      const nowMinutes = now.getHours() * 60 + now.getMinutes();
      const filtered = allSlots.filter(slot => (slot.hour * 60 + slot.minute) > nowMinutes);
      setVisibleSlots(filtered);

      // Next draw countdown
      if (filtered.length > 0) {
        const nextSlot = filtered[0];
        const nextSlotDate = new Date(
          now.getFullYear(),
          now.getMonth(),
          now.getDate(),
          nextSlot.hour,
          nextSlot.minute,
          0,
          0
        );
        let diff = Math.floor((nextSlotDate - now) / 1000);
        if (diff < 0) diff = 0;
        const m = Math.floor(diff / 60);
        const s = diff % 60;
        setNextDrawIn(`${m.toString().padStart(2, '0')}:${s.toString().padStart(2, '0')}`);
      } else {
        setNextDrawIn('--:--');
      }
    };
    updateSlots();
    const timer = setInterval(updateSlots, 1000);
    return () => clearInterval(timer);
  }, [allSlots]);

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const handleSlotPress = slotLabel => {
    setSelectedSlots(prev =>
      prev.includes(slotLabel)
        ? prev.filter(s => s !== slotLabel)
        : [...prev, slotLabel]
    );
  };

  const handleSelectAll = () => {
    if (selectedSlots.length === visibleSlots.length) {
      setSelectedSlots([]);
    } else {
      setSelectedSlots(visibleSlots.map(slot => slot.label));
    }
  };

  // Calculate grid columns based on window width
  const slotWidth = 90; // px
  const columns = Math.max(1, Math.floor(windowWidth / slotWidth));

  // Arrange slots into rows for grid
  const slotRows = [];
  for (let i = 0; i < visibleSlots.length; i += columns) {
    slotRows.push(visibleSlots.slice(i, i + columns));
  }

  return (
    <div style={styles.container}>
      <div style={styles.header}>ADVANCE DRAW</div>
      <div style={styles.row}>
        <span style={styles.label}>Remaining Draw: {remainingDraw}</span>
        <span style={styles.label}>Next Draw in: {nextDrawIn}</span>
      </div>
      <div style={styles.selectionRow}>
        <input
          style={styles.input}
          placeholder="Selection"
          value={search}
          type="number"
          onChange={e => {
            const val = e.target.value;
            setSearch(val);
            const num = parseInt(val, 10);
            if (!isNaN(num) && num > 0) {
              setSelectedSlots(visibleSlots.slice(0, num).map(slot => slot.label));
            } else {
              setSelectedSlots([]);
            }
          }}
        />
        <button style={styles.selectAllBtn} onClick={handleSelectAll}>
          <span style={styles.selectAllText}>Select All</span>
        </button>
        <button
          style={styles.okayBtn}
          onClick={() => {
            navigate('/');
          }}

        >
          <span style={styles.okayText}>OKAY</span>
        </button>
        <button style={styles.closeBtn} onClick={onClose}>
          <span style={styles.closeText}>✕</span>
        </button>
      </div>
      <div style={styles.slotsGrid}>
        {slotRows.map((row, rowIdx) => (
          <div key={rowIdx} style={styles.gridRow}>
            {row.map(slot => (
              <button
                key={slot.label}
                style={{
                  ...styles.slotBtn,
                  ...(selectedSlots.includes(slot.label) ? styles.slotBtnSelected : {})
                }}
                onClick={() => handleSlotPress(slot.label)}
              >
                <span style={styles.slotText}>{slot.label}</span>
              </button>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}

const styles = {
  container: { background: '#fff', padding: 4, minHeight: '100vh', fontFamily: 'sans-serif' },
  header: { fontSize: 24, fontWeight: 'bold', textAlign: 'center', margin: 8 },
  row: { display: 'flex', flexDirection: 'row', justifyContent: 'space-between', marginBottom: 8 },
  label: { fontSize: 16 },
  selectionRow: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8,
    gap: 8,
    flexWrap: 'wrap',
    justifyContent: 'space-between'
  },
  input: {
    flex: 2,
    border: '1px solid #aaa',
    borderRadius: 6,
    padding: 6,
    fontSize: 16,
    marginRight: 6,
    background: '#fff',
    minWidth: 80
  },
  selectAllBtn: {
    flex: 1,
    background: '#a05a0a',
    borderRadius: 6,
    padding: '8px 8px',
    marginRight: 6,
    border: 'none',
    color: '#fff',
    fontWeight: 'bold',
    cursor: 'pointer',
    minWidth: 80
  },
  selectAllText: { color: '#fff', fontSize: 16, fontWeight: 'bold' },
  okayBtn: {
    background: '#1a23e6',
    borderRadius: 6,
    padding: '8px 12px',
    border: 'none',
    color: '#ffd700',
    fontWeight: 'bold',
    cursor: 'pointer',
    minWidth: 80
  },
  okayText: { color: '#ffd700', fontSize: 16, fontWeight: 'bold' },
  closeBtn: {
    background: '#a05a0a',
    borderRadius: 6,
    padding: 8,
    marginLeft: 6,
    border: 'none',
    color: '#fff',
    fontWeight: 'bold',
    cursor: 'pointer',
    minWidth: 40
  },
  closeText: { color: '#fff', fontSize: 18, fontWeight: 'bold' },
  slotsGrid: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 8
  },
  gridRow: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: 4
  },
  slotBtn: {
    background: '#a05a0a',
    borderRadius: 6,
    padding: '5px 8px',
    margin: 2,
    minWidth: 80,
    alignItems: 'center',
    border: 'none',
    color: '#fff',
    fontWeight: 'bold',
    cursor: 'pointer',
    fontSize: 14
  },
  slotBtnSelected: {
    background: '#ffd700',
    border: '2px solid #a05a0a',
    color: '#a05a0a',
  },
  slotText: { color: 'inherit', fontSize: 14, fontWeight: 'bold' }
};

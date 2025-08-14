import React from "react";

const Filter = () => {
  const buttonStyle = {
    flex: 1,
    padding: '2px 4px',
    fontSize: '12px',
    borderRadius: '0px',
    color: 'white',
    lineHeight: '1',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100%',
    boxSizing: 'border-box',
    whiteSpace: 'nowrap',
    overflow: 'hidden',
    textOverflow: 'ellipsis'
  };

  const checkboxStyle = {
    width: '20px',
    height: '12px',
    marginRight: '2px'
  };

  const cellStyle = (flex = 2) => ({
    flex,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '2px',
    height: '100%',
    boxSizing: 'border-box'
  });

  return (
    <div style={{
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'flex-start',
      gap: '2px',
      width: '100%',
      height: '100%',
      boxSizing: 'border-box',
      flexWrap: 'nowrap',
      overflowX: 'auto'
    }}>
      {[{ label: 'All', bg: 'black' }, { label: '10-19', bg: 'blue' }, { label: '30-39', bg: 'green' }, { label: '50-59', bg: 'red' }]
        .map((btn, i) => (
          <div key={i} style={cellStyle(2)}>
            <input type="checkbox" style={checkboxStyle} />
            <button style={{ ...buttonStyle, backgroundColor: btn.bg }}>{btn.label}</button>
          </div>
        ))}

      {['EVEN', 'ODD', 'CP', 'FP'].map((txt, i) => (
        <div key={i} style={cellStyle(1)}>
          <input type="checkbox" style={checkboxStyle} />
          <span style={{ color: 'black', fontSize: '11px', textAlign: 'center', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>{txt}</span>
        </div>
      ))}

      {[{ label: '3D Game', bg: 'red' }, { label: 'Password', bg: 'black' }, { label: 'Logout', bg: 'black' }, { label: 'Statement', bg: 'red', bold: true }]
        .map((btn, i) => {
          if (btn.label === 'Password') {
            return [
              <div key="dropdown" style={cellStyle(2)}>
                <select style={{ 
                  ...buttonStyle, 
                  backgroundColor: 'blue', 
                  color: '#fff', 
                  border: 'none', 
                  fontWeight: 'normal', 
                  minWidth: '80px', 
                  fontSize: '12px', 
                  padding: '2px 4px', 
                  borderRadius: '0px', 
                  height: '32px',
                  lineHeight: '32px',
                  textAlign: 'center',
                }}>
                  <option value="">Select Language</option>
                  <option value="en">English</option>
                  <option value="hi">Hindi</option>
                  <option value="mr">Marathi</option>
                </select>
              </div>,
              <div key={i} style={cellStyle(2)}>
                <button style={{ ...buttonStyle, backgroundColor: btn.bg, fontWeight: btn.bold ? 'bold' : 'normal' }}>{btn.label}</button>
              </div>
            ];
          }
          return (
            <div key={i} style={cellStyle(2)}>
              <button style={{ ...buttonStyle, backgroundColor: btn.bg, fontWeight: btn.bold ? 'bold' : 'normal' }}>{btn.label}</button>
            </div>
          );
        })}

      {/* <style>{`
        @media (max-width: 599px) {
          div[style*="flex-direction: row"] {
            flex-wrap: wrap !important;
            overflow-x: hidden !important;
          }
          button {
            font-size: 2.5vw !important;
          }
          span {
            font-size: 2.3vw !important;
          }
        }
        @media (min-width: 600px) {
          button {
            font-size: 22px !important;
          }
          span {
            font-size: 20px !important;
          }
          select {
            font-size: 22px !important;
          }
        }
      `}</style> */}
    </div>
  );
};

export default Filter;

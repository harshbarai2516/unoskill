import React from "react";

const BottomRow = () => {

  const boxStyle = {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: "6px",
    fontWeight: "bold",
    fontSize: "0.8rem",
    height: "28px",
    padding: "0 8px",
    flexShrink: 1,
    minWidth: 0,
    whiteSpace: "nowrap",
    boxSizing: "border-box",
    maxWidth: "100%"
  };

  const purpleButton = {
    ...boxStyle,
    backgroundColor: "#370d56ff",
    color: "#fff",
    flex: "1 1 150px",
    gap: "1rem"
  };

  const blueeButton = {
    ...boxStyle,
    backgroundColor: "#f64cedf8",
    color: "#fff",
    flex: "0 0 60px"
  };

  const whiteButton = {
    ...boxStyle,
    backgroundColor: "#ffffff",
    color: "#000",
    border: "2px solid #1f1d1dff",
    flex: "1 1 180px",
    padding: 0
  };

  const redButton = {
    ...boxStyle,
    backgroundColor: "#E82C2E",
    color: "#fff",
    flex: "1 1 120px"
  };

  const containerStyle = {
    display: "flex",
    alignItems: "center",
    gap: "0.5rem",
    padding: "4px 8px",
    backgroundColor: "transparent",
    justifyContent: "space-between",
    flexWrap: "wrap",
    width: "100%",
    maxWidth: "100%",
    boxSizing: "border-box"
  };
  return (
    <div style={{ height: '7%', background: '#fffde7', color: '#000', display: 'flex', fontSize: '2rem' }}>
      <div style={{ flex: '0 1 20%', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', background: '#fffde7' }}>
        <div style={purpleButton} onClick={() => alert('Advance Draw clicked')}>
          ADVANCE DRAW - F9
        </div>
      </div>
      <div style={{ flex: '0 1 65%', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', background: '#fffde7' }}>
        <div style={containerStyle}>
        

          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              gap: "1.25rem",
              alignItems: "center",
              flex: "2 1 300px",
              minWidth: 0,
              maxWidth: "100%"
            }}
          >
            <div
              style={{
                fontSize: "0.85rem",
                color: "#0b0c0cff",
                textAlign: "left",
                flex: "1 1 120px",
                minWidth: 0,
                maxWidth: "100%",
                fontWeight: "bold",
                lineHeight: 1.1
              }}
            >
              Last Transaction <br style={{ lineHeight: '0.5', margin: 0, padding: 0 }} />#22081690601, P1(40)
            </div>
            <div style={{ ...whiteButton }} className="barcode-desktop">
              <input
                type="text"
                placeholder="Bar Code"
                style={{
                  border: "none",
                  outline: "none",
                  textAlign: "center",
                  width: "100%",
                  height: "100%",
                  fontSize: "0.75rem"
                }}
              />
            </div>
            <div style={redButton}>BUY NOW (F6)</div>
          </div>
        </div>
      </div>
      <div style={{ flex: '0 1 15%', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', background: '#fffde7', gap: '8px' }}>
        <div style={blueeButton} className="desktop-double-zero">0</div>
        <div style={blueeButton} className="desktop-double-zero">0</div>
      </div>
      <style>{`
        /* Desktop-only: double the width of the "0" buttons */
        @media (min-width: 1024px) {
          .desktop-double-zero {
            width: 80px !important;
            min-width: 100px !important;
            max-width: 120px !important;
            flex: 0 0 80px !important;
            font-size: 1.2rem !important;
          }
        }
      `}</style>
    </div>
  )
}

export default BottomRow;



import React, { useState } from "react";

export default function Leftcol() {
  const ranges = [
    "All",
    "1000-1099", "1100-1199", "1200-1299",
    "1300-1399", "1400-1499", "1500-1599",
    "1600-1699", "1700-1799", "1800-1899",
    "1900-1999"
  ];
  const [selected, setSelected] = useState("1000-1099");

  return (
    <>
      <style>{`
        .range-wrapper {
          display: flex;
          flex: 1;
          width: 100%;
          height: 100%;
          justify-content: center;
          align-items: center;
          background: #fff8dc;
          box-sizing: border-box;
        }

        .range-container {
          display: flex;
          flex-direction: column;
          width: 100%;
          height: 100%;
          justify-content: stretch;
          align-items: center;
          padding: 4px 0;
          padding-top: 6px;
          padding-bottom: 6px;
          box-sizing: border-box;
        }

        .range-list {
          display: flex;
          flex-direction: column;
          width: 95%;
          height: 100%;
          justify-content: stretch;
          align-items: center;
          gap: 0.35rem;
        }

        .range-item {
          flex: 1;
          background: linear-gradient(90deg, #ffeb8a 0%, #ffd700 100%);
          border: 1px solid #e6c200;
          border-radius: 8px;
          font-size: clamp(13px, 1.4vw, 22px);
          font-weight: bold;
          color: #333;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          width: 100%;
          box-sizing: border-box;
          transition: box-shadow 0.2s, transform 0.1s;
          text-align: center;
        }

        .range-item:hover {
          transform: scale(1.02);
        }

        .range-item.selected {
          background: linear-gradient(90deg, #ffe066 0%, #ffcc00 100%);
          border-color: #ffbf00;
          box-shadow: 0 2px 8px rgba(255,215,0,0.2);
        }

        .range-item input {
          margin-right: 6px;
          accent-color: #ffd700;
          transform: scale(0.95);
        }

        /* Mobile */
        @media (max-width: 599px) {
          .range-list {
            gap: 0.25rem;
          }
          .range-item {
            font-size: clamp(10px, 2.4vw, 16px);
          }
          .range-item input {
            transform: scale(0.85);
            margin-right: 4px;
          }
        }

        /* Extra-small mobile fix */
        @media (max-width: 400px) {
          .range-item {
            font-size: clamp(9px, 3vw, 14px);
            padding: 0 2px;
          }
          .range-item input {
            transform: scale(0.8);
          }
        }
      `}</style>

      <div className="range-wrapper">
        <div className="range-container">
          <div className="range-list">
            {ranges.map((range) => (
              <label
                key={range}
                className={`range-item ${selected === range ? "selected" : ""}`}
                onClick={() => setSelected(range)}
              >
                <input
                  type="checkbox"
                  checked={selected === range}
                  onChange={() => setSelected(range)}
                  style={{ pointerEvents: "none" }}
                />
                <span style={{ flex: 1, textAlign: "center" }}>{range}</span>
              </label>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

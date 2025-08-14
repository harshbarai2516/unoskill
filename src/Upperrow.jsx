import React from "react";

const UpperRow = () => {
  return (
    <div
      className="upperrow-responsive"
      style={{
        height: "100%",
        width: "100%",
        display: "flex",
        boxSizing: "border-box",
      }}
    >
      <div className="upperrow-box">
        <span className="upperrow-label">CT:</span>
        <span className="upperrow-value">10:35:02</span>
      </div>
      <div className="upperrow-box">
        <span className="upperrow-label">CS:</span>
        <span className="upperrow-value">10:45 am</span>
      </div>

      <div
        className="upperrow-box"
        style={{ minWidth: "60px", maxWidth: "90px", padding: "1px 2px" }}
      >
        <span className="upperrow-value" style={{ fontWeight: 600 }}>09:58</span>
        <span
          style={{
            fontSize: "1vw",
            fontWeight: 400,
            marginLeft: "4px",
            color: "#0c0c0cff",
            display: "inline",
            alignSelf: "flex-end",
            lineHeight: 1,
          }}
        >
          RT
        </span>
      </div>

      <div
        className="upperrow-box"
        style={{ minWidth: "40px", maxWidth: "60px", padding: "1px 2px" }}
      >
        <span className="upperrow-value">17080</span>
        <span
          style={{
            fontSize: "1vw",
            fontWeight: 400,
            marginLeft: "4px",
            color: "#0c0c0cff",
            alignSelf: "flex-end",
            lineHeight: 1,
          }}
        >
          PT
        </span>
      </div>

      <div className="upperrow-box green">RESULT (F1)</div>
      <div className="upperrow-box green account-box">ACCOUNT(F2)</div>
      <div className="upperrow-box green">REPRINT (F3)</div>
      <div className="upperrow-box green">CANCEL (F4)</div>
      <div className="upperrow-box green">REFRESH (F5)</div>

      <div
        className="upperrow-box"
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          padding: 0,
          flexDirection: "row",
          gap: "4px",
          minWidth: "120px",
          maxWidth: "180px",
        }}
      >
        <span style={{ display: "inline-block", margin: 0, lineHeight: 0.75 }}>
          Global<br />Bonus
        </span>
        <span
          style={{
            background: "#fff",
            color: "#000",
            borderRadius: 0,
            padding: "2px 10px",
            display: "inline-block",
            minWidth: "32px",
            minHeight: "20px",
            boxSizing: "border-box",
          }}
        >
          1000
        </span>
      </div>

      <style>{`
        .upperrow-responsive {
          display: flex;
          align-items: center;
          width: 100%;
          gap: 0.5vw;
          justify-content: space-between;
          box-sizing: border-box;
          padding: 2px 0;
          flex-wrap: nowrap;
        }
        .upperrow-box {
          display: flex;
          align-items: center;
          justify-content: center;
          background: #ffd900;
          border-radius: clamp(8px, 1vw, 14px);
          padding: clamp(2px, 0.4vw, 6px) clamp(4px, 0.8vw, 10px);
          min-width: clamp(65px, 8vw, 95px);
          min-height: clamp(16px, 3.7vw, 23px);
          height: clamp(46px, 6vw, 56px);
          font-weight: bold;
          font-size: clamp(13px, 1.2vw, 18px);
          color: #000;
          border: 2px solid #0e0d0dff;
          box-sizing: border-box;
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
          flex: 1 1 0;
          max-width: none;
        }
        .upperrow-box.green {
          background: #a6ff4d;
          border: 2px solid #101110ff;
        }
        .upperrow-label {
          background: #000;
          color: #fff;
          font-weight: bold;
          font-size: clamp(11px, 1vw, 14px);
          border-radius: 4px;
          padding: 1px 3px;
          margin-right: 3px;
        }
        .upperrow-value {
          font-size: clamp(13px, 1.2vw, 18px);
          font-weight: bold;
          color: #000;
        }

        /* Desktop-only adjustments */
        @media (min-width: 768px) {
          .upperrow-responsive {
            align-items: stretch;
          }
          .upperrow-box {
            height: 100%;
          }
        }

        /* Mobile-only adjustments with full height fix */
        @media (max-width: 599px) {
          .upperrow-responsive {
            flex-wrap: wrap !important;
            gap: 2px;
            justify-content: center;
            align-items: stretch !important; /* ✅ make boxes stretch */
          }
          .upperrow-box {
            flex: 1 1 30% !important;
            max-width: 32%;
            font-size: clamp(10px, 2.1vw, 13px);
            padding: clamp(1px, 0.5vw, 3px) clamp(2px, 1vw, 4px);
            min-height: clamp(36px, 8vw, 52px) !important;
            height: clamp(44px, 10vw, 60px) !important;
          }
          .upperrow-box[style] {
            min-width: 28px !important;
            max-width: 40px !important;
            padding: 1px 1px !important;
          }
          .upperrow-box.account-box {
            max-width: 70% !important;
            flex: 1 1 60% !important;
            z-index: 1;
          }
          .upperrow-label {
            font-size: clamp(9px, 1.8vw, 12px);
            padding: 1px clamp(2px, 1vw, 4px);
            margin-right: 1vw;
          }
          .upperrow-value {
            font-size: clamp(11px, 2.3vw, 14px);
          }
        }
      `}</style>
    </div>
  );
};

export default UpperRow;

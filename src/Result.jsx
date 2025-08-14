import React from "react";

export default function Result() {
  return (
    <div className="kohinoor-container" style={{ height: '100%', width: '100%', display: 'flex', alignItems: 'center' }}>
      <div className="kohinoor-title">Kohinoor</div>
      <div className="kohinoor-boxes">
        <div className="box red">1085 <span>2x</span></div>
        <div className="box blue">1190 <span>3x</span></div>
        <div className="box purple">1251 <span>1x</span></div>
        <div className="box green">1339 <span>1x</span></div>
        <div className="box violet">1434 <span>2x</span></div>
        <div className="box orange">1502 <span>3x</span></div>
        <div className="box darkpink">1604 <span>3x</span></div>
        <div className="box pink">1765 <span>2x</span></div>
        <div className="box teal">1848 <span>1x</span></div>
        <div className="box yellow">1920 <span>2x</span></div>
      </div>
      <div className="kohinoor-time">
        2023-02-01<br />04:30 pm
      </div>

      <style>{`
        .kohinoor-container {
          display: flex;
          align-items: center;
          background: #000;
          padding: 4px;
          color: white;
          font-family: Arial, sans-serif;
          width: 100vw;
          min-width: 100vw;
          box-sizing: border-box;
        }
        .kohinoor-title {
          font-size: 2vw;
          font-weight: bold;
          margin-right: 0.5vw;
          flex-shrink: 0;
        }
        .kohinoor-boxes {
          display: flex;
          gap: 0.3vw;
          flex-wrap: nowrap;
          flex: 1;
          justify-content: space-between;
        }
        .box {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 0.3vw;
          padding: 0;
          border-radius: 0.3vw;
          font-weight: bold;
          font-size: 2.2vw;
          flex: 1;
          min-width: 0;
          height: 2.8vw;
        }
        .box span {
          background: black;
          color: red;
          border-radius: 0.3vw;
          font-size: 1.5vw;
          font-weight: bold;
          padding: 0.2vw 0.6vw;
          display: flex;
          align-items: center;
          height: 80%;
          margin: auto 0;
          text-shadow: 1px 1px 2px #181818ff, 0 0 1px #fff;
        }
        .red { background: #d32f2f; }
        .blue { background: #1976d2; }
        .purple { background: #8e24aa; }
        .green { background: #388e3c; }
        .violet { background: #5e35b1; }
        .orange { background: #f57c00; }
        .darkpink { background: #c2185b; }
        .pink { background: #ad1457; }
        .teal { background: #00796b; }
        .yellow { background: #fbc02d; }
        .kohinoor-time {
          font-size: 1.2vw;
          text-align: right;
          margin-left: 0.5vw;
          flex-shrink: 0;
        }
        @media (max-width: 768px) {
          .kohinoor-title {
            font-size: 3vw;
          }
          .box {
            font-size: 3.5vw;
            padding: 0.1vw 0.3vw;
            height: 6vw;
          }
          .box span {
            font-size: 1.2vw;
            padding: 0.1vw 0.4vw;
            height: 60%;
            margin: auto 0;
            align-items: center;
          }
          .kohinoor-time {
            font-size: 2vw;
          }
        }
      `}</style>
    </div>
  );
}

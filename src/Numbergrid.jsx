import React from "react";

export default function NumberGrid() {
  const columns = ["B0", 1, 2, 3, 4, 5, 6, 7, 8, 9];
  const numbers = [];
  const blocks = Array.from({ length: 10 }, (_, i) => `F${i}`);

  for (let i = 0; i < 10; i++) {
    const row = [];
    for (let j = 0; j < 10; j++) {
      row.push(1000 + i * 10 + j);
    }
    numbers.push(row);
  }

  return (
    <>
      <style>{`
  .numbergrid-wrapper {
    display: flex;
    flex: 1;
    width: 100%;
    height: 100%;
    justify-content: center;
    align-items: center;
    box-sizing: border-box;
    padding: 0.2rem;
    overflow: hidden;
  }

  .grid-container {
    display: grid;
    grid-template-columns: repeat(${columns.length + 1}, minmax(0, 1fr));
    gap: clamp(1px, 0.3vw, 6px);
    width: 100%;
    height: 100%;
  }

  .header {
    font-weight: bold;
    text-align: center;
    color: #000;
    line-height: 1.1;
    margin-bottom: 1px;
    font-size: clamp(10px, 1.1vw, 15px);
    white-space: nowrap;
  }

  .cell {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  .num-text {
    font-weight: 900;
    margin: 0;
    line-height: 1;
    font-size: clamp(11px, 1vw, 14px);
    color: #000;
    white-space: nowrap;
  }

  .capsule {
    border-radius: 999px;
    border: 1.5px solid #6a1b9a;
    background-color: transparent;
    width: clamp(22px, 4.3vw, 43px);
    height: clamp(11px, 1.3vh, 13px);
    max-height: clamp(22px, 3.2vh, 13px);
    margin-top: 1px;
  }

  /* Desktop adjustments */
  @media (min-width: 1024px) {
    .grid-container {
      gap: 2px; /* tighter and more compact */
    }
    .num-text {
      font-size: clamp(12px, 1.3vw, 17px);
    }
    .capsule {
      width: clamp(38px, 9vw, 64px); /* bigger for desktop */
      height: clamp(20px, 2.4vh, 24px);
      max-height: clamp(30px, 4vh, 24px);
    }
  }



  /* Mobile landscape fix */
  @media (max-width: 599px) {
    .grid-container {
      gap: 2px;
    }
  }
`}</style>

      <div className="numbergrid-wrapper">
        <div className="grid-container">
          {/* Header row */}
          <div className="header" style={{ color: "#1565c0" }}>BLOCK</div>
          {columns.map((col) => (
            <div key={col} className="header">{col}</div>
          ))}

          {/* Data rows */}
          {blocks.map((block, rowIdx) => (
            <React.Fragment key={block}>
              <div className="cell">
                <div className="num-text">{block}</div>
                <div className="capsule"></div>
              </div>
              {numbers[rowIdx].map((num) => (
                <div key={num} className="cell">
                  <div className="num-text">{num}</div>
                  <div className="capsule"></div>
                </div>
              ))}
            </React.Fragment>
          ))}
        </div>
      </div>
    </>
  );
}

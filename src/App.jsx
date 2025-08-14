import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Result from './Result.jsx'
import UpperRow from './Upperrow.jsx'
import Filter from './Filter.jsx'
import NumberGrid from './Numbergrid.jsx'
import QtyAmountTable from './Quant.jsx'
import Leftcol from './Leftcol.jsx'
import Sample from './Sample.jsx'
import AdvanceDraw from './AdvanceDraw.jsx'

function App() {

    const [selected, setSelected] = useState("1000-1099");

    const itemStyle = (isSelected) => ({
    display: "flex",
    alignItems: "center",
    backgroundColor: isSelected ? "#0d47a1" : "#f4c963",
    color: isSelected ? "#fff" : "#000",
    padding: "10px 24px",
    marginBottom: "12px",
    borderRadius: "4px",
    width: "180px",
    fontWeight: "500",
    fontSize: "16px",
    cursor: "pointer"
  });

  const ranges = [
    "All",
    "1000-1099",
    "1100-1199",
    "1200-1299",
    "1300-1399",
    "1400-1499",
    "1500-1599",
    "1600-1699",
    "1700-1799",
    "1800-1899",
    "1900-1999"
  ];

  return (
     <div style={{ width: '100vw', height: '100vh', boxSizing: 'border-box', overflow: 'hidden', margin: 0, padding: 0 }}>
       <Sample />
     </div>
  )
}

export default App



  //  <div>
  //     <div>
  //       <Result />
  //     </div>
  //     <div className="notification">
  //       <span className="notificationText">
  //         Welcome to Kohinoor Skill game
  //       </span>
  //     </div>
  //     <div>
  //       <UpperRow />
  //     </div>
  //     <div>
  //       <Filter />
  //     </div>
  //     <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'flex-start', gap: '24px', width: '100%', boxSizing: 'border-box' }}>
  //        <Leftcol />
  //       <div>
  //         <NumberGrid />
  //       </div>
  //       <div>
  //         <QtyAmountTable />
  //       </div>
  //     </div>
  //   </div>
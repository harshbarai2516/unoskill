import React from "react";
import NumberGrid from "./Numbergrid";
import QtyAmountTable from "./Quant.jsx";
import Leftcol from "./Leftcol.jsx";
import Result from "./Result.jsx";
import UpperRow from "./Upperrow.jsx";
import Filter from "./Filter.jsx";
import BottomRow from "./Bottom.jsx";
import WelcomeBanner from "./Notif.jsx";


function Sample() {
  return (
    <>
      <style>{`
            @media (max-width: 599px) {
              .numbergrid-flex {
                width: 100vw !important;
                height: 100% !important;
                min-width: 0 !important;
                min-height: 0 !important;
                box-sizing: border-box !important;
                overflow: hidden !important;
              }
             
          `}</style>
      <div style={{ display: "flex", flexDirection: "column", width: "100vw", height: "100vh", boxSizing: "border-box" }}>
        <div style={{ height: '21%', display: 'flex', flexDirection: 'column', width: '100%', overflow: 'hidden' }}>
          <div style={{ background: '#1565c0', color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.2rem', flex: 1, minHeight: 0, height: '100%' }}>
            <Result style={{ height: '100%', width: '100%' }} />
          </div>
          <div className="" style={{ marginBottom: '1px' ,height: '20%', background: '#090909ff', color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 'bold', overflow: 'hidden' }}>
             <div className="notification-parent">
      <div className="welcome-banner">
        Welcome to Skill Game
      </div>

      <style>{`
        /* Welcome Banner - Mobile first */
        .welcome-banner {
          padding: 10px 20px;
          text-align: center;
          font-weight: bold;
          color: #fff;
          background: #111211ff;
          border-radius: 8px;
          font-size: 1rem; /* Mobile size */
          line-height: 1.15;
        }

        /* Desktop / Tablet bump */
        @media (min-width: 768px) {
          .welcome-banner {
            font-size: clamp(1.4rem, 2.2vw, 2rem);
          }
        }

        /* Existing notification styles (cleaned) */
        .notification-parent {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          padding: 10px;
          gap: 8px;
        }
      `}</style>
    </div>
          </div>
          <div className="upperrow-container" style={{ height: '28%', background: '#ffffffff', color: '#fff', display: 'flex', alignItems: 'stretch', justifyContent: 'center', fontSize: '1.2rem', marginTop: '0px', marginBottom: '1px' }}>
            <UpperRow style={{ height: '100%', width: '100%' }} />
            <style>{`
                      @media (max-width: 599px) {
                        .upperrow-container {
                        height: 15% !important;
                        min-height: 50px !important;
                        margin-top: 0px !important;
                        margin-bottom: 1px !important;
                          }
                      }
            `}</style>
          </div>
          <div className="filter-container" style={{ flex: 0.4, background: '#ffffffff', color: '#000', display: 'flex', height: '100%', width: '100%', overflow: 'hidden', marginTop: '1px' }}>
            <Filter />
            <style>{`
              @media (max-width: 599px) {
                    .filter-container {
                      flex-wrap: wrap !important;
                      overflow-x: auto !important;
                     }
              }
            `}</style>
          </div>
        </div>
        <div style={{ height: '72%', display: 'flex', width: '100%' }}>
          <div style={{ width: '20%', background: '#f4c963', color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.5rem' }}>
            <Leftcol />
          </div>
          <div className="numbergrid-flex" style={{ width: '65%', background: 'rgba(250, 245, 245, 1)', color: '#1f1e1eff', display: 'flex', alignItems: 'stretch', justifyContent: 'center', fontSize: '1.5rem', height: '100%' }}>
            <div style={{ width: '100%', height: '100%', display: 'flex', alignItems: 'stretch', justifyContent: 'center' }}>
              <NumberGrid />
            </div>
          </div>
          <div style={{ width: '15%', background: '#f4c963', color: '#000', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.5rem' }}>
            <QtyAmountTable />
          </div>
        </div>
         <BottomRow/>
      </div>
    </>
  )
}

export default Sample;

{/* <div style={{ width: '100%', margin: 0, padding: 0, flex: 1, minHeight: 0 }}>
            <Result />
          </div>
          <div className="notification" style={{ width: '100%', margin: 0, padding: '0px', fontSize: '1rem', textAlign: 'center', minHeight: 0 }}>
            <span className="notificationText">
              Welcome to Kohinoor Skill game
            </span>
          </div>
          <div style={{ width: '100%', margin: 0, padding: 0, flex: 1, minHeight: 0 }}>
            <UpperRow />
          </div>
          <div style={{ width: '100%', margin: 0, padding: 0, flex: 1, minHeight: 0 }}>
            <Filter />
          </div> */}
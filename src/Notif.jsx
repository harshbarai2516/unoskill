import React from "react";

const WelcomeBanner = () => {
  return (
    <div className="welcome-banner">
      Welcome to Skill Game

      <style>{`
        /* Base (mobile-first) — applies everywhere unless overridden by larger breakpoints */
        .welcome-banner,
        .notification-parent .welcome-banner {
          padding: 0px;
          text-align: center;
          font-weight: bold;
          color: #fff;
          background: #111211ff;
          border-radius: 8px;
          font-size: 50rem; /* mobile size */
          line-height: 1.15;
        }

        /* Desktop/tablet bump — ONLY from 768px upward */
        @media (min-width: 768px) {
          .welcome-banner,
          .notification-parent .welcome-banner {
            font-size: clamp(1.4rem, 2.2vw, 2rem);
          }
        }
      `}</style>
    </div>
  );
};

export default WelcomeBanner;

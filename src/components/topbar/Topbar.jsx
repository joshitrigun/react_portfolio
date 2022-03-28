import React from "react";
import "./Topbar.scss";

const Topbar = () => {
  return (
    <div className="topbar">
      <div className="wrapper">
        <div className="left">
          <a href="#intro_id" className="logo">
            Trigun.
          </a>
        </div>

        <div className="right">Right hand</div>
      </div>
    </div>
  );
};

export default Topbar;

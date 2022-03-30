import React from "react";
import "./Menu.scss";

const Menu = ({ menuOpen, setMenuOpen }) => {
  return (
    <div className={"menu " + (menuOpen && "active")}>
      <ul>
        <li onClick={() => setMenuOpen(false)}>
          <a href="#intro_id">Home</a>
        </li>
        <li onClick={() => setMenuOpen(false)}>
          <a href="#portfolio_id">Portfolio</a>
        </li>
        <li onClick={() => setMenuOpen(false)}>
          <a href="#works_id">Works</a>
        </li>
        <li onClick={() => setMenuOpen(false)}>
          <a href="#testimonials_id">Testimonials</a>
        </li>
        <li onClick={() => setMenuOpen(false)}>
          <a href="#contact_id">Contact</a>
        </li>
      </ul>
    </div>
  );
};

export default Menu;

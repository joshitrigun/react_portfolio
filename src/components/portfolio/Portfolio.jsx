import React, { useState } from "react";
import PortfolioList from "../portfolioList/PortfolioList";
import "./Portfolio.scss";

const Portfolio = () => {
  const [selected, setSelected] = useState("featured");
  const list = [
    { id: "featured", title: "Featured" },
    { id: "webapp", title: "Web App" },
    { id: "ecommerce", title: "E-commerce App" },
    { id: "Content", title: "Content" },
  ];
  return (
    <div className="portfolio" id="portfolio">
      <h1>Portfolio</h1>
      <ul>
        {list.map((item) => (
          <PortfolioList
            title={item.title}
            id={item.id}
            active={selected === item.id}
            setSelected={setSelected}
          />
        ))}
      </ul>
      <div className="container">
        <div className="item">
          <img
            src="https://images.pexels.com/photos/9143162/pexels-photo-9143162.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt=""
          />
          <h3>Banking App</h3>
        </div>
        <div className="item">
          <img
            src="https://images.pexels.com/photos/9143162/pexels-photo-9143162.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt=""
          />
          <h3>Banking App</h3>
        </div>
        <div className="item">
          <img
            src="https://images.pexels.com/photos/9143162/pexels-photo-9143162.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt=""
          />
          <h3>Banking App</h3>
        </div>
        <div className="item">
          <img
            src="https://images.pexels.com/photos/9143162/pexels-photo-9143162.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt=""
          />
          <h3>Banking App</h3>
        </div>
        <div className="item">
          <img
            src="https://images.pexels.com/photos/9143162/pexels-photo-9143162.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt=""
          />
          <h3>Banking App</h3>
        </div>
        <div className="item">
          <img
            src="https://images.pexels.com/photos/9143162/pexels-photo-9143162.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt=""
          />
          <h3>Banking App</h3>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;

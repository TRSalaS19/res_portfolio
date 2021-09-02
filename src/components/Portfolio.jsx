import React, { useEffect, useState } from "react";
import PortfolioList from "./PortfolioList";
import {
  allPortfolio,
  ecomPortfolio,
  searchSitePortfolio,
  webAppPortfolio,
} from "../data";

const Portfolio = () => {
  const [selected, setSelected] = useState("all");
  const [data, setData] = useState([]);

  const list = [
    {
      id: "all",
      category: "All",
    },
    {
      id: "web",
      category: "Web Apps",
    },
    {
      id: "eCom",
      category: "eCom Sites",
    },
    {
      id: "search",
      category: "Search Sites",
    },
  ];

  useEffect(() => {
    switch (selected) {
      case "all":
        setData(allPortfolio);
        break;
      case "web":
        setData(webAppPortfolio);
        break;
      case "eCom":
        setData(ecomPortfolio);
        break;
      case "search":
        setData(searchSitePortfolio);
        break;
      default:
        setData(allPortfolio);
    }
  }, [selected]);
  return (
    <div className='portfolio' id='portfolio'>
      <h1>PORTFOLIO PROJECTS</h1>
      <ul>
        {list.map((item) => (
          <PortfolioList
            key={item.id}
            title={item.category.toUpperCase()}
            active={selected === item.id}
            setSelected={setSelected}
            id={item.id}
          />
        ))}
      </ul>
      <div className='portfolio-container'>
        {data.map((d) => (
          <div key={d.id} className='portfolio-item'>
            <a href={d.link}>
              <img className='portfolio-link-img' src={d.img} alt={d.title} />
              <h3>{d.title}</h3>
            </a>
          </div>
        ))}
      </div>
      <a href='#contact' className='arrow-container'>
        <i className='fas fa-arrow-down portfolio-arrow'></i>
      </a>
    </div>
  );
};

export default Portfolio;

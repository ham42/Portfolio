import "./favorites.scss";
import { useState, useEffect } from "react";
import PortfolioList from "../portfolioList/PortfolioList";
import {technologyList, sportList, mobPortfolio, moviesList} from '../../data';

export default function Favorites() {

  const [selected, setSelected] = useState('technologies');
  const [data, setData] = useState([])
  const list = [
    {
      id: "technologies",
      title: "Technologies"
    },
    {
      id: "sports",
      title: "Sports"
    },
    {
      id: "mob",
      title: "Mobile App"
    },
    {
      id: "movies",
      title: "Movies"
    }
  ]

  useEffect(() => {

    switch(selected){
      case "technologies":
        setData(technologyList);
        break;
      case "sports":
        setData(sportList);
        break;
      case "mob":
        setData(mobPortfolio);
        break;
      case "movies":
        setData(moviesList);
        break;
      default:
        setData(technologyList);
    }

  }, [selected])

  return (
    <div className="favorites" id="favorites">
      <h1>Favorites</h1>

      <ul>
        {list.map((item) => (
          <PortfolioList id={item.id} title={item.title} active={selected === item.id} setSelected={setSelected}/>
          )
        )}
      </ul>

      <div className="container">
        {data.map((d) => (
          <div className="item">
            <img src={d.img} alt="" />
            <h3>{d.title}</h3>
          </div>
          ))}
      </div>
    </div>
  )
}

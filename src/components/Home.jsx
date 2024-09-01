import React, { useState, useEffect } from "react";
import "./HomeCSS.css";
import RestroCard from "./RestroCard";
const Home = () => {
  const [restroList, setRestroList] = useState([]);

  useEffect(() => {
    callAPI();
  }, []);

  const callAPI = async () => {
    let body = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=17.4946106&lng=78.3875336&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    let Json = await body.json();
    console.log("Json", Json);
    setRestroList(
      Json.data.cards[4].card.card.gridElements.infoWithStyle.restaurants
    );
  };

  return (
    <div className="container-fluid home-container">
      <div>
        <button
          onClick={() => {
            setRestroList(restroList.filter((item) => item.info.avgRating > 4));
            //  restroList= restroList.filter((item)=>item.info.avgRating > 4 )
            console.log("restroListJS", restroList);
          }}
        >Filter</button>
      </div>

      <div className="d-flex restaurant-container">
        {restroList.map((item) => (
          <RestroCard key={item.info.id} data={item.info} />
        ))}
      </div>
    </div>
  );
};

export default Home;

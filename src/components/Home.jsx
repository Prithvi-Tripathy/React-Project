import React, { useState, useEffect } from "react";
import "./HomeCSS.css";
import RestroCard from "./RestroCard";
import Carousel from "./Carousel";
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

      <div className="row">
        <div className="col">
          <Carousel />
        </div>

      </div>
      <div className="d-flex my-2 gap-3">
        <button
        className="filter-button"
          onClick={() => {
            setRestroList(restroList.filter((item) => item.info.avgRating > 4));
            //  restroList= restroList.filter((item)=>item.info.avgRating > 4 )
            console.log("restroListJS", restroList);
          }}
        >Filter</button>
        <button
        className="filter-button"
          onClick={() => {
            setRestroList(restroList.filter((item) => item.info.avgRating > 4));
            //  restroList= restroList.filter((item)=>item.info.avgRating > 4 )
            console.log("restroListJS", restroList);
          }}
        >Sort By</button>
        <button
        className="filter-button"
          onClick={() => {
            setRestroList(restroList.filter((item) => item.info.avgRating > 4));
            //  restroList= restroList.filter((item)=>item.info.avgRating > 4 )
            console.log("restroListJS", restroList);
          }}
        >Fast Delivery
        </button>
        <button
        className="filter-button"
          onClick={() => {
            setRestroList(restroList.filter((item) => item.info.avgRating > 4));
            //  restroList= restroList.filter((item)=>item.info.avgRating > 4 )
            console.log("restroListJS", restroList);
          }}
        >New on Swiggy
        </button>
        <button
        className="filter-button"
          onClick={() => {
            setRestroList(restroList.filter((item) => item.info.avgRating > 4));
            //  restroList= restroList.filter((item)=>item.info.avgRating > 4 )
            console.log("restroListJS", restroList);
          }}
        >Ratings 4.0+
        </button>
        <button
        className="filter-button"
          onClick={() => {
            setRestroList(restroList.filter((item) => item.info.avgRating > 4));
            //  restroList= restroList.filter((item)=>item.info.avgRating > 4 )
            console.log("restroListJS", restroList);
          }}
        >Pure Veg</button>
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

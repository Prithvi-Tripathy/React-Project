import React, { useState,useEffect } from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import './CarouselCSS.css'

const Carousel = ()=>{
    const [foodItems,setFoodItems]= useState([])
      useEffect(() => {
        callAPI();
      }, []);
    
      const callAPI = async () => {
        let body = await fetch(
          "https://www.swiggy.com/dapi/restaurants/list/v5?lat=17.4946106&lng=78.3875336&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
        );
        let Json = await body.json();
        console.log("Json", Json);
        setFoodItems(
          Json.data.cards[0].card.card.imageGridCards.info
        );
      };
    
      return (
        <div>
            <div className="heading">What's on your mind?</div>
        <Swiper spaceBetween={30} slidesPerView={10} pagination={{ clickable: true }} autoplay={{ delay: 10 }}>
          {foodItems.map((item) => (
            <SwiperSlide key={item.id}>
              <div className="food-slide">
                <img style={{width:"114px",height: "150px"}} src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_288,h_360/"+item.imageId} alt={item.description} />
    
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
        </div>
      );
}
export default Carousel
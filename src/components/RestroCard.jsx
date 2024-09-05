import React from "react";
import "./RestroCardCSS.css";

const RestroCard = (props) => {
  console.log("props", props);
  const wordLimiter=(val)=>{
    if(val.length>20){
        return val.slice(0,18)+'...';
    }
    else{
        return val;
    }
  }
  return (
    <div>
      <div class="restro-card m-2">
        <div class="restro-image">
          <img
            src={
              "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" +
              props.data.cloudinaryImageId
            }
            alt="Hotel Img"
          />
        </div>
        <div class="restro-details">
          <h3 class="restro-name" title={props.data.name}>{wordLimiter(props.data.name)}</h3>
          <p class="restro-cuisine">{wordLimiter(props.data.cuisines.join(","))}</p>
          <div className="d-flex justify-content-between align-items-center">
            <div class="restro-rating">
              <span>⭐ {props.data.avgRating}</span>
            </div>
            <button class="view-menu-btn">View Menu</button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default RestroCard;

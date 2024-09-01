import React from "react";
import "./RestroCardCSS.css"
const RestroCard = (props) =>{
console.log("props",props)
return (
    <div className="restro-card">
        <img src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/"+props.data.cloudinaryImageId} alt="Hotel Img"></img>
        <div className="restro-content">
        <div>{props.data.name}</div>
        <div>Rating:{props.data.avgRating}</div>
        <div>{props.data.cuisines.join(",")}</div>
        <div>{props.data.costForTwo}</div>
        <div>{props.data.sla.deliveryTime} mins</div>
        </div>
        
    </div>
)
}
export default RestroCard;
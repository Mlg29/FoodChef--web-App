import React from "react"
import "./Foodlist.css"


function FoodList(props) {
    return (
        <div style={{margin: 0}} >
            <img className="food-image" src={props.image} alt="" width="395"/>
            <h1 className="food-header">{props.text}</h1>
        </div>
    )
}

export default FoodList
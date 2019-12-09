import React from "react"
import "./Food-item.css"
import FoodList from "../Food"

function FoodItem(props) {
    return (
        <div className="food-item">
            <h1 className="food-item-header">Our Food</h1>
            <div className="food-item-div">
                <FoodList 
                    image="https://res.cloudinary.com/dtbjhs8a6/image/upload/v1575623519/foodchef/qmwszbwxpylrxd8lmdp3.jpg"
                    text="BEEF WELLINGTON"
                />
                <FoodList 
                    image="https://res.cloudinary.com/dtbjhs8a6/image/upload/v1575623519/foodchef/fczglvpexcowv5cglepq.jpg"
                    text="REUBEN SANDWICH"
                />
                <FoodList 
                    image="https://res.cloudinary.com/dtbjhs8a6/image/upload/v1575623519/foodchef/hf25didqqhnfo0mcjqbr.jpg"
                    text="FETTUCCINE ALFREDO"
                />
                <FoodList 
                    image="https://res.cloudinary.com/dtbjhs8a6/image/upload/v1575623519/foodchef/lon4u1nuhxlipr037pjb.jpg"
                    text="SAUSBURY STEAK"
                />
            </div>
            <div className="food-item-div">
                <FoodList 
                    image="https://res.cloudinary.com/dtbjhs8a6/image/upload/v1575623519/foodchef/bvhdmlh3zgppbxdameig.jpg"
                    text="COBB SALAD"
                />
                <FoodList 
                    image="https://res.cloudinary.com/dtbjhs8a6/image/upload/v1575623519/foodchef/sdwsujhb3rgfwbwx81pr.jpg"
                    text="CHICKEN MARENGO"
                />
                <FoodList 
                    image="https://res.cloudinary.com/dtbjhs8a6/image/upload/v1575623520/foodchef/k0smfgjsufzcrsnnpnmb.jpg"
                    text="EGGS BENEDICT"
                />
                <FoodList 
                    image="https://res.cloudinary.com/dtbjhs8a6/image/upload/v1575623519/foodchef/j48vsjtoyjfttbwu4mzh.jpg"
                    text="BOLIEDEDD MINT"
                />
            </div>
            <div className="food-item-div">
                <FoodList 
                    image="https://res.cloudinary.com/dtbjhs8a6/image/upload/v1575623520/foodchef/nz7bhdw1uv47gd9fjcye.jpg"
                    text="CAESAR SALAD"
                />
                <FoodList 
                    image="https://res.cloudinary.com/dtbjhs8a6/image/upload/v1575623520/foodchef/jcgdt0y8zycnxplv8vp4.jpg"
                    text="FRUIT BROWN BETTY"
                />
                <FoodList 
                    image="https://res.cloudinary.com/dtbjhs8a6/image/upload/v1575623520/foodchef/nyzl2olnby3bmdnw4a26.jpg"
                    text="NACHOS FOOD"
                />
                <FoodList 
                    image="https://res.cloudinary.com/dtbjhs8a6/image/upload/v1575623523/foodchef/ps4u8hu7ljdzkyeaiuj5.jpg"
                    text="BAKED SNAPPER"
                />
            </div>

        </div>
    )
}

export default FoodItem
import React from "react"
import "./homepage.css"
import Header from "../../component/Header"
import About from "../../component/About"
import Service from "../../component/Service" 
import Team from "../../component/Team"
import FoodItem from "../../component/Food-item"
import Testimony from "../../component/Testimony"
import Contact from "../../component/Contact"
import Map from "../../component/Map"
import Subscribe from "../../component/Subscribe"

function Homepage() {
    return (
        <div>
            <Header />
            <About />
            <Service />
            <Team />
            <FoodItem />
            <Testimony />
            <Contact />
            <Map />
            <Subscribe />
        </div>
    )
}

export default Homepage
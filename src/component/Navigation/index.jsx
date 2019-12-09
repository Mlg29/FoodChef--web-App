import React from "react"
import "./Navigation.css"
import { Link } from "react-router-dom"


function Navigation() {
    return (
        <nav class="navbar navbar-expand-lg navbar-light nav-bg">
            <Link to={"/"} ><h1 className="nav-header"><span className="food">FOOD</span><span className="chef">CHEF</span></h1></Link>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNav"></div>
            <div class="collapse navbar-collapse" id="navbarNav"></div>
            <div class="collapse navbar-collapse" id="navbarNav"></div>
            <div class="collapse navbar-collapse" id="navbarNav"></div>
            
            <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav">
                <li class="nav-item pr-4 active">
                <Link to="/Homepage" style={{color: "white"}} >HOME <span class="sr-only">(current)</span></Link>
                </li>
                <li class="nav-item pr-4">
                <Link t0="/About" style={{color: "white"}} >ABOUT</Link>
                </li>
                <li class="nav-item pr-4">
                <Link t0="/service" style={{color: "white"}} >SERVICES</Link>
                </li>
                <li class="nav-item pr-4">
                <Link t0="/team" style={{color: "white"}} >TEAM</Link>
                </li>
                <li class="nav-item pr-4">
                <Link t0="/our-food" style={{color: "white"}} >OUR FOOD</Link>
                </li>
                <li class="nav-item pr-4">
                <Link t0="/testimonial" style={{color: "white"}} >TESTIMONIALS</Link>
                </li>
                <li class="nav-item pr-4">
                <Link t0="/contact" style={{color: "white"}} >CONTACT</Link>
                </li>
                
            </ul>
            </div>
        </nav>
    )
}

export default Navigation
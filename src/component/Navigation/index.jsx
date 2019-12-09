import React from "react"
import "./Navigation.css"
import { Link } from "react-router-dom"


function Navigation() {
    return (
        <nav className="navbar navbar-expand-lg navbar-light nav-bg">
            <Link to={"/"} ><h1 className="nav-header"><span className="food">FOOD</span><span className="chef">CHEF</span></h1></Link>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav"></div>
            <div className="collapse navbar-collapse" id="navbarNav"></div>
            <div className="collapse navbar-collapse" id="navbarNav"></div>
            <div className="collapse navbar-collapse" id="navbarNav"></div>
            
            <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
                <li className="nav-item pr-4 active">
                <Link to="/" style={{color: "white"}} >HOME <span class="sr-only">(current)</span></Link>
                </li>
                <li className="nav-item pr-4">
                <Link to="/About" style={{color: "white"}} >ABOUT</Link>
                </li>
                <li className="nav-item pr-4">
                <Link to="/service" style={{color: "white"}} >SERVICES</Link>
                </li>
                <li className="nav-item pr-4">
                <Link to="/team" style={{color: "white"}} >TEAM</Link>
                </li>
                <li className="nav-item pr-4">
                <Link t0="/our-food" style={{color: "white"}} >OUR FOOD</Link>
                </li>
                <li className="nav-item pr-4">
                <Link to="/testimonial" style={{color: "white"}} >TESTIMONIALS</Link>
                </li>
                <li className="nav-item pr-4">
                <Link to="/contact" style={{color: "white"}} >CONTACT</Link>
                </li>
                
            </ul>
            </div>
        </nav>
    )
}

export default Navigation

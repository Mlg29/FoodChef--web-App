import React from "react"
import "./Header.css"
import Navigation from "../Navigation"

function Header() {
    return (
        <div className="header">
            <Navigation />
            <img className="header-image" src="https://res.cloudinary.com/dtbjhs8a6/image/upload/v1575623522/foodchef/kenumqxd2eqz8gwlpj3j.jpg" alt="" height='800' />
                       
            <div className="container-fluid">
                <div className="row">
                    <div className="col-12 header-div">
                        <h1 className="header-text">WELCOME TO OUR <br />RESTAURANT</h1>
                        <p className="header-paragraph">Lorem ipsum dolor sit</p>
                        <button type="btn" className="button">LEARN MORE</button>
                    </div>
                </div>                
            </div>
           
        </div>
        
    )
}

export default Header
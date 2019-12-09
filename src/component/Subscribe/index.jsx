import React from "react"
import "./Subscribe.css"

function Subscribe() {
    return (
        <div>
             <div className="subscribe">
                <h2 className="subscribe-header">Subscribe to get the latest updates right to your inbox</h2>
                
                <div className="subscribe-div">
                    <input className="subscribe-input" type="email" placeholder="Enter your Email" />
                    <button className="subscribe-button" type="button">SUBSCRIBE</button>        
                
                </div>           
            </div>
            <div className="footer">
                <h3 className="footer-header">Follow us on: </h3>   
                <h3 className="footer-header2">&copy 2017 Food Chef. All rights reserved | Designed by Mlg</h3>
            </div>
        </div>
       
    )
}

export default Subscribe
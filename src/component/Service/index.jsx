import React from "react"
import "./Service.css"


function Service() {
    return (
        <div className="service">
            <h1 className="service-header">Our Services</h1>
            <div className="service-section">
                <div className="service-col1">
                    <div className="service-div">
                        <div>
                            <img class="service-image" src="https://img.icons8.com/plasticine/20/000000/wine-glass.png" alt=""/>
                        </div>
                        
                        <p className="service-paragraph">Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Nam eget mollis sem. Proin cursus rhoncus lectus, at
                        gravida elit vestibulum at. In quis erat ut metus cursus</p>
                    </div>
                    <div className="service-div">
                        <div>
                            <img class="service-image" src="https://img.icons8.com/plasticine/20/000000/wine-glass.png" alt=""/>
                        </div>
                        <p className="service-paragraph">Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Nam eget mollis sem. Proin cursus rhoncus lectus, at
                        gravida elit vestibulum at. In quis erat ut metus cursus</p>
                    
                    </div>
                    <div className="service-div">
                        <div>
                            <img class="service-image" src="https://img.icons8.com/plasticine/20/000000/wine-glass.png" alt=""/>
                        </div>
                        <p className="service-paragraph">Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Nam eget mollis sem. Proin cursus rhoncus lectus, at
                        gravida elit vestibulum at. In quis erat ut metus cursus</p>
                    
                    </div>
                </div>
                <div className="service-div-image">
                    <img className="service-chef" src="https://res.cloudinary.com/dtbjhs8a6/image/upload/v1575623518/foodchef/xgsbaoryvm00ju0iigv7.png" alt="" width="250" height="300" />
                </div>
                <div className="service-div-image1"> 
                    <img className="burger" src="https://res.cloudinary.com/dtbjhs8a6/image/upload/v1575623521/foodchef/eeixejrmq70nvuxgkcxg.jpg" alt="" width="150" height="150" />
                    <img className="burger" src="https://res.cloudinary.com/dtbjhs8a6/image/upload/v1575623521/foodchef/ulclui5nhurukl3e9ufz.jpg" alt="" width="150" height="150" />
                </div>
            </div>
        </div>
    )
}

export default Service
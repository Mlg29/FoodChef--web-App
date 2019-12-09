import React from "react"
import "./About.css"

function About() {
    return (
        <div className="about">
            <h1 className="about-header">About Us</h1>

            <h3 className="about-header2">About our Restaurant food</h3>
            <p className="about-paragraph">Lorem ipsum dolor sit amet, consectetur adipiscing elit Nam eget mollis sem</p>

            <div className="about-col1">
                <div className="about-col-div">
                    <h1 className="about-col-header">LOREM IPSUM DOLET<br /> STAMET</h1>
                    <p className="about-col-paragraph">Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                     Nam eget mollis sem. Proin cursus rhoncus lectus, at
                     gravida elit vestibulum at. In quis erat ut metus cursus</p>
                </div>
                <img className="about-col-image" src="https://res.cloudinary.com/dtbjhs8a6/image/upload/v1575623517/foodchef/xn5tulseypbryzwy4ipt.jpg" alt="" width="375" />
                <div className="about-col-div1">
                    <h1 className="about-col-header">LOREM IPSUM DOLET<br /> STAMET</h1>
                    <p className="about-col-paragraph">Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                     Nam eget mollis sem. Proin cursus rhoncus lectus, at
                     gravida elit vestibulum at. In quis erat ut metus cursus</p>
                </div>
            </div>
            
            <div className="about-col1">
                <img className="about-col-image" src="https://res.cloudinary.com/dtbjhs8a6/image/upload/v1575623518/foodchef/a8lnagucpt2ucasfgupa.jpg" alt="" width="395" />

                <div className="about-col-div2">
                    <h1 className="about-col-header">LOREM IPSUM DOLET<br /> STAMET</h1>
                    <p className="about-col-paragraph">Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                     Nam eget mollis sem. Proin cursus rhoncus lectus, at
                     gravida elit vestibulum at. In quis erat ut metus cursus</p>
                </div>

                <img className="about-col-image" src="https://res.cloudinary.com/dtbjhs8a6/image/upload/v1575623517/foodchef/idgc0clumyt26gqhespf.jpg" alt="" width="395" />
                
            </div>
            
        </div>
    )
}

export default About
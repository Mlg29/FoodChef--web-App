import React from "react"
import "./Team.css"


function Team() {
    return (
        <div className="team">
            <h1 className="team-header">Team</h1>

            <div className="team-section">
                <div className="team-div">
                    <img className="team-image" src="https://res.cloudinary.com/dtbjhs8a6/image/upload/v1575623523/foodchef/uhyrpqijtbcevz9cebtr.jpg" alt="" height="200" />
                    <h3 className="team-div-header">James Roy</h3>
                    <p className="team-div-paragraph">Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                     </p>
                </div>
                <div className="team-div">
                    <img className="team-image" src="https://res.cloudinary.com/dtbjhs8a6/image/upload/v1575623522/foodchef/kaeccr5pjdlsk0oqbyiz.jpg" alt="" height="200" />
                    <h3 className="team-div-header">John Deol</h3>
                    <p className="team-div-paragraph">Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                     </p>
                </div>
                <div className="team-div">
                    <img className="team-image" src="https://res.cloudinary.com/dtbjhs8a6/image/upload/v1575623523/foodchef/v12zfdoydwdzmkgxy5fx.jpg" alt="" height="200"  />
                    <h3 className="team-div-header">Edward Cren</h3>
                    <p className="team-div-paragraph">Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                     </p>
                </div>
                <div className="team-div">
                    <img className="team-image" src="https://res.cloudinary.com/dtbjhs8a6/image/upload/v1575623523/foodchef/cqfy6yg97pdbwmdcaqg0.jpg" alt="" height="200"  />
                    <h3 className="team-div-header">Lisaen Eddy</h3>
                    <p className="team-div-paragraph">Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                     </p>
                </div>
            </div>
        </div>
    )
}

export default Team
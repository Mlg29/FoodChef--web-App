import React from "react"
import "./Contact.css"

class Contact extends React.Component {

    render() {
        return (
            <div className="contact">
                <h1 className="contact-header">Get In Touch</h1>

                <div className="contact-div">
                    <div className="contact-text">
                        <h1 className="contact-text-header">Contact Information</h1>
                        <div className="contact-text-div">
                            <div>
                                <img src="https://img.icons8.com/dusk/20/000000/ip-address.png" alt=""/>
                            </div>
                            <div>
                                <h4 className="contact-text-div-header">  Address</h4>
                                <p className="contact-text-div-paragraph">Extended Stay Restaurant</p>
                                <p className="contact-text-div-paragraph">87th St.kansas City Lenexa 241.</p>
                            </div>
                            
                        </div>
                        <div className="contact-text-div1">
                            <div>
                                <img src="https://img.icons8.com/carbon-copy/20/000000/phone-not-being-used.png" alt=""/>
                            </div>
                            <div>
                                <h4 className="contact-text-div-header">Mobile</h4>
                                <p className="contact-text-div-paragraph">+0(23)954 566 7788</p>
                                <p className="contact-text-div-paragraph">+0(23) 375 366 9945</p>
                            </div>
                          
                        </div>
                        <div className="contact-text-div1">
                            <div>
                            <img src="https://img.icons8.com/ios/20/000000/new-message.png" alt="" />
                            </div>
                            <div className="contact-div-div">
                                <h4 className="contact-text-div-header">E-Mail</h4>
                                <p className="contact-text-div-paragraph">mail@example.com</p>
                            </div>

                        </div>
                </div>

                <div className="contact-form">
                    <div className="form-div">
                        <form className="form">
                        <input type="name" name="name" className="form-control" id="name-input" placeholder="Name" />
                        <input type="email" name="email" className="form-control" id="email-input" placeholder="Email" />
                        <input type="text" name="phone" className="form-control" id="number-input" placeholder="Phone Number" />
                        <textarea rows="5" className="form-control" placeholder="Message" id="message-input" />
                        <input type="submit" value="SUBMIT" className="submit-input" />
                    </form>
                    </div>
                    
                </div>

                </div>
                
            </div>
        )
    }
}

export default Contact
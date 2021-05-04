import React, { useState } from 'react';
import emailjs from 'emailjs-com';


const Contact = () => {

    const [isSend, setIsSend] = useState(false);
    function sendEmail(e) {
        e.preventDefault();

        emailjs.sendForm("service_9sq70qk", 'template_zh18dwb', e.target, 'user_U91HkGPS6U9rVtf2Sp1ii')
            .then((result) => {
                console.log(result.text);
                setIsSend(true);
            }, (error) => {
                console.log(error.text);
            });
    }

    return (
        <div className="text-center mb-5 p-5">
            <div className="m-3 p-3 text-center">
           <h1 className="text-white">Contact Me</h1>
           </div>

            {
                isSend ? <h5 style={{color:'green'}}>You sent your message successfully</h5>
                : <form className="contact-form" onSubmit={sendEmail}>
                <div className="row pt-5 m-auto">
                    <div className="col-md-7 form-group m-auto">
                        <input type="text" className="form-control" placeholder="Name" name="name" />
                    </div>
                    <div className="col-md-7 form-group pt-2 m-auto">
                        <input type="email" className="form-control" placeholder="Email Address" name="email" />
                    </div>
                    <div className="col-md-7 form-group pt-2 m-auto">
                        <input type="text" className="form-control" placeholder="Subject" name="subject" />
                    </div>
                    <div className="col-md-7 form-group pt-2 m-auto">
                        <textarea className="form-control" cols="30" rows="8" placeholder="Your Message" name="message"></textarea>
                    </div>
                    <div className="col-md-7 form-group pt-3 m-auto">
                        <input type="submit" className="btn btn-info" value="send message" />
                    </div>
                </div>
            </form>
            }

        </div>
    );
};

export default Contact;
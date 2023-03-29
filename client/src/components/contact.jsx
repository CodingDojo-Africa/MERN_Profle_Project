import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import {Link} from "react-router-dom";
 import Nav from './nav';
function Contact() {
  
    const form = useRef();
  
    const sendEmail = (e) => {
      e.preventDefault();
  
      emailjs.sendForm('service_z9qma78', 'template_vhcxtvq', form.current, '1_wYrk9BuBOQ7pwS9')
        .then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });
    };
   
  return (
    <>
    <Nav/>
    <section className="contact section" id="contact">
    <h2 className="section__title">Contact Me</h2>
    <span className="section__subtitle">Get in touch</span>
    <div className="contact__container container grid section__border">
        <div className="contact__content">
            <h3 className="contact__title">
                <i className="ri-questionnaire-line"></i> Reach Out
            </h3>
            <div className="contact__info">
                <div className="contact__data">
                    <span className="contact__data-title">Email</span>
                    <span className="contact__data-info">Keraani.naceur@gmail.com</span>
                </div>
                <div className="contact__data">
                    <span className="contact__data-title">Linkedlin</span>
                    <span className="contact__data-info"> www.linkedin.com/in/keraani-naceur</span>
                    <Link to="https://www.linkedin.com/in/keraani-naceur-49523a175/" target="_blank" className="contact__button">
                        Write me <i className="ri-arrow-right-line"></i>
                    </Link>
                </div>
                <div className="contact__data">
                    <span className="contact__data-title">Facebook</span>
                    <span className="contact__data-info">naseur.ker</span>
                    <Link to="https://www.facebook.com/naseur.ker" target="_blank" className="contact__button">
                        Write me <i className="ri-arrow-right-line"></i>
                    </Link>
                </div>
                <div className="contact__data">
                    <span className="contact__data-title">WhatsApp</span>
                    <span className="contact__data-info">+216 95 88 17 09</span>
                    <Link to="https://api.whatsapp.com/send?phone=0021695881709&text=Hello, more information!" target="_blank" className="contact__button">
                        Write me <i className="ri-arrow-right-line"></i>
                    </Link>
                </div>
            </div>
        </div>

        <div className="contact__content">
            <h3 className="contact__title">
                <i className="ri-send-plane-line"></i> Write me your project
            </h3>

            <form ref={form} onSubmit={sendEmail} className="contact__form" id="contact-form">
                <div className="contact__form-div">
                   
                    <input type="text" name="user_name"  id="contact-name" required placeholder="Write your name" className="contact__form-input"/>
                </div>
                <div className="contact__form-div">
                   
                    <input type="text" name="user_email"   id="contact-email" required placeholder="Write your email" className="contact__form-input"/>
                </div>
                <div className="contact__form-div contact__form-area">
                    
                    <textarea type="text" name="message"   id="contact-project" required placeholder="Write your project" className="contact__form-input"></textarea>
                </div>

                

                <input className="contact__button" type="submit" value='Submit' /> 
                     <i className="ri-arrow-right-up-line"></i>
                
            </form>
        </div>
    </div>
</section></>
  )
};

export default Contact
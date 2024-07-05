import React from 'react'
import { Link } from "react-router-dom";
import img from "../assets/img/shape-wawes.svg"
import Fimg from "../assets/img/shape-circle.svg"

function Heo() {
  return (
   <>
   
   <section className="home section" id="home">
   <div id='stars'></div>
<div id='stars2'></div>
<div id='stars3'></div>
                <div className="home__container container grid section__border">
                    <div className="home__data grid">
                        <h1 className="home__title">
                            Naceur Keraani <br/>
                            AI/Machine Learning<br/>
                            Developer , Tunis <br/>
                        </h1>

                        <div className="home__blob grid">
                            <div className="home__perfil">
                                <img src='/image/naceeiruhncf.jpg' alt="home perfil" />
                            </div>

                            <img src={img} alt="tesimege" className="home__shape-wawes" />
                            <img src={Fimg} alt="imzge" className="home__shape-circle"/>
                        </div>

                        <ul className="home__social">
                            <Link to="https://www.linkedin.com/in/keraani-naceur-49523a175/" target="_blank" className="home__social-link">
                                <i className="ri-linkedin-box-line"></i>
                            </Link>
                            <Link to="https://www.facebook.com/naseur.ker" target="_blank" className="home__social-link">
                                <i className="ri-facebook-fill"></i>
                            </Link>
                            <Link to="https://api.whatsapp.com/send?phone=0021695881709&text=Hello, more information!" target="_blank" className="home__social-link">
                                <i className="ri-whatsapp-line"></i>
                            </Link>
                        </ul>
                    </div>

                    {/* <!--==================== HOME Info 1 ====================--> */}
                    <div className="home__info">
                        <div>
                            <h3 className="home__info-title">
                                BIOGRAPHY
                            </h3>
                            <p className="home__info-description">
                            Hi. I'm Naceur,an expert in machine learning with a 
                            focus on extracting valuable insights from data. 
                            With my expertise, I can guide you through the entire process of developing a machine learning solution.
                            My goal is to help you unlock the full potential of your data and empower you to make data-driven decisions that can drive business growth and innovation.

                                
                            </p>
                        </div>

                        <div>
                            
                        </div>

                        <div>
                            <h3 className="home__info-title">
                                SERVICES
                            </h3>
                            <p className="home__info-description">
                                AI/Machine Learning Developer
                            </p>
                        </div>

                    </div>

                    {/* <!--==================== HOME Info 2 ====================--> */}
                    <div className="home__info">
                        <div>
                            <h3 className="home__info-title">
                                YEARS OF EXPERIENCE
                            </h3>
                            <p className="home__info-number">
                                02+
                            </p>
                        </div>

                        <div>
                            <h3 className="home__info-title">
                                COMPLETED PROJECTS
                            </h3>
                            <p className="home__info-number">
                                15+
                            </p>
                        </div>
                        <div>
                        <h3 className="home__info-title">
                                CONTACT
                            </h3>
                            <p className="home__info-description">
                                Tunisia, Tunis <br/>
                                Keraani.naceur@gmail.com <br/>
                                +216 95 88 17 09 <br/>
                            </p>
                        </div>

                        

                    </div>
                </div>
            </section>
   </>
    );
}

export default Heo
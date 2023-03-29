import React from 'react'
import { Link } from "react-router-dom";
function Footer() {
  return (
    <footer className="footer">
            <div className="footer__container container">
                <h1 className="footer__title">Naceur Keraani</h1>
                <p> AI/Machine Learning Developer</p>

                <ul className="footer__list">
                    <li>
                        <Link to="/" className="footer__link">Home</Link>
                    </li>
                    <li>
                        <Link to="#skills" className="footer__link">Skills</Link>
                    </li>
                    <li>
                        <Link to="#projects" className="footer__link">Projects</Link>
                    </li>
                </ul>

                <ul className="footer__social">
                    <Link to="https://www.linkedin.com/in/hasanjessa" target="_blank" className="footer__social-link">
                        <i className="ri-linkedin-box-line"></i>
                    </Link>

                    <Link to="https://www.github.com/hasanjessa" target="_blank" className="footer__social-link">
                        <i className="ri-github-line"></i>
                    </Link>

                    <Link to="https://api.whatsapp.com/send?phone=19727418455&text=Hello, more information!" target="_blank" className="footer__social-link">
                        <i className="ri-whatsapp-line"></i>
                    </Link>

                </ul>

                <span className="footer__copy">
                    &#169; Copyright nourdeouich159@gmail.com. All rights reserved
                </span>
            </div>
        </footer>
  )
}

export default Footer
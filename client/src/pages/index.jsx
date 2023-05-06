import React from 'react'

import Heo from '../components/heo'
import Skills from '../components/skills'
import Server from '../components/serverc'
import '../assets/css/styles.css'
import '../assets/css/swiper-bundle.min.css'
import '../assets/js/main'
import Project from '../components/project'
import Language from '../components/Language'

import QUALIFICATION from '../components/QUALIFICATION'
import { Link } from "react-router-dom";

function Home() {
  
  function scrollTop() {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }

  return (
    <>
    
   
    <main className="main">

<Heo/>
<Skills/>
<QUALIFICATION/>
<Language/>
<Server/>
<Project/>

    </main>
  
    <Link to="/" className="scrollup" id="scroll-up" onClick={scrollTop} >
            <i className="ri-arrow-up-line"></i>
        </Link>
       
    </>
  )
}

export default Home
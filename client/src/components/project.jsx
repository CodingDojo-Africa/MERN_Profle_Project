import React from 'react'
import { Link } from "react-router-dom";

import Contact from './contact';
import Footer from './footer';

function Project() {
  return (
    <>



    <section className="projects section" id="projects">
                <h2 className="section__title">Projects</h2>
                <span className="section__subtitle">Most recent work</span>

                <div className="container section__border">
                    <div className="projects__container swiper">
                    <div id="carousel">
                     
			<figure> <Link to="/project/ai"><img src="image/aiprogect.jpg" alt=""/>   </Link></figure>
			<figure> <Link to="/project/deep"><img src="image/Illustration-of-a-brain-with-cogs-inside-and-pathways-outside-and-deep-learning-written-above.jpg" alt=""/></Link></figure>
			<figure> <Link to="/project/ind"><img src="image/blobid1.webp" alt=""/></Link></figure>
			<figure> <Link to="/project/data"><img src='image/7-Benefits-of-Data-Science.jpg' alt=""/></Link></figure>
			<figure> <Link to="/project/mlp"><img src="image/Untitled-design-3-scaled.jpg" alt=""/></Link></figure>
			
   
	</div>

                        <div className="swiper-pagination"></div>
                    </div>
                </div>
            </section>
            <Contact/>
            <Footer/>
              </>
  )
}

export default Project
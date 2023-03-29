import React from 'react'

  import 'bootstrap/dist/css/bootstrap-grid.min.css'
  import { Link } from "react-router-dom";
 import '../../status/css/project.css'
import '../../status/js/heo'

function Heo() {
  return (
   
  
  <section id="homeProject">
    <div id="banner-bg-effect" className="banner-effect"></div>
    <div className="container">
      <div className="row align-items-center">
        <div className="col-lg-6 col-md-12 col-sm-12 order-lg-first">
        <h1 className="mb-4"><strong>Our Projects</strong> 
       </h1>


          <div className="mt-4">
            <Link className="btn btn-gradient mr-4" to="/">Contact us <i className="fas fa-long-arrow-alt-right ml-2"></i></Link>
            
          </div>
         
        </div>
        <div className="col-lg-6 col-md-12 col-sm-12 order-first">
          <div>
            <img src="https://www.pranathiss.com/static/assets/images/machine-learning.png" alt=""/>
          </div>
        </div>
      </div>
    </div>

  </section>
  
  

  )
}

export default Heo
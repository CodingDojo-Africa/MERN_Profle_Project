import React from 'react'
import PythonIMG from '../assets/img/python-5.svg'
import CImg from '../assets/img/c.svg'
import JsImg from '../assets/img/javascript-1.svg'
import ReactImg from '../assets/img/react-2.svg'

function Skills() {
  return (
    <>
   
    <section className="skills section" id="skills">
                <h2 className="section__title">Skills</h2>
                <span className="section__subtitle"> Technical Skills</span>

                <div className="skills__container container grid section__border">
                    {/* <!--==================== SKILLS 1 ====================--> */}
                    <div className="skills__content">
                        <h3 className="skills__title">
                            <i className="ri-braces-line"></i> Programming
                        </h3>

                        <div className="skills__info">
                            <div className="skills__data">
                                <div className="skills__blob">
                                    <img src={PythonIMG} alt="skills_image" />
                                </div>

                                <h3 className="skills__name">Python</h3>
                                <span className="skills__subtitle">Advanced</span>
                            </div>

                            <div className="skills__data">
                                <div className="skills__blob">
                                    <img src={CImg} alt="skills_image" />
                                </div>

                                <h3 className="skills__name">C++</h3>
                                <span className="skills__subtitle">Advanced</span>
                            </div>

                            <div className="skills__data">
                                <div className="skills__blob">
                                    <img src={JsImg} alt="skills_image" />
                                </div>

                                <h3 className="skills__name">JavaScript</h3>
                                <span className="skills__subtitle">Advanced</span>
                            </div>

                          

                            <div className="skills__data">
                                <div className="skills__blob">
                                    <img src={ReactImg} alt="skills_image" />
                                </div>

                                <h3 className="skills__name">React</h3>
                                <span className="skills__subtitle">Advanced</span>
                            </div>
                            
                            

                        </div>
                    </div>

                    {/* <!-- ========================== SKILLS 2 ====================--> */}
                    <div className="skills__content">
                        <h3 className="skills__title">
                        <i className="ri-android-line"></i> Tools/libaries
                        </h3>

                        <div className="skills__info">

                            <div className="skills__data">
                                <div className="skills__blob">
                                    <img src="image/Scikit_learn_logo_small.svg.png" alt="skills_image" />
                                </div>

                                <h3 className="skills__name">Scikit-learn</h3>
                               
                            </div>
                            <div className="skills__data">
                                <div className="skills__blob">
                                    <img src="image/LQuIXqyz.png" alt="skills_image" />
                                </div>

                                <h3 className="skills__name">PyTorch</h3>
                               
                            </div>
                            <div className="skills__data">
                                <div className="skills__blob">
                                    <img src="image/Pandas_logo.svg.png" alt="skills_image" />
                                </div>

                                <h3 className="skills__name">Pandas</h3>
                               
                            </div>
                            <div className="skills__data">
                                <div className="skills__blob">
                                    <img src="/image/jupiter-3.svg" alt="skills_image" />
                                </div>

                                <h3 className="skills__name">Jupiter</h3>
                               
                            </div>
                            <div className="skills__data">
                                <div className="skills__blob">
                                    <img src="/image/numpy-1.svg" alt="skills_image" />
                                </div>

                                <h3 className="skills__name">Numpy</h3>
                               
                            </div>
                            <div className="skills__data">
                                <div className="skills__blob">
                                    <img src="/image/Matplotlib_icon.svg.png" alt="skills_image" />
                                </div>

                                <h3 className="skills__name">Matplotlib</h3>
                               
                            </div>
                            <div className="skills__data">
                                <div className="skills__blob">
                                    <img src="image/anaconda_logo-1024x512.png" alt="skills_image" />
                                </div>

                                <h3 className="skills__name">Anaconda</h3>
                               
                            </div>

                        </div>
                    </div>

                </div>

            </section></>
  )
}

export default Skills
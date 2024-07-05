import React from 'react'

function QUALIFICATION() {
  return (
    <>
   
    <section className="qualification section" id="qualification">
                <h2 className="section__title">Qualification</h2>
                <span className="section__subtitle">Experience & Education</span>
                <div className="qualification__container container grid section__border">
                    {/* <!--====================== QUALIFICATION 1 ===================--> */}
                    <div className="qualification__content">
                        <h3 className="qualification__title">
                            <i className="ri-pencil-ruler-2-line"></i> Education
                        </h3>
                        <div className="qualification__info">
                        <div>
                                <h3 className="qualification__name">
                                R for Data Science
                                </h3>
                                <span className="qualification__country">IBM Developer Skills Network.</span>
                                <span className="qualification__year">March 2024</span>
                            </div>
                            <div>
                                <h3 className="qualification__name">
                                Deep Learning Fundamentals
                                </h3>
                                <span className="qualification__country">IBM Developer Skills Network.</span>
                                <span className="qualification__year">March 2024</span>
                            </div>
                            <div>
                                <h3 className="qualification__name">
                                Machine Learning with Python
                                </h3>
                                <span className="qualification__country">IBM Developer Skills Network.</span>
                                <span className="qualification__year">February  2024</span>
                            </div>
                            <div>
                                <h3 className="qualification__name">
                                Data Visualization with Python 
                                </h3>
                                <span className="qualification__country">IBM Developer Skills Network.</span>
                                <span className="qualification__year">February  2024</span>
                            </div>
                            <div>
                                <h3 className="qualification__name">
                                Data Analysis with Python 
                                </h3>
                                <span className="qualification__country">IBM Developer Skills Network.</span>
                                <span className="qualification__year">December 2023</span>
                            </div>
                            <div>
                                <h3 className="qualification__name">
                                Python 101 for Data Science
                                </h3>
                                <span className="qualification__country">IBM Developer Skills Network.</span>
                                <span className="qualification__year">October 2023</span>
                            </div>
                            <div>
                                <h3 className="qualification__name">
                                Artificial Intelligence And Machine Learning  Certification
                                </h3>
                                <span className="qualification__country">GOMYCODE.</span>
                                <span className="qualification__year">October 2022 -February  2023</span>
                            </div>
                        
                            <div>
                                <h3 className="qualification__name">
                                Automation Siemens PLC course  Certification
                                </h3>
                                <span className="qualification__country"> High Tech Learning _Tunisia .</span>
                                <span className="qualification__year">Graduation: October 2019 </span>
                            </div>
                            <div>
                                <h3 className="qualification__name">
                                    Higher Degree in Electrical Engineering
                                </h3>
                                <span className="qualification__country">Higher Institute of Technological Studies of Kelibia _Tunisia.</span>
                                <span className="qualification__year">Graduation: 2014-2017</span>
                            </div>

                            <div>
                                <h3 className="qualification__name">
                                    Bachelor of Science Technology 
                                </h3>
                                <span className="qualification__country">High School Ibno rachik Ezzahra _Tunisia.</span>
                                <span className="qualification__year">Graduation: 2012-2013</span>
                            </div>

                        </div>
                    </div>
                    {/* <!--====================== QUALIFICATION 2 ===================--> */}
                    <div className="qualification__content">
                        <h3 className="qualification__title">
                            <i className="ri-building-line"></i> Professional Experience
                        </h3>
                        <div className="qualification__info">
                            
                            <div>
                                <h3 className="qualification__name">
                                    AI/Machine Learning Software Developer
                                </h3>
                                <span className="qualification__country">Freelancer</span>
                                <span className="qualification__year">2021-2024</span>
                            </div>

                           

                        </div>
                    </div>
                </div>
                <img src="../assets/img/shape-circle.svg" alt="qualification__img" className="qualification__img"/>
            </section></>

  )
}

export default QUALIFICATION
import React from 'react'

function Server() {
  return (
    <>
   
    <section className="services section" id="services">
                <h2 className="section__title">Services</h2>
                <span className="section__subtitle">What I offer</span>

                <div className="services__container container grid section__border">
                <div className="services__card">
                        <i className="ri-layout-4-line"></i>

                        <h2 className="services__title">
                            
                            AI/Machine<br/> Learning Developer
                        </h2>

                        <p className="services__descriptionn">
                             Optimization models with specific risk .
                        </p>

                        <div className="services__border"></div>
                    </div>

                    <div className="services__card">
                    <i className="ri-organization-chart"></i>

                        <h2 className="services__title">
                        Machine/Deep<br/>
                         learning
                        </h2>

                        <p className="services__description">
                        Proprietary machine/deep learning long/short intraday algorithm .
</p>

                        <div className="services__border"></div>
                    </div>

                    <div className="services__card">
                    <i className="ri-u-disk-fill"></i>

                        <h2 className="services__title">
                        Machine <br/>learning models
                        </h2>

                        <p className="services__description">
                        utilizing multivariate/logistic regression.                      </p>

                        <div className="services__border"></div>
                    </div>

                </div>
            </section></>
  )
}

export default Server
import React from 'react'



const ServiceSection = () => {

    return (
        <section className="team-section mb-240" style={{ backgroundImage: `url('/images/team/team-bg.png')` }}>
            <div className="team-wrap">
                <div className="container">
                    <div className="section-title text-white text-center mb-55">
                        <h2>meet the <span className="thin">team</span></h2>
                        <h6>our team members</h6>
                    </div>
                    <div className="row">
                        <div className="col-lg-4 col-md-6">
                            <div className="team-item">
                                <img src={'/images/team/team3.png'} alt="Team"/>
                                <div className="team-des">
                                    <h3>Ivet Houze</h3>
                                    <span>architect assistant </span>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6">
                            <div className="team-item">
                                <img src={'/images/team/team3.png'} alt="Team"/>
                                <div className="team-des">
                                    <h3>Joney vino</h3>
                                    <span>architect assistant </span>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6">
                            <div className="team-item">
                                <img src={'/images/team/team3.png'} alt="Team"/>
                                <div className="team-des">
                                    <h3>Maria Bill</h3>
                                    <span>architect assistant </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default ServiceSection;

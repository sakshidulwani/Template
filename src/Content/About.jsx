import React from 'react';
import './About.css'

function About(props) {
    return (
        <section id="about">
        <div className="container my-5 pt-5">
            <div className="row">
                <div className="col-lg-12 text-center">
                    <h1 className="section-heading py-3" style={{"color": "black"}}>About</h1>
                    <h4 className="section-subheading pb-5">I am Sakshi, a React native Developer. I code to make productive and beautiful apps. Available for freelance opportunities.
                     Enthusiastic about mobile development and particularly excited about React Native.</h4>
                </div>
            </div>
            <div className="row">
                <div className="col-lg-12">
                    <ul className="timeline">
                        <li>
                            <div className="timeline-image">
                                <img className="img-circle img-responsive" src="img/about/1.jpg" alt=""/>
                            </div>
                            <div className="timeline-panel">
                                <div className="timeline-heading">
                                    <h2 style={{"color": "black"}}>Initutive</h2>
                                </div>
                                <div className="timeline-body">
                                    <h5>I am able to understand and sense things with little I can.</h5>
                                </div>
                            </div>
                        </li>
                        <li className="timeline-inverted">
                            <div className="timeline-image">
                                <img className="img-circle img-responsive" src="img/about/2.jpg" alt=""/>
                            </div>
                            <div className="timeline-panel">
                                <div className="timeline-heading">
                                    <h2 style={{"color": "black"}}>Fast</h2>
                                </div>
                                <div className="timeline-body">
                                    <h5>I think I am able to do work on time as the word fast indicates .</h5>
                                </div>
                            </div>
                        </li>
                        <li>
                            <div className="timeline-image">
                                <img className="img-circle img-responsive" src="img/about/3.jpg" alt=""/>
                            </div>
                            <div className="timeline-panel">
                                <div className="timeline-heading">
                                    <h2 style={{"color": "black"}}>Dynamic</h2>
                                </div>
                                <div className="timeline-body">
                                    <h5>I really like to use new embedding API and would like to use it in a project as I change myself in every situation .</h5>
                                </div>
                            </div>
                        </li>
                        <li className="timeline-inverted">
                            <div className="timeline-image">
                                <img className="img-circle img-responsive" src="img/about/4.jpg" alt=""/>
                            </div>
                            <div className="timeline-panel">
                                <div className="timeline-heading">
                                    <h2 style={{"color": "black"}}>Responsive</h2>
                                </div>
                                <div className="timeline-body">
                                    <h5>I make my layouts work on any device whether big or small. They always smooth and responsive.</h5>
                                </div>
                            </div>
                        </li>
                        <li className="timeline-inverted">
                            <div className="timeline-image">
                            <i className="my-3 fas fa-3x fa-chevron-circle-down"></i>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </section>
    );
}

export default About;
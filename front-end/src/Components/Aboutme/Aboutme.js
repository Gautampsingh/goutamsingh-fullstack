import React, { Component } from 'react';
import './Aboutme.css';

import img1 from '../../assets/images/about/1.jpg';
import img2 from '../../assets/images/about/2.jpg';
import img3 from '../../assets/images/about/3.jpg';
import img5 from '../../assets/images/about/5.png';
import img6 from '../../assets/images/about/6.png';
import img7 from '../../assets/images/about/7.png';

class Aboutme extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <div id="aboutme" className="box_about">
                <div className={"container-fluid section" + (this.props.dark ? " section-dark" : "")}>
                    <div className="section-content" id={this.props.id}>
                        <h1>{this.props.title}</h1>
                        <div className="row">
                            <div className="col-lg-12 text-center">
                                <h5 className="section-subheading1 text-muted">Hi, I'm Goutam Singh</h5>
                                <h3 className="section-subheading text-muted">User Interface / Front End / Web developer</h3>
                            </div>
                        </div>

                        <div className="row mt-4">
                <div className="col-lg-12">
                    <ul className="timeline">
                        <li>
                            <div className="timeline-image">
                                <img alt="About me" src={img1} />
                            </div>
                            <div className="timeline-panel">
                                <div className="timeline-heading">
                                    <h4>March 2011 - Oct 2012</h4>
                                    <h4 className="subheading">My Humble Beginnings</h4>
                                </div>
                                <div className="timeline-body">
                                    <p className="text-muted">Started my career with the startup Afixi Technologies after crossing the bridge of the education. We use to grab all small/big projects and make our clients satisfy with quality delivarables.</p>
                                </div>
                            </div>
                        </li>
                        <li className="timeline-inverted">
                            <div className="timeline-image">
                            <img alt="About me" src={img2} />
                            </div>
                            <div className="timeline-panel">
                                <div className="timeline-heading">
                                    <h4>October 2012 - January 2014</h4>
                                    <h4 className="subheading">Gained few experience</h4>
                                </div>
                                <div className="timeline-body">
                                    <p className="text-muted">Joined INFOSYS as Process specialist developer and worked for the client INTEL with AEM integration.</p>
                                </div>
                            </div>
                        </li>
                        <li>
                            <div className="timeline-image">
                            <img alt="About me" src={img3} />
                            </div>
                            <div className="timeline-panel">
                                <div className="timeline-heading">
                                    <h4>January 2014 - June 2015</h4>
                                    <h4 className="subheading">Transition to Full Service</h4>
                                </div>
                                <div className="timeline-body">
                                    <p className="text-muted">Joined IGATE as Senior Software Engineer and contributed in multiple domains and projects including GE-Healthcare, GE-Aviation and National bank of Canada.</p>
                                </div>
                            </div>
                        </li>
                        <li className="timeline-inverted">
                            <div className="timeline-image">
                            <img alt="About me" src={img5} style={{background: '#1d4068'}} />
                            </div>
                            <div className="timeline-panel">
                                <div className="timeline-heading">
                                    <h4>June 2015 - Septmber 2017</h4>
                                    <h4 className="subheading">Phase Two Expansion</h4>
                                </div>
                                <div className="timeline-body">
                                    <p className="text-muted">Joined Danske Bank, one of the largest bank in denmark and nordics region as web engineer. I started with frontend development with Sharepoint and later moved to Sitecore develoment.</p>
                                </div>
                            </div>
                        </li>
                        <li>
                            <div className="timeline-image">
                            <img alt="About me" src={img6} style={{background: '#d28185'}} />
                            </div>
                            <div className="timeline-panel">
                                <div className="timeline-heading">
                                    <h4>September 2017 - August 2019</h4>
                                    <h4 className="subheading">Expert in Web development</h4>
                                </div>
                                <div className="timeline-body">
                                    <p className="text-muted">Joined CGI Group as Consultant. Developed hybrid mobile apps for workflow module in the ERP tool - Raindance using Angular, IONIC 4 and Cordova. </p>
                                </div>
                            </div>
                        </li>

                        <li className="timeline-inverted">
                            <div className="timeline-image" style={{background: '#c2daba'}}>
                            <img alt="About me" src={img7} />
                            </div>
                            <div className="timeline-panel">
                                <div className="timeline-heading">
                                    <h4>August 2019 - Present</h4>
                                    <h4 className="subheading">Expert in Web development</h4>
                                </div>
                                <div className="timeline-body">
                                    <p className="text-muted">Joined Schneider Electric as Module Lead. Developing Programmable Logic Controller(PLC) Convertor tool into rich modernization Web page using Angular and RESTful implementations. </p>
                                </div>
                            </div>
                        </li>

                        <li className="timeline-inverted">
                            <div className="timeline-image">
                                <h4>Be Part
                                    <br />Of my
                                    <br />Story!
                                </h4>
                            </div>
                        </li>
                        </ul>
                        </div>
                        </div>

                    </div>
                </div>
            </div>
         );
    }
}

export default Aboutme;
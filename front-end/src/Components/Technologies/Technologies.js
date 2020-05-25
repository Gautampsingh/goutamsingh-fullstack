import React, { Component } from 'react';
import './Technologies.css';

import img_html from '../../assets/images/team/html5.png';
import img_css from '../../assets/images/team/css3.png';
import img_angular from '../../assets/images/team/angular.png';
import img_git from '../../assets/images/team/git.png';
import img_bootstrap from '../../assets/images/team/bootstrap.png';
import img_jquery from '../../assets/images/team/jquery.png';
import img_react from '../../assets/images/team/react.png';
import img_node from '../../assets/images/team/node.png';
import img_sass from '../../assets/images/team/sass.png';

class Technologies extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <div id="technologies">
                <div className={"container-fluid section" + (this.props.dark ? " section-dark" : "")}>
                    <div className="section-content" id={this.props.id}>
                        <h1>{this.props.title}</h1>
                        <div className="row">
                            <div className="col-lg-12 text-center">
                                <h3 className="section-subheading text-muted">I am building and growing with these technologies</h3>
                            </div>
                        </div>

                        <div className="row mt-3">
                            <div className="col-sm-4">
                                <div className="team-member">
                                    <img alt="html5" src={img_html} />
                                    <h4>HTML5</h4>
                                    <p className="text-muted"></p>
                                </div>
                            </div>
                            <div className="col-sm-4">
                                <div className="team-member">
                                    <img alt="css3" src={img_css} />
                                    <h4>CSS3</h4>
                                    <p className="text-muted"></p>
                                </div>
                            </div>
                            <div className="col-sm-4">
                                <div className="team-member">
                                    <img alt="angular" src={img_angular} />
                                    <h4>ANGULAR</h4>
                                    <p className="text-muted"></p>
                                </div>
                            </div>
                            <div className="col-sm-4">
                                <div className="team-member">
                                    <img alt="git" src={img_git} />
                                    <h4>GIT</h4>
                                    <p className="text-muted"></p>
                                </div>
                            </div>
                            <div className="col-sm-4">
                                <div className="team-member">
                                <img alt="bootstrap" src={img_bootstrap} />
                                    <h4>BOOTSTRAP</h4>
                                    <p className="text-muted"></p>
                                </div>
                            </div>
                            <div className="col-sm-4">
                                <div className="team-member">
                                <img alt="jquery" src={img_jquery} />
                                    <h4>JQUERY</h4>
                                    <p className="text-muted"></p>
                                </div>
                            </div>
                            <div className="col-sm-4">
                                <div className="team-member">
                                <img alt="react" src={img_react} />
                                    <h4>REACT</h4>
                                    <p className="text-muted"></p>
                                </div>
                            </div>
                            <div className="col-sm-4">
                                <div className="team-member">
                                <img alt="node" src={img_node} />
                                    <h4>NODE</h4>
                                    <p className="text-muted"></p>
                                </div>
                            </div>
                            <div className="col-sm-4">
                                <div className="team-member">
                                <img alt="sass" src={img_sass} />
                                    <h4>SASS</h4>
                                    <p className="text-muted"></p>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
         );
    }
}
 
export default Technologies;
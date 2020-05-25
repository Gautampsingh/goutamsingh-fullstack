import React, { Component } from 'react';
import SkyLight from 'react-skylight';
import './Project.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import ProjectList from '../../assets/json/Projectlist';

class Projects extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        const ProjectElement = (
                <div className="row mt-4">
                    {
                        ProjectList.map((item, index) =>
                            <div className="col-md-4 col-sm-6 portfolio-item" key={index}>
                                <SkyLight className="modalBox" dialogStyles={item.bgcolor}
                                    hideOnOverlayClicked 
                                    ref={ref => index = ref} 
                                    title={item.title} 
                                    transitionDuration={2000}>
                                    {item.description}
                                </SkyLight>
                                <a className="portfolio-link" data-toggle="modal" href={'#project_'+index}>
                                    <div className="portfolio-hover" onClick={() => {index.show()}}>
                                        <div className="portfolio-hover-content">
                                            <FontAwesomeIcon icon={faPlus} />
                                        </div>
                                    </div>
                                    <img alt="cgi" src={item.imgUrl} />
                                </a>
                                <div className="portfolio-caption">
                                    <h4>{item.title}</h4>
                                    <p className="text-muted">{item.subtitle} - {item.location}</p>
                                </div>
                            </div>
                        )
                    }
                </div>
        )

        return ( 
            <div id="projects" className="box_project">
                    <div className={"container-fluid section" + (this.props.dark ? " section-dark" : "")}>
                    <div className="section-content" id={this.props.id}>
                        <h1>{this.props.title}</h1>
                        { ProjectElement }
                    </div>
                </div>
            </div>
         )
    }
}
 
export default Projects;
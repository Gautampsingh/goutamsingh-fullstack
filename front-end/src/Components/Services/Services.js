import React, { Component } from 'react';
import './Services.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee, faLaptop, faLock } from '@fortawesome/free-solid-svg-icons';

class Services extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <div id="services">
<div className={"container-fluid section" + (this.props.dark ? " section-dark" : "")}>
    <div className="section-content" id={this.props.id}>
        <h1>{this.props.title}</h1>
        <p>Goutam Singh provides the best and affordable web development services globally. We can handle all of your website needs. Help in hosting, email, domain name, secure hosting and signature hosting accounts.</p>
        
        <div className="row text-center">
                <div className="col-md-4">
                    <span className="fa-stack fa-4x">
                        <FontAwesomeIcon icon={faCoffee} />
                    </span>
                    <h4 className="service-heading">Web development</h4>
                    <p className="text-muted">Develop application with high quality security.Easy access and search options of the products for the customers.</p>
                </div>
                <div className="col-md-4">
                    <span className="fa-stack fa-4x">
                        <FontAwesomeIcon icon={faLaptop} />
                    </span>
                    <h4 className="service-heading">Responsive Design</h4>
                    <p className="text-muted">Develop websites today keeping in mind the tomorrow. Build responsive web design and develop website compatible to all devices including desktop, mobile and tablet.
                    </p>
                </div>
                <div className="col-md-4">
                    <span className="fa-stack fa-4x">
                        <FontAwesomeIcon icon={faLock} />
                    </span>
                    <h4 className="service-heading">Web Security</h4>
                    <p className="text-muted">Integration web security with ssl certificate / token. A secure Web gateway solution that prevents unsecured traffic from entering an internal network of an organization.
                    </p>
                </div>
            </div>
    </div>
</div>
            </div>
         );
    }
}
 
export default Services;
import React, { Component } from "react";
import logo from "../../logo.svg";
import { Link, animateScroll as scroll } from "react-scroll";
import './Navbar.css';

export default class Navbar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      active: false
     }
    this.handleToggle = this.handleToggle.bind(this);
  }

  scrollToTop = () => {
    scroll.scrollToTop();
  };

  handleToggle(){
    const currentState = this.state.active;
    this.setState({ active: !currentState });
  }

  render() {
    const innerList = (
        <ul className="navbar-nav mr-auto">
          { this.props.items.map((item, index) =>
            <li className="nav-item"  key={index}>
              <Link activeClass="active" to={item.url} spy={true} smooth={true} offset={-80} duration={500}>
                {item.text}
              </Link>
            </li>
          )}
        </ul>
    );

    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <a className="navbar-brand" href="/#">
            GOUTAM SINGH
            <img src={logo} className="nav-logo" alt="Logo" onClick={this.scrollToTop} />
          </a>
          <button className="navbar-toggler" type="button" data-toggle="collapse" 
            data-target="#navbarSupportedContent" 
            aria-controls="navbarSupportedContent" 
            aria-expanded="false" 
            aria-label="Toggle navigation" onClick={this.handleToggle}>
            <span className="navbar-toggler-icon"></span>
          </button>

          <div id="navbarSupportedContent" 
            className={this.state.active ? 'collapse navbar-collapse show': "collapse navbar-collapse"}>
            {innerList}
          </div>
        </nav>
    );
  }
}

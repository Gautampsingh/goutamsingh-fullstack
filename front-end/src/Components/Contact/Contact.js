import React, { Component } from "react";
import axios from "axios";
import "./Contact.css";
import img_contact from "../../assets/images/team/4.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faLinkedinIn,
  faGithub,
  faTwitter,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";
import "react-notifications/lib/notifications.css";
import {
  NotificationContainer,
  NotificationManager,
} from "react-notifications";
import toastNotify from "../../constants/messages";
import resumePDF from "../../assets/resume_pdf.pdf";

class Contact extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      email: "",
      phone: "",
      message: "",
      date: new Date(),
      loading: false,
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmit(e) {
    e.preventDefault();
    const { username, email, phone, message, date } = this.state;
    this.setState({ loading: true });

    const user = {
      username: username,
      email: email,
      phone: phone,
      message: message,
      date: date,
    };
    console.log(user);
    axios.post("http://localhost:5000/users/add", user).then((response) => {
      console.log(response.data);
      if (response.statusText === "OK") {
        this.setState({ loading: false });
        // alert("Message Sent.");
        NotificationManager.success(
          toastNotify.thankyouMessage,
          toastNotify.successMessage,
          toastNotify.timer
        );
        this.resetForm();
      } else if (response.data.msg === "fail") {
        this.setState({ loading: false });
        alert("Message failed to send.");
        NotificationManager.error(
          toastNotify.errorMessage,
          "",
          toastNotify.timer
        );
        this.resetForm();
      }
    });
  }

  resetForm() {
    document.getElementById("contact-form").reset();
  }

  render() {
    return (
      <div id="contact" className="box_contact">
        <div
          className={
            "container-fluid section" + (this.props.dark ? " section-dark" : "")
          }
        >
          <div className="section-content" id={this.props.id}>
            <h1>{this.props.title}</h1>

            <div className="row">
              <div className="col-lg-12 text-center">
                <h3 className="section-subheading text-muted">Get In Touch</h3>
              </div>
            </div>

            <div className="row">
              <div className="col-sm-12">
                <div className="team-member">
                  <img alt="contact" className="contactImg" src={img_contact} />
                  <h4 style={{ color: "#efefef" }}>Goutam singh</h4>
                  <p className="text-muted">User Interface(UI) Specialist</p>
                  <div className="text-muted">
                    Email: afixi.gautam@gmail.com
                  </div>
                  <div className="text-muted">Phone: +91 - 9886207210</div>
                  <div className="text-muted">
                    <a
                      rel="noopener noreferrer"
                      href="https://www.meetup.com/Prov-JS/members/254405462/"
                      style={{ textDecoration: "none", color: "#fed136" }}
                    >
                      MeetUp
                    </a>
                  </div>
                  <ul className="list-inline social-buttons">
                    <li className="list-inline-item">
                      <a
                        rel="noopener noreferrer"
                        href="https://twitter.com/glamour_gleam"
                        target="_blank"
                      >
                        <FontAwesomeIcon icon={faTwitter} />
                      </a>
                    </li>
                    <li className="list-inline-item">
                      <a
                        rel="noopener noreferrer"
                        href="https://www.facebook.com/glamourgleam"
                        target="_blank"
                      >
                        <FontAwesomeIcon icon={faFacebookF} />
                      </a>
                    </li>
                    <li className="list-inline-item">
                      <a
                        rel="noopener noreferrer"
                        href="https://www.linkedin.com/in/goutampsingh/"
                        target="_blank"
                      >
                        <FontAwesomeIcon icon={faLinkedinIn} />
                      </a>
                    </li>
                    <li className="list-inline-item">
                      <a
                        rel="noopener noreferrer"
                        href="https://www.instagram.com/_gautamsingh/"
                        target="_blank"
                      >
                        <FontAwesomeIcon icon={faInstagram} />
                      </a>
                    </li>
                    <li className="list-inline-item">
                      <a
                        rel="noopener noreferrer"
                        href="https://github.com/Gautampsingh"
                        target="_blank"
                      >
                        <FontAwesomeIcon icon={faGithub} />
                      </a>
                    </li>
                  </ul>
                  <div className="text-muted">
                    <a
                      rel="noopener noreferrer"
                      href={resumePDF}
                      className="viewResume"
                      target="_blank"
                    >
                      CV as PDF
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="row">
              <div className="col-lg-12">
                <form
                  id="contact-form"
                  onSubmit={this.handleSubmit.bind(this)}
                  method="POST"
                >
                  <div className="row" style={{ marginBottom: "10px" }}>
                    <div className="col-md-12 msgTxt">
                      Any queries? shoot me here{" "}
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-6">
                      <div className="form-group">
                        <input
                          type="text"
                          name="username"
                          className="form-control"
                          id="name"
                          placeholder="Your Name *"
                          required="required"
                          data-validation-required-message="Please enter your name."
                          onChange={this.handleChange}
                        />
                        <p className="help-block text-danger" />
                      </div>
                      <div className="form-group">
                        <input
                          type="email"
                          name="email"
                          className="form-control"
                          id="email"
                          placeholder="Your Email *"
                          required="required"
                          data-validation-required-message="Please enter your email address."
                          onChange={this.handleChange}
                        />
                        <p className="help-block text-danger" />
                      </div>
                      <div className="form-group">
                        <input
                          type="tel"
                          name="phone"
                          className="form-control"
                          id="phone"
                          placeholder="Your Phone *"
                          required="required"
                          data-validation-required-message="Please enter your phone number."
                          onChange={this.handleChange}
                        />
                        <p className="help-block text-danger" />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form-group">
                        <textarea
                          name="message"
                          className="form-control"
                          id="message"
                          placeholder="Your Message *"
                          required="required"
                          data-validation-required-message="Please enter a message."
                          onChange={this.handleChange}
                        />
                        <p className="help-block text-danger" />
                      </div>
                    </div>
                    <div className="clearfix" />
                    <div className="col-lg-12 text-center">
                      <div id="success" />
                      <button
                        type="submit"
                        className="btn btn-primary btn-xl text-uppercase"
                      >
                        Send Message
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
        <NotificationContainer />
      </div>
    );
  }
}

export default Contact;

import * as emailjs from "emailjs-com";
import React from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

import Content from "../components/Content";
import Hero from "../components/Hero";

class ContactPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      email: "",
      message: "",
      disabled: false,
      emailSent: null,
    };
  }

  handleChange = (e) => {
    const target = e.target;

    // value to be if type of val === "checkbox", value is checked, else it'll be the value typed in
    const val = target.type === "checkbox" ? target.checked : target.val;
    const name = target.name;

    this.setState({
      [name]: val,
    });
  };

  inputHandler = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };

  handleSubmit = (e) => {
    e.preventDefault();

    this.setState({ emailSent: true });

    console.log(e.target);
    var template_params = {
      name: this.state.name,
      email: this.state.email,
      message: this.state.message,
    };

    let API_KEY = "user_jT5i8toRxaivql4poGwTL";

    let TEMPLATE_ID = "template_j6k8yof";

    emailjs
      .send("service_vuez2ur", TEMPLATE_ID, template_params, API_KEY)
      .then((response) => {
        console.log("this", this);
        console.log(response);
        if (response.status === 200) {
          this.setState({ emailSent: true, disabled: true });
          this.resetForm();
          console.log("done");
        } else {
          this.setState({ emailSent: false, disabled: true });
          this.resetForm();
          console.log("no worky");
        }
      });
    e.target.reset();
  };

  resetForm() {
    this.setState({ name: "", email: "", message: "" });
  }

  render() {
    return (
      <div>
        <Hero title={this.props.title} />

        <Content>
          <Form onSubmit={this.handleSubmit}>
            <Form.Group>
              <Form.Label htmlFor="full-name">Full Name</Form.Label>
              <Form.Control
                id="full-name"
                name="name"
                type="text"
                value={this.state.name}
                onChange={this.inputHandler}
              />
            </Form.Group>

            <Form.Group>
              <Form.Label htmlFor="email">Email</Form.Label>
              <Form.Control
                id="email"
                name="email"
                type="email"
                value={this.state.email}
                onChange={this.inputHandler}
              />
            </Form.Group>

            <Form.Group>
              <Form.Label htmlFor="message">Message</Form.Label>
              <Form.Control
                id="message"
                required
                name="message"
                as="textarea"
                rows="3"
                value={this.state.message}
                onChange={this.inputHandler}
              />
            </Form.Group>

            <Button
              className="d-inline-block"
              variant="primary"
              type="submit"
              disabled={this.state.disabled}
            >
              Send
            </Button>

            {/* if this.state.emailSent === true || false... do this. */}
            {this.state.emailSent === true && (
              <p className="d-inline success-msg">Email Sent</p>
            )}
            {this.state.emailSent === false && (
              <p className="d-inline err-msg">Email Not Sent</p>
            )}
          </Form>
        </Content>
      </div>
    );
  }
}

export default ContactPage;

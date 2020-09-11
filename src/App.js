import React from "react";
import Container from "react-bootstrap/Container";
// import NavbarBrand from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link, Route, BrowserRouter as Router } from "react-router-dom";

import Footer from "./components/Footer";
import AboutPage from "./pages/AboutPage";
import ContactPage from "./pages/ContactPage";
import HomePage from "./pages/HomePage";

import "./App.css";

// allows for state
// Main component has everything. Don't want to have stateful components everywhere since might be issues with predictability
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "Kenny Ngo",
      headerLinks: [
        { title: "Home", path: "/" },
        { title: "About", path: "/about" },
        { title: "Contact", path: "/contact" },
      ],
      home: {
        title: "Be Yourself",
        subTitle: "Be comfortable being uncomfortable",
        text: "Checkout my projects below",
      },
      about: {
        title: "About Me",
      },
      contact: {
        title: "Let's Talk",
      },
    };
  }

  render() {
    return (
      <Router>
        <Container className="p-0" fluid={true}>
          <Navbar
            sticky="top"
            collapseOnSelect
            className="border-bottom color-nav"
            // bg="transparent"
            expand="lg"
          >
            <Navbar.Brand>Kenny Ngo</Navbar.Brand>

            <Navbar.Toggle className="border-0" aria-controls="navbar-toggle" />
            <Navbar.Collapse id="navbar-toggle">
              <Nav className="ml-auto">
                <Link className="nav-link" to="/">
                  Home
                </Link>
                <Link className="nav-link" to="/about">
                  About
                </Link>
                <Link className="nav-link" to="/contact">
                  Contact
                </Link>
              </Nav>
            </Navbar.Collapse>
          </Navbar>

          {/* exact makes it find the exact match  */}
          <Route
            path="/"
            exact
            render={() => (
              <HomePage
                title={this.state.home.title}
                subTitle={this.state.home.subTitle}
                text={this.state.home.text}
                className="text-center"
              />
            )}
          />
          <Route
            path="/about"
            exact
            render={() => (
              <AboutPage
                title={this.state.about.title}
                className="text-center"
              />
            )}
          />
          <Route
            path="/contact"
            exact
            render={() => <ContactPage title={this.state.contact.title} />}
          />

          <Footer sticky="bottom" />
        </Container>
      </Router>
    );
  }
}

export default App;

import React from "react";
import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/esm/Row";
import Col from "react-bootstrap/esm/Col";
import "../assets/styles/Content.css";

function Content(props) {
  return (
    <Container fluid={true}>
      <Row className="justify-content-center">
        <Col md={8} className="d-flex align-items-center flex-column">
          {/* what ever you pass, it'll automatically pass components inside the structure */}
          {props.children}
        </Col>
      </Row>
    </Container>
  );
}

export default Content;

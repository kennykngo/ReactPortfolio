import React from "react";
import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/esm/Row";
import Col from "react-bootstrap/esm/Col";
import { Image } from "react-bootstrap";

function Content(props) {
  return (
    <Container fluid={true}>
      <Row className="justify-content-center">
        <Col md={8}>
          {/* require is needed to display image */}
          <Image
            src={require("../assets/images/KNgo_DES325_Poster.png")}
            alt="kenny-image"
          />
          {/* what ever you pass, it'll automatically pass components inside the structure */}
          {props.children}
        </Col>
      </Row>
    </Container>
  );
}

export default Content;

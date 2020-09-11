import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";

import Card from "../components/Card";

import devGrub from "../assets/images/KNgo_DES325_Poster.png";
import weatherAPI from "../assets/images/Screen Shot 2020-09-04 at 2.53.35 PM.png";

class Carousel extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [
        {
          id: 0,
          title: "Dev Grub",
          subTitle: "The cookbook for developers",
          imgSrc: devGrub,
          link: "https://devgrub.com",
          selected: false,
        },
        {
          id: 1,
          title: "Weather Forecast",
          subTitle: "5-day weather report",
          imgSrc: weatherAPI,
          link: "https://devgrub.com",
          selected: false,
        },
        {
          id: 2,
          title: "Dev Grub",
          subTitle: "The cookbook for developers",
          imgSrc: devGrub,
          link: "https://devgrub.com",
          selected: false,
        },
      ],
    };
  }

  handleCardClick = (id, card) => {
    console.log(id);
    let items = [...this.state.items];

    items[id].selected = items[id].selected ? false : true;

    items.forEach((item) => {
      if (item.id !== id) {
        item.selected = false;
      }
    });

    // makes so all the works that we did becomes actuated
    this.setState({ items });
  };

  makeItems = (items) => {
    return items.map((item) => {
      console.log(item);
      return (
        <Card
          item={item}
          click={(e) => this.handleCardClick(item.id, e)}
          key={item.id}
        />
      );
    });
  };

  render() {
    return (
      <Container fluid={true}>
        <Row className="justify-content-around">
          {this.makeItems(this.state.items)}
        </Row>
      </Container>
    );
  }
}

export default Carousel;

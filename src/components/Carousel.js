import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";

import Card from "../components/Card";

import inspirePoster from "../assets/images/KNgo_DES325_Poster.png";
import weatherAPI from "../assets/images/Screen Shot 2020-09-04 at 2.53.35 PM.png";
import pokemonTrade from "../assets/images/Screen Shot 2020-09-04 at 4.22.50 PM.png";
import planetApp from "../assets/images/Screen Shot 2020-09-11 at 12.53.30 PM.png";
import talkingBookCover from "../assets/images/Screen Shot 2020-09-11 at 3.19.03 PM.png";
import mumbleApp from "../assets/images/Mumble.png";

class Carousel extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [
        {
          id: 0,
          title: "Mumble (Coming Soon)",
          subTitle: "A dating app for introverts",
          imgSrc: mumbleApp,
          link: "https://pokemon-trade-heroku.herokuapp.com/",
          selected: false,
        },
        {
          id: 1,
          title: "Weather Forecast",
          subTitle: "5-day weather report",
          imgSrc: weatherAPI,
          link: "https://kennykngo.github.io/bcs_weatherApp/",
          selected: false,
        },
        {
          id: 2,
          title: "Pokemon Trade Center",
          subTitle: "Log your Pokemon and chat with other trainers",
          imgSrc: pokemonTrade,
          link: "https://pokemon-trade-heroku.herokuapp.com/",
          selected: false,
        },
        {
          id: 3,
          title: "UX Design: Planet",
          subTitle: "Desiging an app to tackle procrastination",
          imgSrc: planetApp,
          link:
            "https://www.behance.net/gallery/97538259/Planet-Tackling-Emotional-Procrastination",
          selected: false,
        },
        {
          id: 4,
          title: "GD: Talking to Strangers",
          subTitle:
            "A book cover redesign for the book, 'Talking to Strangers'",
          imgSrc: talkingBookCover,
          link:
            "https://www.behance.net/gallery/89494599/Book-Cover-Design-Talking-to-Strangers",
          selected: false,
        },
        {
          id: 5,
          title: "Graphic Design: Redux Poster",
          subTitle: "Reduction of an image, designed into a poster",
          imgSrc: inspirePoster,
          link:
            "https://www.behance.net/gallery/80015439/Redux-Poster-Imagination-is-Evolution",
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

import React from "react";
import Hero from "../components/Hero";
import Content from "../components/Content";

function AboutPage(props) {
  return (
    <div>
      <Hero title={props.title} />

      <Content>
        <p>
          Hello, my name is Kenny! I'm a full stack developer specializing in
          UX. I plan to one day be great at coding and eventually become a
          product manager of some sort. In addition, I would like to start my
          own business/podcast helping individuals get started on their careers.{" "}
        </p>
      </Content>
    </div>
  );
}

export default AboutPage;

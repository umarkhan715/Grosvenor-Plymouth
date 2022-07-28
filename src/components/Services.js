import React, { Component } from "react";
import { FaCocktail, FaHiking, FaShuttleVan, FaBeer } from "react-icons/fa";

import Title from "../components/Title";

export default class Services extends Component {
  state = {
    services: [
      {
        icon: <FaCocktail  style={{
          color: '#E1963D',
        }} />,
        title: "Bar",
        info:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni, corposis!"
      },
      {
        icon: <FaHiking  style={{
          color: '#E1963D',
        }}/>,
        title: "Bridal Suit",
        info:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni, corposis!"
      },
      {
        icon: <FaShuttleVan  style={{
          color: '#E1963D',
        }} />,
        title: "City Breaks",
        info:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni, corposis!"
      },
      {
        icon: <FaBeer  style={{
          color: '#E1963D',
        }} />,
        title: "Credit Card Accepted",
        info:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni, corposis!"
      }
    ]
  };

  render() {
    return (
      <section className="services">
        <Title title="services" />

        <div className="services-center">
          {this.state.services.map((item, index) => {
            return (
              <article key={index} className="service">
                <span>{item.icon}</span>
                <h6>{item.title}</h6>
                <p>{item.info}</p>
              </article>
            );
          })}
        </div>
      </section>
    );
  }
}

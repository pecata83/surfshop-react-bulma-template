import React from "react";
import { Heading, Columns } from "react-bulma-components/dist";
import { Fade } from "react-reveal";

const productList = [
  {
    image: "/img/board1.jpg",
    title: "Fanatic Textreme",
    price: 500
  },
  {
    image: "/img/board2.jpg",
    title: "Fanatic Skate",
    price: 700
  },
  {
    image: "/img/board3.jpg",
    title: "Fanatic Blast",
    price: 800
  }
];

export default () => {
  return (
    <Columns className=" is-flex-mobile">
      {productList.map((product, index) => (
        <Columns.Column
          className="has-text-centered"
          key={index}
          size={4}
          mobile={{ size: 4 }}
        >
          <Fade>
            <img alt="" src={product.image} />
            <Heading renderAs="h3" size={5}>
              {product.title}
            </Heading>
            <p>
              <strong>Price: </strong>
              {product.price}€
            </p>
          </Fade>
        </Columns.Column>
      ))}
    </Columns>
  );
};

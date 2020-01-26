import React, { Component } from "react";
import DeleteItem from "./DeleteItem";
import PropTypes from "prop-types";
import Link from "next/link";
import Title from "./styles/Title";
import FrontPageItemStyles from "./styles/FrontPageItemStyles";
import PriceTag from "./styles/PriceTag";
import formatMoney from "../lib/formatMoney";
import AddToCart from "./AddToCart";

export default class FrontPageItem extends Component {
  static propTypes = {
    item: PropTypes.object.isRequired
  };

  render() {
    const { item } = this.props;
    return (
      <>
        <Link
          href={{
            pathname: "/item",
            query: { id: item.id }
          }}
        >
          <a>{item.title}</a>
        </Link>
        <p>{item.description}</p>
        <FrontPageItemStyles>
          {item.image && <img src={item.image} alt={item.title} />}
        </FrontPageItemStyles>
      </>
    );
  }
}

import React from "react";
import { Query } from "react-apollo";
import { formatDistance } from "date-fns";
import parseISO from "date-fns/parseISO";
import gql from "graphql-tag";
import Link from "next/link";
import styled from "styled-components";
import formatMoney from "../lib/formatMoney";
import OrderItemStyles from "./styles/OrderItemStyles";
import Error from "./ErrorMessage";
import WidthStyles from "./styles/WidthStyles";

const USER_ORDERS_QUERY = gql`
  query USER_ORDERS_QUERY {
    orders(orderBy: createdAt_DESC) {
      id
      total
      createdAt
      items {
        id
        title
        price
        description
        quantity
        image
      }
    }
  }
`;

const OrderUl = styled.ul`
  display: grid;
  grid-gap: 4rem;
  grid-template-columns: repeat(auto-fit, minmax(40%, 1fr));
`;

export default class OrderList extends React.Component {
  render() {
    return (
      <WidthStyles>
        <Query query={USER_ORDERS_QUERY}>
          {({ data }) => {
            const orders = data ? data.orders : null;
            const loading = data ? data.loading : null;
            const error = data ? data.error : null;
            if (loading) return <p>Loading...</p>;
            if (error) return <Error error={error} />;
            return (
              <div>
                <h2>You have {orders?.length} orders</h2>
                <OrderUl>
                  {orders?.map(order => (
                    <OrderItemStyles key={order.id}>
                      <Link
                        href={{
                          pathname: "/order",
                          query: { id: order.id }
                        }}
                      >
                        <a>
                          <div className="order-meta">
                            <p>
                              {order.items.reduce(
                                (item, tally) => item + tally.quantity,
                                0
                              )}{" "}
                              Items
                            </p>
                            <p>{order.items.length} Products</p>
                            <p>
                              {formatDistance(
                                parseISO(order.createdAt),
                                new Date()
                              )}
                            </p>
                            <p>{formatMoney(order.total)}</p>
                          </div>
                          <div className="images">
                            {order.items.map(item => (
                              <img
                                key={item.id}
                                src={item.image}
                                alt={item.itlte}
                              />
                            ))}{" "}
                          </div>
                        </a>
                      </Link>
                    </OrderItemStyles>
                  ))}
                </OrderUl>
              </div>
            );
          }}
        </Query>
      </WidthStyles>
    );
  }
}

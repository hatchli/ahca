import React from "react";
import PaginationStyles from "./styles/PaginationStyles";
import gql from "graphql-tag";
import { Query } from "react-apollo";
import { perPage } from "../config";
import Head from "next/head";
import Link from "next/link";

const PAGINATION_QUERY = gql`
  query PAGINATION_QUERY {
    itemsConnection {
      aggregate {
        count
      }
    }
  }
`;

const Pagination = props => (
  <Query query={PAGINATION_QUERY}>
    {({ data, loading, error }) => {
      if (loading) return <p>Loading...</p>;
      const count = data.itemsConnection.aggregate.count;
      const pages = Math.ceil(count / perPage);
      const page = props.page;
      return (
        <PaginationStyles data-test="pagination">
          <Head>
            <title>
              AHCA | Page {page} of {pages}
            </title>
          </Head>
          <Link
            prefetch
            href={{
              pathname: "shop",
              query: { page: page - 1 }
            }}
          >
            <a className="prev" aria-disabled={page <= 1}>
              🡄 Prev
            </a>
          </Link>
          {count - props.page * perPage >= 1 ? (
            <p> {count - props.page * perPage} More Items</p>
          ) : (
            <p>No More Items</p>
          )}
          <Link
            href={{
              pathname: "shop",
              query: { page: page + 1 }
            }}
          >
            <a className="next" aria-disabled={page >= pages}>
              Next 🡆
            </a>
          </Link>
        </PaginationStyles>
      );
    }}
  </Query>
);

export default Pagination;
export { PAGINATION_QUERY };

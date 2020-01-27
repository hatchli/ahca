import React, { useState } from "react";
import { Query, Mutation } from "react-apollo";
import { CURRENT_USER_QUERY } from "./User";
import gql from "graphql-tag";
import { Label, Input, Select, Textarea, Radio, Checkbox } from "@rebass/forms";
import { Flex, Heading, Box, Button } from "rebass";
import Error from "./ErrorMessage";
const VALIDATE_APPLY_PROMO_CODE = gql`
  mutation updatePriceAfterPromoCode($id: ID!, $promotion: String!) {
    updatePriceAfterPromoCode(id: $id, promotion: $promotion) {
      id
      promotionPrice
    }
  }
`;

const PromoCode = props => {
  const [promoState, setPromoState] = useState("");
  const maround = [1, 3];
  const pleft = [0, 1, 2, 3];
  const wconst = [1, 3 / 4];

  return (
    <>
      <Query query={CURRENT_USER_QUERY}>
        {({ data, loading }) => {
          return (
            <Mutation
              mutation={VALIDATE_APPLY_PROMO_CODE}
              variables={{ id: props.id, promotion: promoState }}
              refetchQueries={[{ query: CURRENT_USER_QUERY }]}
            >
              {(updatePriceAfterPromoCode, { loading, error }) => {
                return (
                  <Box
                    as="form"
                    onSubmit={async e => {
                      e.preventDefault();
                      const res = await updatePriceAfterPromoCode();
                    }}
                    // pl={pleft}
                    // py={3}
                    ml={-2}
                    width={1}
                  >
                    <Flex flexDirection="row" alignItems>
                      <Box width={1 / 2} mx={maround} pl={0}>
                        <Input
                          id="promo"
                          name="promo"
                          type="text"
                          placeholder="Promo Code"
                          value={promoState}
                          onChange={async e => {
                            setPromoState(e.target.value);
                          }}
                        />
                      </Box>
                      <Box width={1 / 8}>
                        <Button type="submit" bg="dark-green">
                          Submit
                        </Button>
                      </Box>
                    </Flex>
                    <Error error={error} />
                  </Box>
                );
              }}
            </Mutation>
          );
        }}
      </Query>
    </>
  );
};

export default PromoCode;

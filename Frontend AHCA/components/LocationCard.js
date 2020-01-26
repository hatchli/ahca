import React, { Component } from "react";
import wait from "waait";
import { Query, Mutation, withApollo } from "react-apollo";
import { CURRENT_USER_QUERY } from "./User";
import gql from "graphql-tag";
import { Label, Input, Select, Textarea, Radio, Checkbox } from "@rebass/forms";
import { Box, Flex, Button, Card, Image, Heading, Text } from "rebass";

const UPDATE_PHONE_LOCATION = gql`
  mutation UPDATE_PHONE_LOCATION(
    $name: String
    $location: String
    $phone: String
    $email: String
  ) {
    updatePhoneLocation(
      name: $name
      location: $location
      phone: $phone
      email: $email
    ) {
      id
    }
  }
`;

class LocationCard extends Component {
  state = {
    name: "",
    location: "",
    phone: ""
  };

  componentDidUpdate(prevProps, prevState) {
    if (
      this.props.county !== prevProps.county &&
      this.props.county !== "Select Your Location on the Map!"
    ) {
      this.setState(prevState => ({
        ...prevState,
        location: this.props.county
      }));
      console.log(this.state.location);
      this.handleChangeLocation();
      console.log(this.state.location);
    }
  }

  handleChange = e => {
    const { name, type, value } = e.target;
    const val = type === "number" ? parseFloat(value) : value;
    this.setState({ [name]: val });
  };

  handleUpdateLocation = () => {
    var event = new Event("input", { bubbles: true });
    this.myinput.dispatchEvent(event);
  };
  render() {
    const maround = [1, 3];
    const pleft = [0, 1, 2, 3];
    const wconst = [1, 1 / 4];

    // const [county] = this.props;
    return (
      <>
        <Query query={CURRENT_USER_QUERY}>
          {({ data, loading }) => {
            return (
              <Mutation mutation={UPDATE_PHONE_LOCATION} variables={this.state}>
                {(updatePhoneLocation, { loading, error }) => {
                  return (
                    <div>
                      <Box
                        as="form"
                        onSubmit={async e => {
                          e.preventDefault();
                          const res = await updatePhoneLocation();
                        }}
                        pl={pleft}
                        py={3}
                        width={1}
                      >
                        <Heading pcolor="near-black" fontSize={[4, 5, 6]}>
                          Are we in your neighboorhood?
                        </Heading>
                        <Flex flexWrap="wrap">
                          <Box width={wconst} mx={maround} pl={pleft}>
                            <Label htmlFor="name">Name</Label>
                            <Input
                              id="name"
                              name="name"
                              type="text"
                              placeholder="Name"
                              value={this.state.name}
                              onChange={async e => {
                                this.handleChange(e);
                                await wait(3000);
                                const res = await updatePhoneLocation();
                                {
                                  error && alert(error);
                                }
                              }}
                            />
                          </Box>
                          <Box width={wconst} mx={maround}>
                            <Label htmlFor="name">Phone</Label>
                            <Input
                              id="phone"
                              name="phone"
                              type="text"
                              placeholder="Phone"
                              value={this.state.phone}
                              onChange={async e => {
                                this.handleChange(e);
                                await wait(3000);
                                const res = await updatePhoneLocation();
                              }}
                            />
                          </Box>
                          <Box width={wconst} mx={maround}>
                            <Label htmlFor="location">Location</Label>
                            {this.state.location !== "" ? (
                              <Heading fontSize={[3, 4, 5]} color="near-black">
                                {this.props.county}
                              </Heading>
                            ) : (
                              <Heading fontSize={[3, 4, 3]} color="near-black">
                                {this.props.county}
                              </Heading>
                            )}
                          </Box>
                        </Flex>
                        <Flex mx={-2} flexWrap="wrap">
                          <Box p={2} ml="[3, 4, 5, 6]">
                            <Button type="submit" bg="dark-green">
                              Submit
                            </Button>
                          </Box>
                        </Flex>
                      </Box>
                    </div>
                  );
                }}
              </Mutation>
            );
          }}
        </Query>
      </>
    );
  }
  handleChangeLocation = async () => {
    await wait(300);
    this.props.client.mutate({
      mutation: UPDATE_PHONE_LOCATION,
      variables: this.state
    });
    console.log(this.state.location);
    console.log("handleChangeLocation called");
  };
}

export default withApollo(LocationCard);

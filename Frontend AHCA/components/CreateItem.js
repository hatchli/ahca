import React, { Component } from "react";
import { Box, Flex } from "rebass";
import { Mutation } from "react-apollo";
import gql from "graphql-tag";
import Router from "next/router";
import Form from "./styles/Form";
import Error from "./ErrorMessage";
import WidthStyles from "./styles/WidthStyles";

const possibleCategories = [
  "AIR_CONDITIONER",
  "FURNACE",
  "WHOLE_HOME_MANIFOLD",
  "TANKLESS_WATER_SYSTEM",
  "WATER_SOFTENER",
  "WATER_FILTRATION",
  "PLUMBING",
  "HEATPUMP",
  "DUCTLESS_MINISPLIT"
];

const promoCodes = ["LACOUNTY2020", "SFCOUNTY2020"];

const CREATE_ITEM_MUTATION = gql`
  mutation CREATE_ITEM_MUTATION(
    $title: String!
    $description: String!
    $features: [String!]
    $highlights: [String!]
    $sale: Boolean
    $categories: [Category]
    $price: Int!
    $promo: [ValidPromoCodes]
    $image: String
    $largeImage: String
    $image1: String
    $largeImage1: String
    $image2: String
    $largeImage2: String
  ) {
    createItem(
      title: $title
      description: $description
      features: $features
      highlights: $highlights
      sale: $sale
      categories: $categories
      price: $price
      promo: $promo
      image: $image
      largeImage: $largeImage
      image1: $image1
      largeImage1: $largeImage1
      image2: $image2
      largeImage2: $largeImage2
    ) {
      id
    }
  }
`;

class CreateItem extends Component {
  state = {
    title: "",
    description: "",
    features: [""],
    highlights: [""],
    sale: false,
    categories: "",
    imageArray: [],
    largeImageArray: [],
    image: "",
    largeImage: "",
    image1: "",
    largeImage1: "",
    image2: "",
    largeImage2: "",
    price: 0,
    promo: []
  };

  componentDidUpdate(prevProps, prevState) {
    if (this.state.imageArray !== prevState.imageArray) {
      this.setState(prevState => ({
        ...prevState,
        image: this.state.imageArray[0],
        largeImage: this.state.largeImageArray[0],
        image1: this.state.imageArray[1],
        largeImage1: this.state.largeImageArray[1],
        image2: this.state.imageArray[2],
        largeImage2: this.state.largeImageArray[2]
      }));
    }
  }

  handleChange = e => {
    const { name, type, value } = e.target;
    const val = type === "number" ? parseFloat(value) : value;

    this.setState({ [name]: val });
  };

  handleFeatureArrayChange = e => {
    const { name, type, value } = e.target;
    this.setState(prevState => ({
      features: prevState.features.map((feat, key) => {
        if (key == name) {
          return value;
        } else return feat;
      })
    }));
  };

  handleHighlightArrayChange = e => {
    const { name, type, value } = e.target;
    this.setState(prevState => ({
      highlights: prevState.highlights.map((highlight, key) => {
        if (key == name) {
          return value;
        } else return highlight;
      })
    }));
  };

  keyPressFeature = e => {
    if (e.keyCode == 13) {
      this.setState({
        features: this.state.features.concat("")
      });
    }
  };
  keyPressHighlight = e => {
    if (e.keyCode == 13) {
      this.setState({
        highlights: this.state.highlights.concat("")
      });
    }
  };

  handleArrayChange = e => {
    this.setState({
      promo: Array.from(e.target.selectedOptions, item => item.value)
    });
  };

  // handleFeatureHighlightChange = e => {
  //   const { name, type, value } = e.target;
  //   this.setState(state => ({
  //     features: Array.from(value.split("\n"))
  //   }));
  // };

  uploadFileHandler = async e => {
    const files = e.target.files;

    const data = new FormData();
    Array.from(files).map(async file => {
      data.append("file", file);
      data.append("upload_preset", "americansavings");

      const res = await fetch(
        "https://api.cloudinary.com/v1_1/americansavings/image/upload",
        {
          method: "POST",
          body: data
        }
      );
      const fileResp = await res.json();

      if (!fileResp.error) {
        this.setState(prevState => ({
          ...prevState,
          imageArray: [...prevState.imageArray, fileResp.secure_url],
          largeImageArray: [
            ...prevState.largeImageArray,
            fileResp.eager[0].secure_url
          ]
        }));
      } else {
        this.setState(prevState => ({
          ...prevState,
          imageArray: [...prevState.image],
          largeImageArray: [...prevState.largeImage]
        }));
      }
    });
  };

  render() {
    return (
      <WidthStyles>
        <Mutation mutation={CREATE_ITEM_MUTATION} variables={this.state}>
          {(createItem, { loading, error }) => (
            <Form
              data-test="form"
              onSubmit={async e => {
                // Stop the form from submitting
                e.preventDefault();
                const res = await createItem();
                // change them to the single item page

                Router.push({
                  pathname: "/item",
                  query: { id: res.data.createItem.id }
                });
              }}
            >
              <Error error={error} />
              <fieldset disabled={loading} aria-busy={loading}>
                <Flex px={2} justifyContent="space-between">
                  <label htmlFor="file">
                    Images
                    <input
                      multiple
                      type="file"
                      id="file"
                      name="file"
                      placeholder="Upload an image"
                      required
                      onChange={this.uploadFileHandler}
                    />
                    {/* {this.state.image &&
                      this.state.image.map(image => (
                        <img width="200" src={image} alt="Upload Preview" />
                      ))} */}
                  </label>
                </Flex>

                <label htmlFor="title">
                  Title
                  <input
                    type="text"
                    id="title"
                    name="title"
                    placeholder="Title"
                    required
                    value={this.state.title}
                    onChange={this.handleChange}
                  />
                </label>

                <label htmlFor="price">
                  Price
                  <input
                    type="number"
                    id="price"
                    name="price"
                    placeholder="Price"
                    required
                    value={this.state.price}
                    onChange={this.handleChange}
                  />
                </label>
                <label htmlFor="sale">
                  Sale
                  <input
                    type="checkbox"
                    id="sale"
                    name="sale"
                    value={this.state.sale}
                    onChange={() => {
                      this.setState({ sale: !this.state.value });
                    }}
                  />
                </label>
                <label htmlFor="categories">
                  Category
                  <select
                    value={this.state.categories}
                    name="categories"
                    id="categories"
                    onChange={this.handleChange}
                    multiple={false}
                  >
                    {possibleCategories.map(category => (
                      <option key={category} value={category}>
                        {category}
                      </option>
                    ))}
                  </select>
                </label>
                <label htmlFor="categories">
                  Promo
                  <select
                    value={this.state.promo}
                    name="promo"
                    id="promo"
                    // type="array"
                    onChange={this.handleArrayChange}
                    multiple
                  >
                    {promoCodes.map(promo => (
                      <option key={promo.id} value={promo}>
                        {promo}
                      </option>
                    ))}
                  </select>
                </label>

                <label htmlFor="description">
                  Description
                  <textarea
                    id="description"
                    name="description"
                    placeholder="Enter A Description"
                    required
                    value={this.state.description}
                    onChange={this.handleChange}
                  />
                </label>
                <label htmlFor="features">
                  Features
                  {this.state.features.map((feature, i) => (
                    <div key={i}>
                      <textarea
                        key={i}
                        type="features"
                        placeholder={`${feature}`}
                        // supply a unique "name" attribute using string interpolation
                        name={i}
                        value={this.state.features[i]}
                        onChange={this.handleFeatureArrayChange}
                        onKeyDown={this.keyPressFeature}
                      />
                    </div>
                  ))}
                </label>
                <label htmlFor="highlights">
                  Highlights
                  {this.state.highlights.map((highlight, i) => (
                    <div key={i}>
                      <textarea
                        key={i}
                        type="highlights"
                        placeholder={`${highlight}`}
                        // supply a unique "name" attribute using string interpolation
                        name={i}
                        value={this.state.highlights[i]}
                        onChange={this.handleHighlightArrayChange}
                        onKeyDown={this.keyPressHighlight}
                      />
                    </div>
                  ))}
                </label>
                <button type="submit">Submit</button>
              </fieldset>
            </Form>
          )}
        </Mutation>
      </WidthStyles>
    );
  }
}

export default CreateItem;
export { CREATE_ITEM_MUTATION };

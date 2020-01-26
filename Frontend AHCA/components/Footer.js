import React from "react";
import { Heading, Flex, Box, Text, Link, Image } from "rebass";
import styled from "styled-components";
import { ThemeProvider } from "emotion-theming";
import theme from "./theme";

const FooterStyle = styled.footer`
  display: flex;
  flex-flow: row wrap;
  padding: 30px 0px 0px 0px;
  .footer__nav {
    display: flex;
    flex-flow: row wrap;
  }

  .footer__nav > * {
    flex: 1 50%;
    margin-right: 1.25em;
  }

  .nav__ul a {
    color: #999;
  }

  .nav__ul--extra {
    column-count: 2;
    column-gap: 1.25em;
  }
  .legal {
    display: flex;
    flex-wrap: wrap;
    color: #999;
  }
  .legal__links {
    display: flex;
    align-items: center;
  }
  ul {
    list-style: none;
    padding-left: 0;
  }
  li {
    line-height: 2em;
  }
  .nav__item--extra {
    flex-grow: 2;
  }

  .footer__addr {
    flex: 1 0px;
    /* display: flex; */
  }

  .footer__nav {
    flex: 2 0px;
  }
  .footer > * {
    flex: 1 100%;
  }

  @media screen and (max-width: 40.375em) {
    .footer__addr {
      display: flex;
    }

    .footer__addr a {
      width: 100%;
    }
  }
  @media screen and (min-width: 24.375em) {
    .legal .legal__links {
      margin-left: auto;
    }
  }

  @media screen and (min-width: 40.375em) {
    .footer__nav > * {
      flex: 1;
    }

    .nav__item--extra {
      flex-grow: 2;
    }

    .footer__addr {
      flex: 1 0px;
    }

    .footer__nav {
      flex: 2 0px;
    }
  }
`;

const Footer = props => {
  console.log(props.context);
  return (
    <ThemeProvider theme={theme}>
      <Flex
        alignItems="start"
        // minHeight="100vh"
        m="0"
        sx={{
          display: "grid",
          gridTemplateRows: "auto 1fr auto"
        }}
      >
        <FooterStyle>
          <Flex
            flexDirection="row"
            flexWrap="wrap"
            p="30px 30px 20px 30px"
            fontSize={[1, 2]}
            backgroundColor="whites.5"
            className="footer"
          >
            <Box className="footer__addr">
              <Link href="/">
                <a>
                  <Image
                    width={[10 / 10, 3 / 10]}
                    src="https://res.cloudinary.com/americansavings/image/upload/v1579907623/bczrzvecqks3sueydzcw.png"
                  />
                </a>
              </Link>
              <Box display="flex" flexWrap="wrap">
                <Text
                  className="address"
                  fontSize={[0, 1, 2]}
                  color="#999"
                  width={1}
                >
                  2133 - 5455 Wilshire Blvd, Los Angeles CA 90036
                </Text>
                <Link variant="nav" width={1}>
                  <a href="tel:18883161722">
                    <Text color="#999">1 (888) 316 - 1722</Text>
                  </a>
                </Link>
              </Box>
              <br />
            </Box>
            <ul className="footer__nav">
              <li className="nav__item">
                <Heading>Media</Heading>
                <ul className="nav__ul">
                  <li>
                    <Link href="#">
                      <a>Online</a>
                    </Link>
                  </li>
                  <li>
                    <Link href="#">
                      <a>Print</a>
                    </Link>
                  </li>
                  <li>
                    <Link href="#">
                      <a>Alternative Ads</a>
                    </Link>
                  </li>
                </ul>
              </li>
              <li className="nav__item nav__item--extra">
                <Heading>Technology</Heading>
                <ul className="nav__ul nav__ul--extra">
                  <li>
                    <Link href="#">
                      <a>Hardware Design</a>
                    </Link>
                  </li>
                  <li>
                    <Link href="#">
                      <a>Hardware Design</a>
                    </Link>
                  </li>
                  <li>
                    <Link href="#">
                      <a>Hardware Design</a>
                    </Link>
                  </li>
                  <li>
                    <Link href="#">
                      <a>Hardware Design</a>
                    </Link>
                  </li>
                  <li>
                    <Link href="#">
                      <a>Hardware Design</a>
                    </Link>
                  </li>
                  <li>
                    <Link href="#">
                      <a>Hardware Design</a>
                    </Link>
                  </li>
                  <li>
                    <Link href="#">
                      <a>Hardware Design</a>
                    </Link>
                  </li>
                </ul>
              </li>
              <li className="nav__item">
                <Heading>Legal</Heading>
                <ul className="nav__ul">
                  <li>
                    <Link href="#">
                      <a>Privacy Policy</a>
                    </Link>
                  </li>
                  <li>
                    <Link href="#">
                      <a>Terms of Use</a>
                    </Link>
                  </li>
                  <li>
                    <Link href="#">
                      <a>Site Map</a>
                    </Link>
                  </li>
                </ul>
              </li>
            </ul>
            <Box className="legal">
              <Text>
                &copy; 2020 American Home Construction Authority. All rights
                reserved.
              </Text>
              <Box className="legal__links">
                <Text>There is something here</Text>
              </Box>
            </Box>
          </Flex>
        </FooterStyle>
      </Flex>
    </ThemeProvider>
  );
};
export default Footer;

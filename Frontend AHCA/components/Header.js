import Link from "next/link";
import styled from "styled-components";
import Router from "next/router";
import NProgress from "nprogress";
import Nav from "./Nav";
import Cart from "./Cart";
import Search from "./Search";
import { ThemeProvider } from "emotion-theming";
import theme from "./theme";
import { Flex, Box, Image } from "rebass";

Router.onRouteChangeStart = () => {
  NProgress.start();
};

Router.onRouteChangeComplete = () => {
  NProgress.done();
};

Router.onRouteChangeError = () => {
  NProgress.done();
};

const Logo = styled.h1`
  position: relative;
  margin-left: 2rem;
  z-index: 2;
  transform: skew(-7deg);
  a {
    padding: 0.5rem 1rem;
    background: ${props => props.theme.headingRed};
    color: white;
    text-transform: uppercase;
    text-decoration: none;
  }

  @media only screen and (max-width: 40em) {
    font-size: 2rem;
    margin: 0 auto;
  }
  @media only screen and (min-width: 52em) {
    font-size: 3rem;
    padding-right: 5px;
    margin: 0;
    text-align: center;
  }

  @media only screen and (min-width: 64em) {
    font-size: 4rem;
    margin: 0;
    padding-right: 5px;
    padding-left: 10px;
    text-align: center;
  }
  @media only screen and (min-width: 76em) {
    font-size: 4.8rem;
    padding-right: 10px;
    padding-left: 20px;
    margin: 0;
    text-align: left;
  }
`;

const CartControl = styled.button`
  @media (max-width: 64em) {
    display: none;
  }
`;

const StyledHeader = styled.header`
  .bar {
    border-bottom: 10px solid ${props => props.theme.black};
    display: grid;
    grid-template-columns: auto 1fr;
    justify-content: space-between;
    align-items: stretch;
    @media (max-width: 30em) {
      grid-template-columns: 1fr;
      justify-content: center;
      align-items: center;
    }
  }
  .sub-bar {
    display: grid;
    grid-template-columns: 1fr auto;
    border-bottom: 1px solid ${props => props.theme.lightgrey};
  }
`;

const Header = props => (
  <ThemeProvider theme={theme}>
    <StyledHeader>
      <div className="bar">
        <Flex>
          <Link href="/">
            <a>
              <Box
                display="flex"
                justifyContent={[
                  "center",
                  "flex-start",
                  null,
                  null,
                  "flex-start"
                ]}
              >
                <Image
                  width={[2 / 8]}
                  src="https://res.cloudinary.com/americansavings/image/upload/v1579907623/bczrzvecqks3sueydzcw.png"
                />
              </Box>
            </a>
          </Link>
        </Flex>
        <Nav />
      </div>
      <div className="sub-bar">
        <Search />
      </div>
      <Cart />
    </StyledHeader>
  </ThemeProvider>
);

export default Header;

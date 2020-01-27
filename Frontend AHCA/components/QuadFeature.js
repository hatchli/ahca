import React from "react";
import FancyButton from "./FancyButton";
import styled from "styled-components";
import { Box, Flex, Text, Heading, Image } from "rebass";

const QuadFeatureStyle = styled.div`
  min-height: 300px;
  width: 100%;
  display: flex;
  justify-content: center;
`;
const responsiveWidth = [1, 1 / 2];
const featureFontSize = [3, 4, 5];
const textFontSize = [1, 2, 3];
const bcolor = "lightGray";
export default function QuadFeature(props) {
  return (
    <QuadFeatureStyle>
      <Flex
        py={5}
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
        textAlign="center"
        height="auto"
        width={[1, 3 / 4]}
      >
        <Heading
          width={1}
          fontSize={[4, 5, 7]}
          py={2}
          textAlign="center"
          sx={{
            textTransform: "uppercase"
          }}
        >
          Experience + Value
        </Heading>
        <Flex
          mx={2}
          pt={3}
          flexDirection="row"
          justifyContent="space-between"
          alignItems="stretch"
          sx={{
            // borderWidth: "1px",
            // borderStyle: "solid",
            // // borderColor: "tomato",
            borderBottomWidth: "1px",
            borderBottomStyle: "solid",
            borderBottomColor: "moonGray"
          }}
        >
          <Box
            {...props}
            width={responsiveWidth}
            px={2}
            mx={2}
            sx={{
              borderRightWidth: "1px",
              borderRightStyle: "solid",
              borderRightColor: "moonGray"
            }}
          >
            <Flex justifyContent="center" alignItems="baseline">
              <Image
                alignSelf="flex-start"
                mr={3}
                src="https://res.cloudinary.com/americansavings/image/upload/v1577393743/o0cswr3rrjkwxkzeuzpj.svg"
              />
              <Flex flexDirection="column" width={3 / 4}>
                <Heading
                  fontSize={featureFontSize}
                  textAlign="left"
                  sx={{
                    textTransform: "uppercase"
                  }}
                >
                  Cost Efficient
                </Heading>
                <Text p={1} textAlign="left" fontSize={textFontSize}>
                  Up to 31% more cost efficient than convectional electric
                  heaters.
                </Text>
              </Flex>
            </Flex>
          </Box>
          <Box {...props} width={responsiveWidth} px={2} mx={2}>
            <Flex flexDirection="column" width={1}>
              <Box>
                <Flex justifyContent="center" alignItems="baseline">
                  <Image
                    alignSelf="flex-start"
                    mr={3}
                    src="https://res.cloudinary.com/americansavings/image/upload/v1577393743/tulgknjewchulh9sksvq.svg"
                  />
                  <Box width={3 / 4}>
                    <Heading
                      fontSize={featureFontSize}
                      textAlign="left"
                      sx={{
                        textTransform: "uppercase"
                      }}
                    >
                      Feature 2
                    </Heading>
                  </Box>
                  <Box width={[1, 3 / 4]} justifyContent="flex-end">
                    <Text p={1} textAlign="left" fontSize={textFontSize}>
                      Up to 31% more cost efficient than convectional electric
                      heaters.
                    </Text>
                  </Box>
                </Flex>
              </Box>
            </Flex>
          </Box>
        </Flex>
        <Flex
          mx={2}
          flexDirection="row"
          justifyContent="space-between"
          alignItems="stretch"
        >
          <Box
            {...props}
            width={responsiveWidth}
            px={2}
            mx={2}
            sx={{
              borderRightWidth: "1px",
              borderRightStyle: "solid",
              borderRightColor: "moonGray"
            }}
          >
            <Flex pt={3} justifyContent="center" alignItems="baseline">
              <Image
                alignSelf="flex-start"
                mr={3}
                src="https://res.cloudinary.com/americansavings/image/upload/v1577393743/y3utmf5gklbc9lhl29mf.svg"
              />
              <Flex flexDirection="column" width={3 / 4}>
                <Heading
                  fontSize={featureFontSize}
                  textAlign="left"
                  sx={{
                    textTransform: "uppercase"
                  }}
                >
                  Feature 3
                </Heading>
                <Text p={1} textAlign="left" fontSize={textFontSize}>
                  Up to 31% more cost efficient than convectional electric
                  heaters.
                </Text>
              </Flex>
            </Flex>
          </Box>
          <Box {...props} width={responsiveWidth} px={2} mx={2}>
            <Flex pt={3} justifyContent="center" alignItems="baseline">
              <Image
                alignSelf="flex-start"
                mr={3}
                src="https://res.cloudinary.com/americansavings/image/upload/v1577393743/snryqnflef7iyac5osoo.svg"
              />
              <Flex flexDirection="column" width={3 / 4}>
                <Heading
                  fontSize={featureFontSize}
                  textAlign="left"
                  sx={{
                    textTransform: "uppercase"
                  }}
                >
                  Feature 4
                </Heading>
                <Text p={1} textAlign="left" fontSize={textFontSize}>
                  Up to 31% more cost efficient than convectional electric
                  heaters.
                </Text>
              </Flex>
            </Flex>
          </Box>
        </Flex>
      </Flex>
    </QuadFeatureStyle>
  );
}

import React, { Component } from "react";
import styled from "styled-components";
import Raise from "./Raise";
import { Label, Input, Select, Textarea, Radio, Checkbox } from "@rebass/forms";
import { Box, Flex, Button, Card, Image, Heading, Text } from "rebass";
import Link from "next/link";

const pleft = [3, 4, 5, 6];

export const Lead = props => {
  return (
    <Flex alignItems="center" justifyContent="center" flexWrap="wrap">
      <Box width={[1, 1 / 2]} py={3}>
        <Heading color="near-black" fontSize={[4, 4, 5, 5, 7]} pl={pleft}>
          Get!
        </Heading>
        <Raise distance="50%">
          <Heading
            pl={pleft}
            fontSize={[5, 5, 6, 6, 8]}
            //   fontFamily="rtRaleway"
            color="near-black"
          >
            A Better Home
          </Heading>
        </Raise>

        <Text fontSize={[1, 2, 2, 3, 3, 4]} pl={pleft} fontWeight="bold">
          Professionally installed equipment to make every day better.
        </Text>
        <Text fontSize={[1, 2, 2, 3, 3, 4]} pl={pleft}>
          <ul>
            <li>Purchase online</li>
            <li>Finance</li>
          </ul>
        </Text>
        <Button ml={pleft} bg="dark-green" color="white">
          <Link href="/shop">
            <a>
              <Text fontWeight="bold" color="white">
                Shop Now
              </Text>
            </a>
          </Link>
        </Button>
      </Box>
      <Box
        //   display="flex"
        width={[1, 1 / 2]}
        my={[4, 5]}
        alignItems="center"
        justifyContent="center"
        py={3}
      >
        <Image src="https://res.cloudinary.com/americansavings/image/upload/v1579906765/dn0hzuf8nmcdill75bzx.svg" />
      </Box>
    </Flex>
  );
};

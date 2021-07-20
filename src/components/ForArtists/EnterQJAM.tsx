import { Flex, Text } from "@chakra-ui/react";
import * as React from "react";

export const EnterQJAM = () => (
  <Flex
    bgGradient="linear(to-r, blue.500, green.500)"
    color="white"
    py={48}
    px={3}
    justifyContent="center"
    alignItems="center"
  >
    <Text fontSize="5xl" color="white" fontWeight="bold" textAlign="center">
      Enter QJAM.
    </Text>
  </Flex>
);

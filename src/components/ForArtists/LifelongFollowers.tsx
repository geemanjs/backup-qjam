import { Container } from "../Container";
import { Flex, Heading, Img, Stack, Text, VStack } from "@chakra-ui/react";
import * as React from "react";

export const LifelongFollowers = () => (
  <Container>
    <Stack
      direction={{ base: "column", lg: "row" }}
      width="full"
      justify="space-between"
    >
      <Flex
        pos="relative"
        w={{ base: "full", lg: "409px" }}
        h={{ base: "auto", lg: "409px" }}
        alignItems="center"
      >
        <Img
          pos="relative"
          zIndex="0"
          mt={-40}
          ml={-10}
          boxShadow="xl"
          h={{ lg: "100%" }}
          src="https://res.cloudinary.com/qjam/image/upload/v1625655611/website/background-images/liam-signing.png"
          alt="Signing"
        />
      </Flex>
      <Flex
        flex="1"
        maxW={{ lg: "580px" }}
        direction="column"
        justifyContent="center"
      >
        <VStack spacing={4} alignItems="flex-start">
          <Heading fontSize="6xl" mr={[0, 0, -16]} pr={[0, 0, 16]}>
            Turn your fans into
            <br /> lifelong followers
          </Heading>
          <Text fontSize="xl" fontWeight={600}>
            QJAM redefines the meet & greet experience to make it easy for you
            to build your relationship with your followers on a global scale.
          </Text>
        </VStack>
      </Flex>
    </Stack>
  </Container>
);

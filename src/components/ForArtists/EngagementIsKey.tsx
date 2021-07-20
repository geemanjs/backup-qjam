import { Box, Flex, Heading, Stack, Text } from "@chakra-ui/react";
import { Container } from "../Container";
import { QuoteIcon } from "../QuoteIcon";
import Image from "next/image";
import spotify from "../../../public/img/spotify/icon.png";
import * as React from "react";

export const EngagementIsKey = () => (
  <Box bg="white" color="neutral.900" py={12} pb={16} px={3}>
    <Container>
      <Stack
        direction={{ base: "column", lg: "row" }}
        width="full"
        justify="space-between"
        spacing={8}
      >
        <Flex flex="1" direction="column">
          <Heading
            fontSize="5xl"
            width="max-content"
            lineHeight={1}
            borderBottomColor="green.500"
            borderBottomWidth="8px"
            borderBottomStyle="solid"
            ml={-16}
            pl={16}
            display="inline-block"
          >
            Engagement is key
          </Heading>
          <Flex direction="row" mt={12}>
            <QuoteIcon
              color="muted"
              mt={3}
              mr={1}
              fontSize={{ base: "2xl", md: "4xl" }}
            />
            <Text
              fontSize={{ base: "2xl", md: "3xl" }}
              fontStyle="italic"
              fontWeight={400}
              fontFamily="georgia"
              mt="6"
            >
              Your biggest fans can drive a massive amount of streams. On
              average, the top 5% of your fans are listening 6x more than the
              rest. Don’t forget to connect with your biggest supporters, even
              as you chase new listeners.
            </Text>
          </Flex>
          <Flex mt={6} ml={8} alignItems="center">
            <Image src={spotify} height="50px" width="50px" />
            <Text fontFamily="Lato" fontSize="2xl" ml={3} fontWeight="black">
              Spotify
            </Text>
          </Flex>
        </Flex>
      </Stack>
    </Container>
  </Box>
);

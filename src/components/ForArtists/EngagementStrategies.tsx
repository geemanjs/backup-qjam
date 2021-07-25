import { Box, Flex, Heading, Image, VStack } from "@chakra-ui/react";
import {
  ListItem,
  ListItemLeft,
  ListItemSubTitle,
  ListItemTitle,
} from "../ListItem";
import * as React from "react";

const strategies = [
  {
    icon: `${process.env.NEXT_PUBLIC_CLOUDINARY_IMAGE_API}/v1627244666/website/background-images/albumSigning.svg`,
    title: "Album signing day",
    description:
      "Promote your new album or single with a digital signing event.",
  },
  {
    icon: `${process.env.NEXT_PUBLIC_CLOUDINARY_IMAGE_API}/v1627244667/website/background-images/meetAndGreet.svg`,
    title: "Pre-concert meet & greet",
    description:
      "Chat with fans before a concert to get them engaged and excited.",
  },
  {
    icon: `${process.env.NEXT_PUBLIC_CLOUDINARY_IMAGE_API}/v1627244667/website/background-images/merch.svg`,
    title: "Merchandise promotion",
    description:
      "Incentivise your fans to purchase your album or merchandise. Distribute unique codes to customers for exclusive access to the Q.",
  },
  {
    icon: `${process.env.NEXT_PUBLIC_CLOUDINARY_IMAGE_API}/v1627244667/website/background-images/heart.svg`,
    title: "Heart to heart with fans",
    description: "Increase engagement with your fans by hosting a QJAM event.",
  },
];

export const EngagementStrategies = () => (
  <Flex
    bg="neutral.50"
    color="neutral.900"
    py={24}
    alignItems="center"
    justifyContent="center"
  >
    <Box
      bg="#fbfdfe"
      borderRadius="xl"
      overflow="hidden"
      width="xl"
      boxShadow="2xl"
      pb={8}
    >
      <Box bg="green.500" width="100%" py={2}></Box>
      <VStack>
        <Heading
          bg="white"
          py="8"
          width="full"
          textAlign="center"
          color="black"
        >
          Engagement Strategies
        </Heading>
        {strategies.map((strategy) => (
          <ListItem py={4} px={8} key={strategy.title}>
            <ListItemLeft mr={2} alignSelf="flex-start" justifyContent="center">
              <Image src={strategy.icon} alt="" height="48px" width="48px" />
            </ListItemLeft>
            <ListItemTitle fontSize={[ "lg", "lg", "xl" ]} fontWeight="bold">
              {strategy.title}
            </ListItemTitle>
            <ListItemSubTitle color="neutral.800" fontSize="lg">
              {strategy.description}
            </ListItemSubTitle>
          </ListItem>
        ))}
      </VStack>
    </Box>
  </Flex>
);

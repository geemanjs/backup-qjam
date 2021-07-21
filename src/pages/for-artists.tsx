import { StandardLayout } from "../components/Layouts/Standard";
import * as React from "react";
import { Artist, Event } from "../types";
import {
  Box,
  Circle,
  Flex,
  Heading,
  HStack,
  Image,
  Text,
  VStack,
} from "@chakra-ui/react";
import { Container } from "../components/Container";
import { Header } from "../components/Layouts/Header";
import { LifelongFollowers } from "../components/ForArtists/LifelongFollowers";
import { EngagementIsKey } from "../components/ForArtists/EngagementIsKey";
import { EnterQJAM } from "../components/ForArtists/EnterQJAM";
import { PreEventBuzz } from "../components/ForArtists/PreEventBuzz";
import { EngagementStrategies } from "../components/ForArtists/EngagementStrategies";
import { PostEventBuzz } from "../components/ForArtists/PostEventBuzz";
import { GoLive } from "../components/ForArtists/GoLive";
import { DigitalMemories } from "../components/ForArtists/DigitalMemories";
import { ShareableMemories } from "../components/ForArtists/ShareableMemories";
import appleDownload from "../../public/img/apple/download.png";
import androidDownload from "../../public/img/google/download.png";
import NextImage from "next/image";
import { DownloadLinks } from "../components/DownloadLinks";

const Index = ({
  artists,
}: {
  artists: Artist[];
  upcomingEvents: Event[];
  previousEvents: Event[];
}) => {
  return (
    <StandardLayout withDefaultHeader={false}>
      <Box bg="black" color="white" pb={12}>
        <Header bg="transparent" />
        <LifelongFollowers />
      </Box>

      <EngagementIsKey />
      <EnterQJAM />
      <PreEventBuzz />
      <GoLive />
      <DigitalMemories />
      <ShareableMemories />
      <PostEventBuzz />

      <EngagementStrategies />

      <Flex
        bg="white"
        position="relative"
        py={20}
        justifyContent="center"
        backgroundPosition="center"
        backgroundRepeat="no-repeat"
        backgroundImage="url('https://res.cloudinary.com/qjam/image/upload/v1625661191/website/background-images/country-cloud.svg')"
      >
        <Circle
          mt={4}
          color="white"
          height="460px"
          width="460px"
          backgroundRepeat="no-repeat"
          backgroundSize="460px"
          backgroundImage="url('https://res.cloudinary.com/qjam/image/upload/v1625661181/website/background-images/earth.png')"
          textAlign="center"
          p={8}
        >
          <VStack>
            <Heading fontSize="5xl">Reach fans globally</Heading>
            <Text fontSize="xl">
              QJAM has been used by fans in over 80 countries and they can&apos;t
              wait to meet you.
            </Text>
          </VStack>
        </Circle>
      </Flex>

      <Box bg="blue.900" color="white" py={24} px={3}>
        <Container>
          <VStack spacing={6}>
            <Heading fontSize="5xl" fontWeight="500" textAlign="center">
              QJAM is the go to platform for the world to engage with their
              heroes.
            </Heading>
            <Text fontSize="xl" fontWeight={400}>
              Download the free app now and sign up as an artist to get started.
            </Text>
            <DownloadLinks />
          </VStack>
        </Container>
      </Box>
    </StandardLayout>
  );
};

export default Index;

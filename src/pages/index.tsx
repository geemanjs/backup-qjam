import { StandardLayout } from "../components/Layouts/Standard";
import * as React from "react";
import { HomePageHeader } from "../components/HomePage/HomePageHeader";
import { FeaturedArtists } from "../components/HomePage/FeaturedArtists";
import { GetStaticProps } from "next";
import { Artist, Event } from "../types";
import { ArtistService } from "../services/ArtistService";
import { Events } from "../components/HomePage/UpcomingEvents";
import {
  Box,
  BoxProps,
  Button,
  Flex,
  Heading,
  Img,
  Stack,
  Text,
  VStack,
} from "@chakra-ui/react";
import { EventsService } from "../services/EventService";
import { Container } from "../components/Container";

const Index = ({
  artists,
  upcomingEvents,
  previousEvents,
}: {
  artists: Artist[];
  upcomingEvents: Event[];
  previousEvents: Event[];
}) => {
  return (
    <StandardLayout withDefaultHeader={false}>
      <HomePageHeader />
      <FeaturedArtists artists={artists} />
      <Events
        heading="Upcoming Events"
        type="UPCOMING"
        events={upcomingEvents}
      />
      <Events
        heading="Previous Events"
        type="ARCHIVED"
        events={previousEvents}
      />
      <Box bg="neutral.900" color="white" py={12} px={3}>
        <Container>
          <Stack
            direction={{ base: "column", lg: "row" }}
            width="full"
            justify="space-between"
            spacing={8}
          >
            <Flex flex="1" maxW={{ lg: "580px" }} direction="column">
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
                Go Live
              </Heading>
              <Flex flex="1" alignItems="center">
                <VStack spacing={4}>
                  <Text fontSize="lg" fontWeight={600}>
                    Join the Q of an event for your chance to be chosen to live
                    video chat with your favourite artist.
                  </Text>
                  <Text fontSize="lg" fontWeight={600}>
                    A recording of your video chat will be ready for you after
                    the event to save and share.
                  </Text>
                </VStack>
              </Flex>
            </Flex>
            <Box
              pos="relative"
              w={{ base: "full", lg: "409px" }}
              h={{ base: "auto", lg: "409px" }}
            >
              <Img
                float="right"
                pos="relative"
                zIndex="1"
                h={{ lg: "100%" }}
                src="https://res.cloudinary.com/qjam/image/upload/v1625655622/website/background-images/livestream.png"
                alt="Event lounge"
              />
            </Box>
          </Stack>
        </Container>
      </Box>
      <Box bg="white" color="neutral.900" py={12} px={3}>
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
                zIndex="1"
                h={{ lg: "70%" }}
                src="https://res.cloudinary.com/qjam/image/upload/v1625655626/website/background-images/signing.jpg"
                alt="Signing"
              />
            </Flex>
            <Flex flex="1" maxW={{ lg: "580px" }} direction="column">
              <Heading
                fontSize="5xl"
                lineHeight={1}
                mr={[0, 0, -16]}
                pr={[0, 0, 16]}
                borderBottomColor="green.500"
                borderBottomWidth="8px"
                borderBottomStyle="solid"
              >
                Personalised digital
                <br />
                signings
              </Heading>
              <Flex flex="1" alignItems="center">
                <VStack spacing={4}>
                  <Text fontSize="lg" fontWeight={600}>
                    Whether it’s your name, your friends name, or a doodle, your
                    signing is personalised direct from artist to you to keep
                    forever.
                  </Text>
                  <Text fontSize="lg" fontWeight={600} alignSelf="flex-start">
                    Save it. Share it. Print it. Brag about it.
                  </Text>
                </VStack>
              </Flex>
            </Flex>
          </Stack>
        </Container>
      </Box>
      <Box bg="blue.900" color="white" py={12} px={3}>
        <Container>
          <Stack
            direction={{ base: "column", lg: "row" }}
            width="full"
            justify="space-between"
          >
            <Flex flex="1" maxW={{ lg: "580px" }} direction="column">
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
                Share your
                <br />
                excitement
              </Heading>
              <Flex flex="1" alignItems="center">
                <VStack spacing={4}>
                  <Text fontSize="lg" fontWeight={600}>
                    Enter the event lounge and connect with other fans before
                    the event starts.
                  </Text>
                </VStack>
              </Flex>
            </Flex>
            <Box
              pos="relative"
              w={{ base: "full", lg: "409px" }}
              h={{ base: "auto", lg: "409px" }}
            >
              <Img
                float="right"
                pos="relative"
                zIndex="1"
                h={{ lg: "100%" }}
                src="https://res.cloudinary.com/qjam/image/upload/v1625655645/website/background-images/event-lounge.png"
                alt="Screening talent"
              />
            </Box>
          </Stack>
        </Container>
      </Box>
      <Box bg="white" color="neutral.900" py={24} px={3}>
        <Container>
          <VStack spacing={6}>
            <Heading fontSize="5xl" lineHeight={1}>
              Are you a music artists?
            </Heading>
            <Text fontSize="xl" fontWeight={300}>
              There’s a reason why QJAM is used by some of the{" "}
              <strong>biggest</strong> artists and labels{" "}
              <strong>in the world</strong>.
            </Text>
            <Text fontSize="xl" fontWeight={400}>
              <strong>Join now</strong> to get closer to your fans like never
              before.
            </Text>
            <Button
              variant="solid"
              colorScheme="teal"
              bg="teal.400"
              size="lg"
              borderRadius="full"
              px={16}
              fontSize="xl"
            >
              Learn more
            </Button>
          </VStack>
        </Container>
      </Box>
    </StandardLayout>
  );
};

export const getStaticProps: GetStaticProps<{ artists: Artist[] }, {}> =
  async () => {
    const [artists, upcomingEvents, previousEvents] = await Promise.all([
      ArtistService.featured(),
      EventsService.upcoming(),
      EventsService.archived(9),
    ]);
    return {
      props: { artists, upcomingEvents, previousEvents },
      revalidate: 10,
    };
  };

export default Index;

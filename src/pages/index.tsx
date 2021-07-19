import { StandardLayout } from "../components/Layouts/Standard";
import * as React from "react";
import { HomePageHeader } from "../components/HomePage/HomePageHeader";
import { FeaturedArtists } from "../components/HomePage/FeaturedArtists";
import { GetStaticProps } from "next";
import { Artist, Event } from "../types";
import { ArtistService } from "../services/ArtistService";
import { Events } from "../components/HomePage/UpcomingEvents";
import { Box, Flex, Heading, Img, Stack, Text, VStack } from "@chakra-ui/react";
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
  console.log(artists);
  return (
    <StandardLayout withDefaultHeader={false}>
      <HomePageHeader />
      <FeaturedArtists artists={artists} />
      <Events heading="Upcoming Events" events={upcomingEvents} />
      <Events heading="Previous Events" events={previousEvents} />
      <Box bg="neutral.800" color="white" py={8}>
        <Container>
          <Stack
            direction={{ base: "column", lg: "row" }}
            width="full"
            // spacing={{ base: "3rem", lg: "2rem" }}
            justify="space-between"
          >
            <Box flex="1" maxW={{ lg: "520px" }}>
              <Heading fontSize="5xl">Go Live</Heading>
              <VStack
                spacing={4}
                as={Flex}
                flex="1"
                alignItems="center"
                justifyContent="center"
              >
                <Text>
                  Join the Q of an event for your chance to be chosen to live
                  video chat with your favourite artist.
                </Text>
                <Text>
                  A recording of your video chat will be ready for you after the
                  event to save and share.
                </Text>
              </VStack>
            </Box>
            <Box
              pos="relative"
              w={{ base: "full", lg: "560px" }}
              h={{ base: "auto", lg: "560px" }}
            >
              <Img
                float="right"
                pos="relative"
                zIndex="1"
                h={{ lg: "100%" }}
                src="https://res.cloudinary.com/qjam/image/upload/v1625655622/website/background-images/livestream.png"
                alt="Screening talent"
              />
            </Box>
          </Stack>
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

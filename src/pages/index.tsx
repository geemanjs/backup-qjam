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
import Link from "next/link";
import { LeftImageContainer } from "../components/Layouts/LeftImageContainer";
import { RightImageContainer } from "../components/Layouts/RightImageContainer";

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
      <RightImageContainer
        bg="neutral.900"
        color="white"
        heading="Go Live"
        image={{
          src: "https://res.cloudinary.com/qjam/image/upload/v1625655622/website/background-images/livestream.png",
          alt: "Event lounge",
        }}
      >
        <Text fontSize="xl">
          Join the Q of an event for your chance to be chosen to live video chat
          with your favourite artist.
        </Text>
        <Text fontSize="xl">
          A recording of your video chat will be ready for you after the event
          to save and share.
        </Text>
      </RightImageContainer>
      <LeftImageContainer
        bg="white"
        color="neutral.900"
        heading={
          <>
            Personalised digital
            <br />
            signings
          </>
        }
        image={{
          size: "70%",
          src: "https://res.cloudinary.com/qjam/image/upload/v1625655626/website/background-images/signing.jpg",
          alt: "Signing",
        }}
      >
        <Text fontSize="xl">
          Whether it’s your name, your friend&apos;s name, or a doodle, your signing
          is personalised direct from artist to you to keep forever.
        </Text>
        <Text fontSize="xl" alignSelf="flex-start">
          Save it. Share it. Print it. Brag about it.
        </Text>
      </LeftImageContainer>

      <RightImageContainer
        bg="blue.900"
        color="white"
        heading={<>Share your<br/>excitement</>}
        image={{
          src: "https://res.cloudinary.com/qjam/image/upload/v1625655645/website/background-images/event-lounge.png",
          alt: "Screening talent",
        }}
      >
        <Text fontSize="xl">
          Enter the event lounge and connect with other fans before the event
          starts.
        </Text>
      </RightImageContainer>

      <Box bg="white" color="neutral.900" py={24} px={3}>
        <Container>
          <VStack spacing={6}>
            <Heading fontSize="5xl" lineHeight={1}>
              Are you a music artist?
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
            <Link href="/for-artists" passHref={true}>
              <Button
                as="a"
                variant="qjam"
                size="lg"
                px={16}
                fontSize="xl"
              >
                Learn more
              </Button>
            </Link>
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

import React from "react";
import { GetStaticPaths, GetStaticProps, GetStaticPropsContext } from "next";
import { ArtistService } from "../../../services/ArtistService";
import { Artist, Event, MusicTrack } from "../../../types";
import { EventsService } from "../../../services/EventService";
import { formatFollowerCount } from "../../../services/Utils/formatFollowerCount";
import { StandardLayout } from "../../../components/Layouts/Standard";
import { NextSeo } from "next-seo";
import { Container } from "../../../components/Container";
import {
  Avatar,
  Box,
  Button,
  Flex,
  Heading,
  Link,
  Text,
} from "@chakra-ui/react";
import { EventImageBottom } from "../../../components/Events/EventImageBottom";
import {
  ListItem,
  ListItemLeft,
  ListItemTitle,
} from "../../../components/ListItem";
import { htmlify } from "../../../services/Utils/htmlify";
import { EventsList } from "../../../components/Events/EventsList";
import styled from "@emotion/styled";

interface IProps {
  artist: Artist;
  upcomingEvents: Event[];
  liveEvents: Event[];
  archivedEvents: Event[];
}

//  language=SCSS
const ViewOnMusicServiceWrapper = styled(Flex)`
  & {
    position: absolute;
    right: 0;
    top: 23px;
  }

  @media (max-width: 719px) {
    & {
      display: block;
      position: relative;
      top: 0px;
    }
  }
`;

function seoConfig(artist: Artist) {
  return {
    title: `Meet ${artist.displayName} on QJAM`,
    description: `Get the QJAM app to live video chat with ${artist.displayName} and receive a digital signing.`,
    openGraph: {
      title: `Meet ${artist.displayName} on QJAM`,
      description: `Get the QJAM app to live video chat with ${artist.displayName} and receive a digital signing.`,
      images: [
        {
          url: artist.coverPhoto.loc,
          width: 640,
          height: 427,
          alt: `${artist.displayName} cover picture`,
        },
      ],
      site_name: "QJAM",
    },
    twitter: {
      cardType: "summary_large_image",
    },
  };
}

export const ArtistView = ({
  liveEvents,
  upcomingEvents,
  archivedEvents,
  artist,
}: IProps) => {
  const followers = formatFollowerCount(artist.followerCount);
  return (
    <StandardLayout>
      <NextSeo {...seoConfig(artist)} />
      <Container px={0}>
        <Box
          width="full"
          style={{ height: "50vw", maxHeight: "520px", position: "relative" }}
          boxShadow="none"
          borderRadius="0px"
          backgroundImage={`url('${artist.coverPhoto.loc}')`}
          backgroundRepeat="no-repeat"
          backgroundPosition="center"
          backgroundSize="cover"
        >
          {/*<Header*/}
          {/*  bg="transparent"*/}
          {/*  style={{ background: 'linear-gradient(rgba(0, 0, 0, 0.75), rgba(0, 0, 0, 0))' }}*/}
          {/*/>*/}
          <EventImageBottom>
            <Flex
              justifyContent="space-between"
              alignItems="center"
              width="full"
              px={3}
              py={2}
            >
              <Text color="white" fontWeight="bold">
                {followers}
              </Text>
              <Flex>{/*<Button size="md">Follow on QJAM</Button>*/}</Flex>
            </Flex>
          </EventImageBottom>
        </Box>

        <Flex bg="white" flexGrow={1} justifyContent="center" p={3}>
          <ListItem>
            <ListItemLeft mr={2}>
              <Avatar size="lg" src={artist.profilePic.loc} />
            </ListItemLeft>
            <ListItemTitle fontWeight="bold" fontSize="2xl">
              {artist.displayName}
            </ListItemTitle>
          </ListItem>
        </Flex>
        {artist.isUnclaimed && (
          <Text
            style={{ whiteSpace: "pre-wrap" }}
            textAlign="center"
            bg="white"
            fontSize="lg"
            pb={3}
            px={2}
          >
            <Text fontWeight="bold">
              Want to live video chat with {artist.displayName}?
            </Text>
            As a valued fan, the power is in your hands to bring{" "}
            {artist.displayName} to QJAM.
            <br />
            <br />
            Download the app to find out how:
            <br />
            <br />
            <Link href={process.env.NEXT_PUBLIC_ITUNES_APP_LINK}>
              <a>
                <img
                  src="/static/img/apple/download-on-app-store.svg"
                  height="57px"
                  width="171px"
                  alt="Download on the App Store"
                />
              </a>
            </Link>
            &nbsp;
            <Link href={process.env.NEXT_PUBLIC_ANDROID_APP_LINK}>
              <a>
                <img
                  src="/static/img/google/Get_it_on_Google_play.svg"
                  height="60px"
                  width="180px"
                  alt="Get it on Google Play"
                />
              </a>
            </Link>
          </Text>
        )}
        {artist.bio && !artist.isUnclaimed && (
          <Text
            style={{ whiteSpace: "pre-wrap" }}
            textAlign="center"
            bg="white"
            pb={3}
            px={2}
            dangerouslySetInnerHTML={{ __html: htmlify(artist.bio) }}
          />
        )}
      </Container>
      <Container pb={4}>
        <EventsList
          live={liveEvents}
          upcoming={upcomingEvents}
          archived={archivedEvents}
        />
      </Container>
      {artist.music && artist.music.tracks && (
        <React.Fragment>
          <Container pb={[4, 4, 2]}>
            <div style={{ position: "relative" }}>
              <Heading
                textAlign={["left", "left", "center"]}
                pb={3}
                fontSize="md"
              >
                FEATURED MUSIC
              </Heading>
              <Heading
                textAlign={["left", "left", "center"]}
                pb={3}
                fontSize="md"
              >
                {artist.music.title}
                {artist.music.releaseDate && (
                  <React.Fragment>
                    <br />
                    (Upcoming Album)
                  </React.Fragment>
                )}
              </Heading>
              <ViewOnMusicServiceWrapper>
                {artist.spotifyUri && (
                  <Flex mr={10} flexDirection="column" alignItems="center">
                    <Link href={artist.spotifyUri} passHref={true}>
                      <Button
                        as="a"
                        bg="teal.400"
                        color="white"
                        borderRadius="lg"
                      >
                        View on Spotify
                      </Button>
                    </Link>
                  </Flex>
                )}
                {artist.appleMusicUrl && (
                  <Flex
                    flexDirection="column"
                    alignItems="center"
                    mt={[10, null, 0]}
                  >
                    <Link href={artist.appleMusicUrl} passHref={true}>
                      <Button
                        as="a"
                        bg="teal.400"
                        color="white"
                        borderRadius="lg"
                      >
                        View on Apple Music
                      </Button>
                    </Link>
                  </Flex>
                )}
              </ViewOnMusicServiceWrapper>
            </div>
          </Container>
          <Box bg="white" pt={0} pb={3} p={0}>
            {artist.music.tracks.map((song: MusicTrack, index) => (
              <Box
                _even={{ backgroundColor: "rgba(0, 0, 0, 0.1)" }}
                _hover={{ backgroundColor: "#49b8ab", color: "#fff" }}
                key={index}
                song={song}
              />
            ))}
          </Box>
        </React.Fragment>
      )}
    </StandardLayout>
  );
};

export default ArtistView;

export const getStaticPaths: GetStaticPaths = async () => {
  const slugs = await ArtistService.getSlugs();
  return {
    fallback: "blocking",
    paths: slugs.map((slug: string) => ({ params: { artistId: slug } })),
  };
};

export const getStaticProps: GetStaticProps<IProps, { artistId: string }> =
  async (context) => {
    if (!context.params) {
      throw new Error("Missing id param");
    }
    const { artistId } = context.params;
    const artist = await ArtistService.get(artistId);
    const [upcomingEvents, archivedEvents, liveEvents] = await Promise.all([
      EventsService.upcomingByHost(artist.id),
      EventsService.archivedByHost(artist.id),
      EventsService.liveByHost(artist.id),
    ]);
    return {
      props: {
        artist,
        upcomingEvents,
        archivedEvents,
        liveEvents,
      },
    };
  };

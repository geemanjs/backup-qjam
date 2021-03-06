import { GetStaticPaths, GetStaticProps } from "next";
import { EventsService } from "../../../services/EventService";
import { Event } from "../../../types";
import { useRouter } from "next/router";
import { StandardLayout } from "../../../components/Layouts/Standard";
import { Container } from "../../../components/Container";
import { VideoEventPrivate } from "../../../components/Events/VideoEventPrivate";
import { VideoEventArchived } from "../../../components/Events/VideoEventArchived";
import { EventInfo } from "../../../components/Events/EventInfo";
import { VideoEventLive } from "../../../components/Events/VideoEventLive";
import { Box, Flex, Link, Text, VStack } from "@chakra-ui/react";
import { useEffect } from "react";
import { VideoEventScheduled } from "../../../components/Events/VideoEventScheduled";
import { EventParticipants } from "../../../components/Events/EventParticipants";
import { DownloadLinks } from "../../../components/DownloadLinks";

const ViewEvent = ({ event }: { event: Event }) => {
  const { query } = useRouter();
  const { s: startAtString } = query as any;
  const startAt = parseInt(startAtString || "", 10);
  return (
    <StandardLayout>
      <Container py={4}>
        {event && (
          <Flex flexWrap="wrap">
            {/* -- Left column  -- */}
            <Box width={["full", "full", "66.66666%"]} pr={[0, 0, 3]}>
              {event.status == "LIVE" && !event.isPrivate ? (
                <Box width={370} mx="auto" boxShadowSize="md">
                  <VideoEventLive event={event} />
                  <EventInfo event={event} />
                </Box>
              ) : (
                <Box
                  boxShadowSize="md"
                  bg="white"
                  borderRadius="md"
                  boxShadow="md"
                  overflow="hidden"
                >
                  {event.status == "LIVE" && event.isPrivate && (
                    <VideoEventPrivate event={event} />
                  )}
                  {event.status === "ARCHIVED" && (
                    <VideoEventArchived event={event} startAt={startAt} />
                  )}
                  {event.status === "SCHEDULED" && (
                    <VideoEventScheduled event={event} />
                  )}
                  <EventInfo event={event} />
                </Box>
              )}
            </Box>

            {/* -- Right column  -- */}
            <Box width={["full", "full", "33.3333%"]} mt={[3, 3, 0]}>
              {event.type !== "BROADCAST" && (
                <EventParticipants event={event} />
              )}
              <Box
                boxShadow="md"
                p={4}
                mt={3}
                mb={3}
                bg="white"
                borderRadius="md"
              >
                <VStack textAlign="center" spacing={6}>
                  <Text fontSize="lg">
                    Want to chat with <strong>{event.hostName}?</strong>
                  </Text>
                  <Text fontSize="lg">Download the QJAM app for free.</Text>
                  <DownloadLinks isDark={true} />
                </VStack>
              </Box>
            </Box>
          </Flex>
        )}
      </Container>
    </StandardLayout>
  );
};

export const getStaticPaths: GetStaticPaths = async () => {
  const slugs = await EventsService.getSlugs();
  return {
    fallback: "blocking",
    paths: slugs.map((slug: string) => ({ params: { eventId: slug } })),
  };
};

export const getStaticProps: GetStaticProps<
  { event: Event },
  { eventId: string }
> = async (context) => {
  const { eventId } = context.params || {};
  if (!eventId) {
    throw new Error("Event id is required");
  }
  return {
    props: { event: await EventsService.get(eventId) },
  };
};

export default ViewEvent;

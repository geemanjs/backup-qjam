import {GetStaticPaths, GetStaticProps} from "next";
import {EventsService} from "../../../services/EventService";
import {Event} from '../../../types';
import {useRouter} from "next/router";
import {StandardLayout} from "../../../components/Layouts/Standard";
import {Container} from "../../../components/Container";
import {VideoEventPrivate} from "../../../components/Events/EventPrivateVideo";
import {VideoEventArchived} from "../../../components/Events/EventArchivedVideo";
import {EventInfo} from "../../../components/Events/EventInfo";
import {VideoEventLive} from "../../../components/Events/EventLiveVideo";
import {Box, Flex, Link} from "@chakra-ui/react";
import {useEffect} from "react";
import {VideoEventScheduled} from "../../../components/Events/VideoEventScheduled";

const ViewEvent = ({event}: {event: Event}) => {
  const {query} = useRouter();
  const {s: startAtString} = query as any;
  const startAt = parseInt(startAtString || '', 10)
  return (
    <StandardLayout>
      <Container py={4}>
        {event && (
          <Flex flexWrap="wrap">
            {/* -- Left column  -- */}
            <Box width={[1, 1, 2 / 3]} pr={[0, 0, 3]}>
              {event.status == 'LIVE' && !event.isPrivate ? (
                <Box width={370} mx="auto" boxShadowSize="md">
                  <VideoEventLive event={event} />
                  <EventInfo event={event} />
                </Box>
              ) : (
                <Box boxShadowSize="md">
                  {event.status == 'LIVE' && event.isPrivate && (
                    <VideoEventPrivate event={event} />
                  )}
                  {event.status === 'ARCHIVED' && (
                    <VideoEventArchived event={event} startAt={startAt} />
                  )}
                  {event.status === 'SCHEDULED' && <VideoEventScheduled event={event} />}
                  <EventInfo event={event} />
                </Box>
              )}
            </Box>

            {/* -- Right column  -- */}
            <Box width={[1, 1, 1 / 3]} mt={[3, 3, 0]}>
              {event.type !== 'BROADCAST' && <Participants event={event} />}
              <Card boxShadow="sm" p={4} mt={3} mb={3}>
                <Flex alignItems="center" justifyContent="center" flexDirection="column">
                  <Text fontSize={1} textAlign="center" mb={3} fontWeight={500}>
                    Want to chat with {event.hostName}?<br /> Download the QJAM app for free.
                  </Text>
                  <Link href={process.env.ITUNES_APP_LINK}>
                    <a>
                      <img
                        src="/static/img/apple/download-on-app-store-dark.svg"
                        height="48px"
                        width="144px"
                        alt="Download on app store"
                      />
                    </a>
                  </Link>
                  <Link href={process.env.ANDROID_APP_LINK}>
                    <a>
                      <img
                        src="/static/img/google/Get_it_on_Google_play.svg"
                        height="48px"
                        width="144px"
                        alt="Get it on Google Play"
                      />
                    </a>
                  </Link>
                </Flex>
              </Card>
            </Box>
          </Flex>
        )}
      </Container>
    </StandardLayout>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  const slugs = await EventsService.getSlugs();
  return {
    fallback: 'blocking',
    paths: slugs
  };
};

export const getStaticProps: GetStaticProps<{ event: Event }, { eventId: string }> = async (context) => {
  const {eventId} = context.params || {};
  if (!eventId) {
    throw new Error("Event id is required");
  }
  return {
    props: {event: await EventsService.get(eventId)}
  };
}

export default ViewEvent
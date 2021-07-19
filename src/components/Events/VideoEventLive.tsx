import { Badge, Box, Flex } from "@chakra-ui/react";
import * as React from "react";
import { Event } from "../../types";
import { LiveStreamPlayer } from "../Video/LiveStreamPlayer";
import { NextSeo } from "next-seo";

interface IEventProps {
  event: Event;
  startAt?: number;
}

function seoConfig(event: Event) {
  return {
    title: `LIVE NOW | ${event.title} | QJAM`,
    description: event.description || "",
    openGraph: {
      title: `${event.title} | QJAM`,
      description: event.description || "",
      images: [
        {
          url: event.eventPic.loc,
          width: 782,
          height: 440,
          alt: `${event.title} event picture`,
        },
      ],
      site_name: "QJAM",
    },
    twitter: {
      cardType: "summary_large_image",
    },
  };
}

export class VideoEventLive extends React.Component<IEventProps> {
  state = {
    startAt: -1,
  };

  render() {
    const { event } = this.props;
    return (
      <React.Fragment>
        <NextSeo {...seoConfig(event)} />
        {event.hlsBroadcast && (
          <LiveStreamPlayer eventId={event.id} url={event.hlsBroadcast.url} />
        )}
        <Box px={3}>
          <Flex alignItems="center" color="muted" mb={2} pt={1}>
            <Badge bg="red" mr={3} fontWeight="bold">
              Live
            </Badge>
          </Flex>
        </Box>
      </React.Fragment>
    );
  }
}

import { Box, Flex, Text } from "@chakra-ui/react";
import * as React from "react";
import { Event } from "../../types";
import { parseTimestamp } from "../../services/Dates/parseTimestamp";
import { NextSeo } from "next-seo";
import { Icon } from "../Icon";
import { refreshAt } from "../../services/Utils/refreshAt";
import { EventImageBottom } from "./EventImageBottom";

function seoConfig(event: Event) {
  return {
    title: `${event.title} | QJAM`,
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

export class VideoEventScheduled extends React.Component<
  { event: any },
  { event: Event }
> {
  timer?: NodeJS.Timeout;

  componentDidMount() {
    const { event } = this.props;
    this.timer = refreshAt(event.startAt);
  }

  componentWillUnmount() {
    if (this.timer) {
      clearTimeout(this.timer);
    }
  }

  render() {
    const { event } = this.props;
    return (
      <React.Fragment>
        <NextSeo {...seoConfig(event)} />
        <Box
          width={1}
          p={2}
          mb={2}
          style={{ height: "362px", position: "relative" }}
          height="362px"
          boxShadow="none"
          borderRadius="0px"
          backgroundImage={`url('${event.eventPic.loc}')`}
          backgroundRepeat="no-repeat"
          backgroundPosition="center"
          backgroundSize="cover"
        >
          <EventImageBottom>
            <Flex
              justifyContent="space-between"
              alignItems="center"
              width={1}
              px={2}
            >
              <Text color="white" fontWeight="normal" fontSize={4}>
                <Icon alt="Start Time" name="clock" width="20px" />
                &nbsp;
                {parseTimestamp(event.startAt).toFormat(
                  "h:mma ZZZZ, EEE d MMM"
                )}
              </Text>
              <Box>{/*<Button size="md">Notify me</Button>*/}</Box>
            </Flex>
          </EventImageBottom>
        </Box>
      </React.Fragment>
    );
  }
}

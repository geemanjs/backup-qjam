import { Box, Flex, Badge } from "@chakra-ui/react";
import * as React from "react";
import { Event } from "../../types";
import { NextSeo } from "next-seo";
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

export class VideoEventPrivate extends React.Component<
  { event: any },
  { event: Event }
> {
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
          backgroundImage={`url('${process.env.NEXT_PUBLIC_CLOUDINARY_API}/website/background-images/QJAM-Private-event.png')`}
          backgroundRepeat="no-repeat"
          backgroundPosition="center"
          backgroundSize="cover"
        >
          <EventImageBottom>
            <Box px={3}>
              <Flex alignItems="center" color="muted" mb={2} pt={1}>
                <Badge bg="red" mr={3} fontWeight="bold">
                  Live
                </Badge>
              </Flex>
            </Box>
          </EventImageBottom>
        </Box>
      </React.Fragment>
    );
  }
}

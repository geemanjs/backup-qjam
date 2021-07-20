import { RightImageContainer } from "../Layouts/RightImageContainer";
import { Text } from "@chakra-ui/react";
import * as React from "react";

export const PreEventBuzz = () => (
  <RightImageContainer
    bg="blue.900"
    color="white"
    heading="Pre-event buzz"
    image={{
      src: "https://res.cloudinary.com/qjam/image/upload/v1625655645/website/background-images/event-lounge.png",
      alt: "Screening talent",
    }}
  >
    <Text fontSize="xl">
      Schedule a QJAM event, share the link to social media, and watch as news
      of the event spreads like wildfire.
    </Text>
    <Text fontSize="xl">
      Fans join the Q for the chance to live video chat with you and connect
      with each other in the Event Lounge before the event starts.
    </Text>
  </RightImageContainer>
);

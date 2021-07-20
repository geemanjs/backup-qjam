import { RightImageContainer } from "../Layouts/RightImageContainer";
import { Text } from "@chakra-ui/react";
import * as React from "react";

export const PostEventBuzz = () => {
  return (
    <RightImageContainer
      bg="blue.900"
      color="white"
      heading="Post-event buzz"
      image={{
        size: "80%",
        src: "https://res.cloudinary.com/qjam/image/upload/v1625657566/website/background-images/tweets.png",
        alt: "Post event user tweets",
      }}
    >
      <Text fontSize="xl">
        After the event has ended, watch as the wave of excitement about their
        QJAM experience floods social media.
      </Text>
    </RightImageContainer>
  );
};

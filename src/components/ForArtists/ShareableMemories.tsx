import { LeftImageContainer } from "../Layouts/LeftImageContainer";
import { Text } from "@chakra-ui/react";
import * as React from "react";

export const ShareableMemories = () => {
  return (
    <LeftImageContainer
      bg="white"
      color="neutral.900"
      heading={"Shareable memories"}
      image={{
        src: "https://res.cloudinary.com/qjam/image/upload/v1625667443/website/background-images/insta.png",
        alt: "QJAM shared on instagram",
      }}
    >
      <Text fontSize="xl">
        Fans can download and share their video chat and signing to social media
        straight after the event.
      </Text>
    </LeftImageContainer>
  );
};

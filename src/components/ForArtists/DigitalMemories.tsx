import { RightImageContainer } from "../Layouts/RightImageContainer";
import { Text } from "@chakra-ui/react";
import * as React from "react";

export const DigitalMemories = () => {
  return (
    <RightImageContainer
      bg="neutral.900"
      color="white"
      heading="Digital Signings"
      image={{
        size: "70%",
        src: "https://res.cloudinary.com/qjam/image/upload/v1625655626/website/background-images/signing.jpg",
        alt: "Signing",
      }}
    >
      <Text fontSize="xl">
        Send your fans a personalised signing during your 1-to-1 live video chat
        that they can treasure forever.
      </Text>
    </RightImageContainer>
  );
};

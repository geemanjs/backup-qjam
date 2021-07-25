import { LeftImageContainer } from "../Layouts/LeftImageContainer";
import { Text } from "@chakra-ui/react";
import * as React from "react";

export const GoLive = () => (
  <LeftImageContainer
    heading="Go Live"
    bg="pink.800"
    color="white"
    image={{
      alt: "Signing",
      src: `${process.env.NEXT_PUBLIC_CLOUDINARY_IMAGE_API}/v1625655622/website/background-images/livestream.png`,
    }}
  >
    <Text fontSize={[ "lg", "lg", "xl" ]}>
      Start the Q to bring on fans. They will be dying to ask you their burning
      questions, explain how your lyrics changed their life, or just to tell you
      they love you.
    </Text>
  </LeftImageContainer>
);

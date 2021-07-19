import { Box, Heading, Text } from "@chakra-ui/react";
import { Container } from "../Container";
import Image from "next/image";
import qjamWhiteLogo from "../../../public/img/brand/qjam-white.png";
import appleDownload from "../../../public/img/apple/download.png";
import androidDownload from "../../../public/img/google/download.png";
import * as React from "react";

export const HomePageHeader = () => {
  return (
    <>
      <Box position="relative" height="120px">
        <Box position="absolute" zIndex={-1} left={0} right={0}>
          <video
            autoPlay={true}
            muted={true}
            loop={true}
            style={{
              marginBottom: "-40px",
              marginTop: "-40px",
              marginLeft: "auto",
              marginRight: "auto",
            }}
          >
            <source src="https://res.cloudinary.com/qjam/video/upload/v1625831906/website/background-images/headerTop.mov" />
          </video>
        </Box>
        <Container py={8} px={[4, 4, 0]}>
          <Image alt="QJAM logo" src={qjamWhiteLogo} />
        </Container>
      </Box>
      <Box bg="neutral.900">
        <Container py={8} color="white" textAlign="center">
          <Heading fontSize="5xl" mb={3}>
            Meet your favourite artists.
          </Heading>
          <Text fontSize="lg">
            Live video chat with your hero, receive a personalised digital
            signing and connect with thousands of other fans.
          </Text>
        </Container>
      </Box>
      <Box position="relative" height="120px">
        <Box
          position="absolute"
          zIndex={-1}
          left={0}
          right={0}
          height="140px"
          overflow="hidden"
        >
          <video
            autoPlay={true}
            muted={true}
            loop={true}
            style={{
              marginBottom: "-40px",
              marginTop: "-70px",
              marginLeft: "auto",
              marginRight: "auto",
            }}
          >
            <source src="https://res.cloudinary.com/qjam/video/upload/v1625829299/website/background-images/bottomHeader.mov" />
          </video>
        </Box>
        <Container
          py={10}
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          <Box mr={4}>
            <a href={process.env.NEXT_PUBLIC_ITUNES_APP_LINK}>
              <Image alt="Download on app store" src={appleDownload} />
            </a>
          </Box>
          <Box>
            <a href={process.env.NEXT_PUBLIC_ANDROID_APP_LINK}>
              <Image alt="Download on play store" src={androidDownload} />
            </a>
          </Box>
        </Container>
      </Box>
    </>
  );
};

import { Box, Heading, SimpleGrid, Text } from "@chakra-ui/react";
import { Container } from "../Container";
import Image from "next/image";
import qjamWhiteLogo from "../../../public/img/brand/qjam-white.png";
import appleDownload from "../../../public/img/apple/download.png";
import androidDownload from "../../../public/img/google/download.png";
import * as React from "react";


const topVideos = [
  `${process.env.NEXT_PUBLIC_CLOUDINARY_VIDEO_API}/v1626798966/website/header/tini.mp4`,
  `${process.env.NEXT_PUBLIC_CLOUDINARY_VIDEO_API}/v1626799031/website/header/tini-fan.mp4`,
  `${process.env.NEXT_PUBLIC_CLOUDINARY_VIDEO_API}/v1626799041/website/header/cher.mp4`,
  `${process.env.NEXT_PUBLIC_CLOUDINARY_VIDEO_API}/v1626799057/website/header/liam.mp4`,
  `${process.env.NEXT_PUBLIC_CLOUDINARY_VIDEO_API}/v1626799042/website/header/cher-fan.mp4`,
  `${process.env.NEXT_PUBLIC_CLOUDINARY_VIDEO_API}/v1626799057/website/header/lg.mp4`,
  `${process.env.NEXT_PUBLIC_CLOUDINARY_VIDEO_API}/v1626799064/website/header/liam-fan.mp4`,
];

const bottomVideos = [
  `${process.env.NEXT_PUBLIC_CLOUDINARY_VIDEO_API}/v1626809337/website/header/cher-fan-2.mp4`,
  `${process.env.NEXT_PUBLIC_CLOUDINARY_VIDEO_API}/v1626809353/website/header/skin.mp4`,
  `${process.env.NEXT_PUBLIC_CLOUDINARY_VIDEO_API}/v1626809356/website/header/lennon-fan.mp4`,
  `${process.env.NEXT_PUBLIC_CLOUDINARY_VIDEO_API}/v1626809362/website/header/yungblud-fan.mp4`,
  `${process.env.NEXT_PUBLIC_CLOUDINARY_VIDEO_API}/v1626809365/website/header/yungblud.mp4`,
  `${process.env.NEXT_PUBLIC_CLOUDINARY_VIDEO_API}/v1626809367/website/header/lennon.mp4`,
  `${process.env.NEXT_PUBLIC_CLOUDINARY_VIDEO_API}/v1626809373/website/header/tini-fan-2.mp4`,
];

export const HomePageHeader = () => {
  return (
    <>
      <Box position="relative">
        <SimpleGrid columns={topVideos.length} position="relative">
          {topVideos.map((video) => (
            <video
              key={video}
              autoPlay={true}
              playsInline={true}
              muted={true}
              loop={true}
              style={{
                marginLeft: "auto",
                marginRight: "auto",
              }}
            >
              <source src={video} type="video/mp4" />
            </video>
          ))}
          <Box
            position="absolute"
            left={0}
            right={0}
            bottom={0}
            top={0}
            opacity={1}
            bgGradient="linear(to-r, blue.300, green.300)"
            mixBlendMode="multiply"
          ></Box>
        </SimpleGrid>
        <Box position="absolute" top={0} left={0} right={0}>
          <Container py={10} px={4}>
            <Image alt="QJAM logo" src={qjamWhiteLogo} />
          </Container>
        </Box>
      </Box>
      <Box bg="neutral.900" boxShadow="lg">
        <Container py={16} color="white" textAlign="center">
          <Heading fontSize="5xl" mb={6}>
            Meet your favourite artists.
          </Heading>
          <Text fontSize="xl" maxWidth="640px" ml="auto" mr="auto">
            Live video chat with your hero, receive a personalised digital
            signing and connect with thousands of other fans.
          </Text>
        </Container>
      </Box>
      <SimpleGrid columns={bottomVideos.length} position="relative">
        {bottomVideos.map((video) => (
          <video
            key={video}
            autoPlay={true}
            muted={true}
            playsInline={true}
            loop={true}
            style={{
              marginLeft: "auto",
              marginRight: "auto",
            }}
          >
            <source src={video} type="video/mp4" />
          </video>
        ))}
        <Box
          position="absolute"
          left={0}
          right={0}
          bottom={0}
          top={0}
          opacity={1}
          bgGradient="linear(to-r, blue.300, green.300)"
          mixBlendMode="multiply"
        ></Box>
        <Box position="absolute" left={0} right={0}>
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
      </SimpleGrid>
    </>
  );
};

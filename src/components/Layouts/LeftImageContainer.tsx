import { Container } from "../Container";
import {
  Box,
  BoxProps,
  Flex,
  Heading,
  Img,
  Stack,
  Text,
  VStack,
} from "@chakra-ui/react";
import * as React from "react";

export const LeftImageContainer = ({
  bg,
  color,
  heading,
  image: { size = "100%", alt, src },
  children,
  ...other
}: React.PropsWithChildren<
  {
    heading: string | any;
    image: { size?: string; src: string; alt: string };
  } & BoxProps
>) => {
  return (
    <Box bg={bg} color={color} py={12} px={3} {...other}>
      <Container>
        <Stack
          direction={{ base: "column", lg: "row" }}
          width="full"
          spacing={12}
          justify="space-between"
        >
          <Flex
            pos="relative"
            w={{ base: "full", lg: "409px" }}
            h={{ base: "auto", lg: "409px" }}
            alignItems="center"
            justifyContent="center"
          >
            <Img
              pos="relative"
              zIndex="1"
              maxHeight={["260px", "260px", "400px"]}
              h={["20%", "20%", size]}
              src={src}
              alt={alt}
            />
          </Flex>
          <Flex flex="1" maxW={{ lg: "580px" }} direction="column">
            <Heading
              fontSize={["4xl", "4xl", "5xl"]}
              lineHeight={["2rem", "2.5rem"]}
              mr={[0, 0, 0, -16]}
              pr={[0, 0, 0, 16]}
              mb={[4,4,4, 0]}
              borderBottomColor="green.500"
              borderBottomWidth="8px"
              borderBottomStyle="solid"
            >
              {heading}
            </Heading>
            <Flex flex="1" alignItems="center">
              <VStack spacing={4}>{children}</VStack>
            </Flex>
          </Flex>
        </Stack>
      </Container>
    </Box>
  );
};

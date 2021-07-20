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

export const RightImageContainer = ({
  bg,
  color,
  heading,
  image: { size = "100%", alt, src },
  children,
  ...other
}: React.PropsWithChildren<
  {
    heading: string;
    image: { size?: string; src: string; alt: string };
  } & BoxProps
>) => {
  return (
    <Box bg={bg} color={color} py={12} px={3}>
      <Container>
        <Stack
          direction={{ base: "column", lg: "row" }}
          width="full"
          spacing={12}
          justify="space-between"
        >
          <Flex flex="1" maxW={{ lg: "580px" }} direction="column">
            <Heading
              fontSize="5xl"
              width="max-content"
              lineHeight={1}
              borderBottomColor="green.500"
              borderBottomWidth="8px"
              borderBottomStyle="solid"
              ml={-16}
              pl={16}
              display="inline-block"
            >
              {heading}
            </Heading>
            <Flex flex="1" alignItems="center">
              <VStack spacing={4} justifyContent="flex-start">
                {children}
              </VStack>
            </Flex>
          </Flex>
          <Flex
            alignItems="center"
            justifyContent="center"
            pos="relative"
            w={{ base: "full", lg: "409px" }}
            h={{ base: "auto", lg: "409px" }}
          >
            <Img
              float="right"
              pos="relative"
              zIndex="1"
              h={{ lg: size }}
              src={src}
              alt={alt}
            />
          </Flex>
        </Stack>
      </Container>
    </Box>
  );
};

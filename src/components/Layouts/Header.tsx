import {
  Box,
  BoxProps,
  Flex,
  Image,
  VisuallyHidden,
  Text,
} from "@chakra-ui/react";
import Link from "next/link";
import * as React from "react";
import { ABlank } from "../ABlank";
import { Container } from "../Container";

export const Header = (props: BoxProps) => (
  <Box color="white" bg="neutral.800" py={6} {...props}>
    <Container>
      <Flex justifyContent="space-between" alignItems="center" color="white">
        <Link href="/" passHref={true}>
          <ABlank>
            <VisuallyHidden>Home</VisuallyHidden>
            <Image
              alt="QJAM logo"
              height="30px"
              srcSet="/img/brand/full-logo@1x.png 1x, /img/brand/full-logo@2x.png 1.5x"
              src="/img/brand/full-logo@1x.png"
            />
          </ABlank>
        </Link>
        <Flex alignItems="center"></Flex>
      </Flex>
    </Container>
  </Box>
);

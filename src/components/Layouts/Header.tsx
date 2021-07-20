import {
  Box,
  BoxProps,
  Flex,
  Image,
  VisuallyHidden,
  Text,
  Link as ChakraLink,
  HStack,
  LinkProps,
} from "@chakra-ui/react";
import Link from "next/link";
import * as React from "react";
import { ABlank } from "../ABlank";
import { Container } from "../Container";

const NavLink = ({
  children,
  ...other
}: React.PropsWithChildren<LinkProps>) => {
  return (
    <ChakraLink
      color="green.500"
      fontSize="lg"
      fontWeight="bold"
      pt="4px"
      pb="1px"
      outline="0"
      _active={{
        outline: "0",
      }}
      _focus={{
        outline: "0",
      }}
      {...other}
    >
      {children}
    </ChakraLink>
  );
};

export const Header = (props: BoxProps) => (
  <Box
    color="white"
    bg="neutral.800"
    py={6}
    position="relative"
    zIndex="100"
    {...props}
  >
    <Container>
      <Flex justifyContent="space-between" alignItems="center" color="white">
        <Link href="/" passHref={true}>
          <ABlank>
            <VisuallyHidden>Home</VisuallyHidden>
            <Image
              alt="QJAM logo"
              height="40px"
              srcSet="/img/brand/full-logo@1x.png 1x, /img/brand/full-logo@2x.png 1.5x"
              src="/img/brand/full-logo@1x.png"
            />
          </ABlank>
        </Link>
        <Flex alignItems="center">
          <HStack spacing={8}>
            <Link href="/events" passHref={true}>
              <NavLink>Events</NavLink>
            </Link>
            <Link href="/artists" passHref={true}>
              <NavLink>Artists</NavLink>
            </Link>
          </HStack>
        </Flex>
      </Flex>
    </Container>
  </Box>
);

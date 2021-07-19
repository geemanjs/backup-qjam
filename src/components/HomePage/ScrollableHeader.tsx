import { Box, Button, Flex, Heading } from "@chakra-ui/react";
import Link from "next/link";
import React from "react";
import { Container } from "../Container";

export const ScrollableHeader = ({
  children,
  heading,
  seeAllHref,
}: React.PropsWithChildren<{ heading: string; seeAllHref: string }>) => (
  <Box py={6}>
    <Container>
      <Flex justifyContent="space-between">
        <Heading>{heading}</Heading>
        <Link href={seeAllHref} passHref={true}>
          <Button as="a" colorScheme="teal" borderRadius="80px">
            See All
          </Button>
        </Link>
      </Flex>
    </Container>
    <Container overflowX="auto">{children}</Container>
  </Box>
);

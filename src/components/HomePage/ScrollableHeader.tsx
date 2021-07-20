import {
  Box,
  BoxProps,
  Button,
  Flex,
  Grid,
  GridItem,
  Heading,
} from "@chakra-ui/react";
import Link from "next/link";
import React from "react";
import { Container } from "../Container";

export const ScrollableHeader = ({
  children,
  heading,
  seeAllHref,
  ...other
}: React.PropsWithChildren<
  { heading: string; seeAllHref: string } & BoxProps
>) => (
  <Box py={6} {...other} px={3}>
    <Container>
      <Flex justifyContent="space-between" alignItems="center" mb={4}>
        <Heading fontSize="5xl">{heading}</Heading>
        <Link href={seeAllHref} passHref={true}>
          <Button
            as="a"
            variant="solid"
            colorScheme="teal"
            bg="teal.400"
            borderRadius="80px"
            px={8}
          >
            See All
          </Button>
        </Link>
      </Flex>
    </Container>
    <Grid
      gridTemplateColumns="calc((100% - 900px) / 2) fit-content(900px) calc((100% - 900px) / 2)"
      ml="auto"
      overflowX="auto"
      css={{
        "&::-webkit-scrollbar": {
          display: "none",
          width: "0",
        },
        "&::-webkit-scrollbar-track": {
          display: "none",
          width: 0,
        },
        "&::-webkit-scrollbar-thumb": {
          display: "none",
          width: 0,
        },
      }}
      py={2}
    >
      <GridItem colStart={2} colEnd={3} pr={6}>
        {children}
      </GridItem>
    </Grid>
  </Box>
);

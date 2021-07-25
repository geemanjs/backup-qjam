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
  <Box py={[3,3, 6]} {...other} px={3}>
    <Container>
      <Flex justifyContent="space-between" alignItems="center" mb={[2,2,4]}>
        <Heading fontSize={["4xl", "4xl", "5xl"]}>{heading}</Heading>
        <Link href={seeAllHref} passHref={true}>
          <Button
            variant="qjam"
            as="a"
            px={8}
          >
            See All
          </Button>
        </Link>
      </Flex>
    </Container>
    <Grid
      gridTemplateColumns="calc((100% - 1024px) / 2) fit-content(1024px) calc((100% - 1024px) / 2)"
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

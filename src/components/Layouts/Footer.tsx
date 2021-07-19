import {
  Box,
  Stack,
  StackDivider,
  Image,
  SimpleGrid,
  Link,
  HeadingProps,
  Heading,
} from "@chakra-ui/react";

export const Footer = () => {
  return (
    <Box
      as="footer"
      role="contentinfo"
      mx="auto"
      maxW="4xl"
      py="12"
      px={{ base: "4", md: "8" }}
    >
      <Stack spacing="10" divider={<StackDivider />}>
        <Stack
          direction={{ base: "column", lg: "row" }}
          spacing={{ base: "10", lg: "28" }}
        >
          <Box flex="1">
            <Image
              alt="QJAM logo"
              height="40px"
              srcSet="/img/brand/full-logo@1x.png 1x, /img/brand/full-logo@2x.png 1.5x"
              src="/img/brand/full-logo@1x.png"
            />
          </Box>
          <Stack
            direction={{ base: "column", md: "row" }}
            spacing={{ base: "10", md: "20" }}
            justifyContent="flex-end"
          >
            <SimpleGrid
              columns={1}
              spacing={{ base: "10", md: "20", lg: "28" }}
              flex="1"
            >
              <Box minW="130px">
                <FooterHeading mb="4">Legal</FooterHeading>
                <Stack color="white">
                  <Link>Privacy</Link>
                  <Link>Terms of use</Link>
                  <Link>Contact</Link>
                </Stack>
              </Box>
            </SimpleGrid>
          </Stack>
        </Stack>
      </Stack>
    </Box>
  );
};

export const FooterHeading = (props: HeadingProps) => (
  <Heading
    as="h4"
    color={"gray.400"}
    fontSize="sm"
    fontWeight="semibold"
    textTransform="uppercase"
    letterSpacing="wider"
    {...props}
  />
);

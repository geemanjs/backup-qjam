import {
  Box,
  Stack,
  StackDivider,
  Image,
  SimpleGrid,
  Link,
  HeadingProps,
  Heading,
  Text,
  HStack,
  Flex,
} from "@chakra-ui/react";
import NextImage from "next/image";
import facebook from "../../../public/img/icons/facebookLogo@3x.png";
import instagram from "../../../public/img/icons/instagramLogo@3x.png";
import twitter from "../../../public/img/icons/twitter@3x.png";

export const Footer = () => {
  return (
    <>
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
            <Stack
              direction={{ base: "column", md: "row" }}
              spacing={{ base: "10", md: "20" }}
              justifyContent="flex-end"
            >
              <SimpleGrid
                columns={3}
                // columns={4} - when you add the Company / about us section
                spacing={{ base: "10", md: "20", lg: "28" }}
                flex="1"
              >
                {/*<Box minW="100px">*/}
                {/*  <FooterHeading mb="4">Company</FooterHeading>*/}
                {/*  <Stack color="white">*/}
                {/*    <Link>About us</Link>*/}
                {/*  </Stack>*/}
                {/*</Box>*/}
                <Box minW="100px">
                  <FooterHeading mb="4">Legal</FooterHeading>
                  <Stack color="white">
                    <Link href="/privacy">Privacy</Link>
                    <Link href="/termsOfUse">Terms of use</Link>
                  </Stack>
                </Box>
                <Box minW="100px">
                  <FooterHeading mb="4">Community</FooterHeading>
                  <Stack color="white">
                    <Link href="/for-artists">For artists</Link>
                    <Link>Contact</Link>
                  </Stack>
                </Box>
                <Box minW="100px">
                  <FooterHeading mb="4">Follow us</FooterHeading>
                  <HStack color="white" spacing={6}>
                    <Box
                      as="a"
                      href={process.env.NEXT_PUBLIC_SOCIAL_FACEBOOK_LINK}
                    >
                      <NextImage src={facebook} />
                    </Box>
                    <Box
                      as="a"
                      href={process.env.NEXT_PUBLIC_SOCIAL_TWITTER_LINK}
                    >
                      <NextImage src={twitter} />
                    </Box>
                    <Box
                      as="a"
                      href={process.env.NEXT_PUBLIC_SOCIAL_INSTAGRAM_LINK}
                    >
                      <NextImage src={instagram} />
                    </Box>
                  </HStack>
                  <Text mt={2} color="white" fontWeight="bold">
                    &copy; QJAM 2021
                  </Text>
                </Box>
              </SimpleGrid>
            </Stack>
          </Stack>
        </Stack>
      </Box>
      <Box
        py={16}
        backgroundImage="radial-gradient(#26707B 6%, transparent 12%)"
        backgroundPosition="0 0, 20px 20px"
        backgroundSize="30px 30px "
      />
    </>
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

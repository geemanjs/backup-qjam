import { GetStaticProps } from "next";
import { Artist, ArtistSource } from "../../types";
import { ArtistService } from "../../services/ArtistService";
import { useCallback, useState } from "react";
import { StandardLayout } from "../../components/Layouts/Standard";
import {
  Box,
  Container,
  Flex,
  Link as ChakraLink,
  SimpleGrid,
  Text,
} from "@chakra-ui/react";
import Link from "next/link";
import algoliasearch from "algoliasearch/lite";
// import {StateDisplay} from '../components/StateDisplay';
import {
  Configure,
  Hits,
  InstantSearch,
  SearchBox,
} from "react-instantsearch-dom";

const searchClient = algoliasearch(
  "KD4O91PWKF",
  "61f7d594374dda5c16aaabc1fe13feff"
);

import { NextSeo } from "next-seo";
import { ArtistCard } from "../../components/Artists/ArtistCard";
import styled from "@emotion/styled";

function seoConfig() {
  return {
    title: `Artists on QJAM`,
    description: `Get the QJAM app to live video chat with your favourite artists and receive digital signings.`,
    openGraph: {
      title: `Artists on QJAM`,
      description: `Get the QJAM app to live video chat with your favourite artists and receive digital signings.`,
      images: [
        {
          url: `${process.env.NEXT_PUBLIC_CLOUDINARY_IMAGE_API}/v1575666417/website/SEO/Screenshot_2019-12-06_at_20.55.04.png`,
          width: 2504,
          height: 1408,
          alt: `QJAM – Meet your favourite artists.`,
        },
      ],
      site_name: "QJAM",
    },
    twitter: {
      cardType: "summary_large_image",
    },
  };
}

export const Artists = ({ artists }: { artists: Artist[] }) => {
  const [artistSource, setArtistSource] = useState<ArtistSource>("FEATURED");

  const onSearchChange = useCallback(
    (e: React.SyntheticEvent<HTMLInputElement>) => {
      if (e.currentTarget.value) {
        setArtistSource("ALGOLIA");
      } else {
        setArtistSource("FEATURED");
      }
    },
    [setArtistSource]
  );

  return (
    <StandardLayout>
      <NextSeo {...seoConfig()} />
      <Container mt={4} maxW="container.lg">
        <SearchStyles>
          <InstantSearch searchClient={searchClient} indexName="users">
            <SearchBox
              onChange={onSearchChange}
              autoFocus={true}
              translations={{
                submitTitle: "Submit your search query.",
                resetTitle: "Clear your search query.",
                placeholder: "Search for an artist",
              }}
            />
            <Configure
              filters="isVerified:true OR isUnclaimed:true"
              hitsPerPage={50} /*Add pagination in the future*/
            />
            <Flex color="gray.600" pt={2} pb={2} fontFamily="futura-pt">
              <Text fontWeight={500}>Showing:&nbsp;&nbsp;</Text>
              <ChakraLink
                onClick={() => setArtistSource("FEATURED")}
                color={artistSource === "FEATURED" ? "teal.400" : "gray.600"}
                fontWeight={artistSource === "FEATURED" ? "bold" : 500}
              >
                Featured
              </ChakraLink>
              &nbsp;|&nbsp;
              <ChakraLink
                onClick={() => setArtistSource("ALGOLIA")}
                color={artistSource === "ALGOLIA" ? "teal.400" : "gray.600"}
                fontWeight={artistSource === "ALGOLIA" ? "bold" : 500}
              >
                All artists
              </ChakraLink>
            </Flex>
            <Box
              pt={3}
              pb={4}
              style={{ display: artistSource === "ALGOLIA" ? "block" : "none" }}
            >
              <Hits hitComponent={ArtistHit} />
            </Box>
          </InstantSearch>

          <Box
            py={8}
            style={{ display: artistSource === "FEATURED" ? "block" : "none" }}
          >
            {/*<StateDisplay {...this.state} />*/}
            <SimpleGrid columns={3} spacing={6}>
              {artists.map((artist) => (
                <Link
                  key={artist.id}
                  href={`/artists/${artist.slug}`}
                  passHref={true}
                >
                  <ChakraLink
                    color="white"
                    textDecoration="none"
                    outline="none"
                  >
                    <ArtistCard artist={artist} source={artistSource} />
                  </ChakraLink>
                </Link>
              ))}
            </SimpleGrid>
          </Box>
        </SearchStyles>
      </Container>
    </StandardLayout>
  );
};

const ArtistHit = ({ hit }: { hit: Artist }) => {
  const artist = ArtistService.parseArtist(hit);
  return (
    <Link
      key={artist.id}
      as={`/artists/${artist.slug}`}
      href={`/artist?id=${artist.slug}`}
      passHref={true}
    >
      <ChakraLink>
        <ArtistCard artist={artist} source="ALGOLIA" />
      </ChakraLink>
    </Link>
  );
};

export const getStaticProps: GetStaticProps<{ artists: Artist[] }, {}> =
  async () => {
    const artists = await ArtistService.featured();
    return {
      props: { artists },
    };
  };

//  language=SCSS
const SearchStyles = styled("div")`
  & .ais-SearchBox-input {
    width: 100%;
    padding: 10px;
    -webkit-appearance: none;
    font-size: 1.4em;
    line-height: 1.6em;
    font-family: futura-pt, sans-serif;
    font-weight: 500;
    border: 0;

    padding-left: 2px;
    text-align: left;

    background-color: transparent;
    color: #2a353a;
    outline: 0;
  }

  & .ais-SearchBox-input::placeholder {
    color: #2a353a;
  }

  & .ais-SearchBox-form {
    display: flex;
    border-bottom: 4px solid #717171;
  }

  & .ais-SearchBox-submit {
    padding: 0 36px;
    outline: 0;
    background-color: transparent;
    border-radius: 4px;
    margin-left: 10px;
    color: #fff;
    font-weight: bold;
    border: 0;

    &:focus {
      box-shadow: inset 0 0 0 3px rgba(0, 0, 0, 0.25);
    }

    & .ais-SearchBox-submitIcon {
      fill: #49b8ab;
      height: 24px;
      width: 24px;
    }
  }

  & .ais-SearchBox-reset {
    display: none;
    visibility: hidden;
  }

  & .ais-Hits-list {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 317px));
    grid-gap: 20px;
    list-style: none;
  }

  & .ais-Hits-item {
    max-width: 317px;
  }
`;

export default Artists;

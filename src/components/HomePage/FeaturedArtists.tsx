import { ScrollableHeader } from "./ScrollableHeader";
import { Artist } from "../../types";
import {Grid, SimpleGrid} from "@chakra-ui/react";
import { ArtistCard } from "../Artists/ArtistCard";
import {ABlank} from "../ABlank";
import Link from 'next/link'

export const FeaturedArtists = ({ artists }: { artists: Artist[] }) => {
  return (
    <ScrollableHeader heading="Featured Artists" seeAllHref="/artists" mt={8}>
      <SimpleGrid
        gap={6}
        gridAutoFlow="column"
        gridAutoColumns="minmax(314px, 1fr)"
        gridTemplateColumns="repeat(auto-fill,minmax(314px, 1fr))"
        gridTemplateRows="min-content min-content"
      >
        {artists.map((artist) => (
          <Link href={`/artists/${artist.slug}`} key={artist.id} passHref={true}>
            <ABlank>
          <ArtistCard source="FEATURED" artist={artist} />
            </ABlank>
          </Link>
        ))}
      </SimpleGrid>
    </ScrollableHeader>
  );
};

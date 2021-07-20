import { ScrollableHeader } from "./ScrollableHeader";
import { Artist } from "../../types";
import { Grid, SimpleGrid } from "@chakra-ui/react";
import { ArtistCard } from "../Artists/ArtistCard";

export const FeaturedArtists = ({ artists }: { artists: Artist[] }) => {
  return (
    <ScrollableHeader heading="Featured Artists" seeAllHref="/artists" mt={8}>
      <SimpleGrid
        gap={4}
        gridAutoFlow="column"
        gridAutoColumns="minmax(314px, 1fr)"
        gridTemplateColumns="repeat(auto-fill,minmax(314px, 1fr))"
        gridTemplateRows="min-content min-content"
      >
        {artists.map((artist) => (
          <ArtistCard source="FEATURED" artist={artist} />
        ))}
      </SimpleGrid>
    </ScrollableHeader>
  );
};

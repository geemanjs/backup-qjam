import { ScrollableHeader } from "./ScrollableHeader";
import { Artist } from "../../types";
import { Grid, SimpleGrid } from "@chakra-ui/react";
import { ArtistCard } from "../Artists/ArtistCard";

export const FeaturedArtists = ({ artists }: { artists: Artist[] }) => {
  console.log("artsits", artists);
  return (
    <ScrollableHeader heading="Featured Artists" seeAllHref="/artists">
      <SimpleGrid minChildWidth={314} gap={4} autoFlow="column" row={2}>
        {artists.map((artist) => (
          <ArtistCard source="FEATURED" artist={artist} />
        ))}
      </SimpleGrid>
    </ScrollableHeader>
  );
};

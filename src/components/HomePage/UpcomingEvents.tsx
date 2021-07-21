import { ScrollableHeader } from "./ScrollableHeader";
import { Event } from "../../types";
import { SimpleGrid } from "@chakra-ui/react";
import React from "react";
import { EventUpcomingCard } from "../Events/cards/EventUpcomingCard";
import { EventArchivedCard } from "../Events/cards/EventArchivedCard";

export const Events = ({
  type,
  heading,
  events,
}: {
  type: "UPCOMING" | "ARCHIVED";
  heading: string;
  events: Event[];
}) => {
  if(events.length === 0) {
    return null;
  }
  return (
    <ScrollableHeader heading={heading} seeAllHref="/events">
      <SimpleGrid
        gap={6}
        gridAutoFlow="column"
        gridAutoColumns="minmax(314px, 1fr)"
        gridTemplateColumns="repeat(auto-fill,minmax(314px, 1fr))"
      >
        {type === "UPCOMING" &&
          events.map((event) => (
            <EventUpcomingCard key={event.id} event={event} />
          ))}
        {type === "ARCHIVED" &&
          events.map((event) => (
            <EventArchivedCard key={event.id} event={event} />
          ))}
      </SimpleGrid>
    </ScrollableHeader>
  );
};

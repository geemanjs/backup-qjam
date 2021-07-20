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
  return (
    <ScrollableHeader heading={heading} seeAllHref="/events">
      <SimpleGrid
        gap={4}
        gridAutoFlow="column"
        gridAutoColumns="minmax(314px, 1fr)"
        gridTemplateColumns="repeat(auto-fill,minmax(314px, 1fr))"
      >
        {type === "UPCOMING" &&
          events.map((upcomingEvent) => (
            <EventUpcomingCard event={upcomingEvent} />
          ))}
        {type === "ARCHIVED" &&
          events.map((upcomingEvent) => (
            <EventArchivedCard event={upcomingEvent} />
          ))}
      </SimpleGrid>
    </ScrollableHeader>
  );
};

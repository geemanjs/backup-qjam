import { ScrollableHeader } from "./ScrollableHeader";
import { Event } from "../../types";
import { SimpleGrid } from "@chakra-ui/react";
import React from "react";
import { EventUpcomingCard } from "../Events/cards/EventUpcomingCard";

export const Events = ({
  heading,
  events,
}: {
  heading: string;
  events: Event[];
}) => {
  return (
    <ScrollableHeader heading={heading} seeAllHref="/events">
      <SimpleGrid minChildWidth="314px" gap={4} autoFlow="column">
        {events.map((upcomingEvent) => (
          <EventUpcomingCard event={upcomingEvent} />
        ))}
      </SimpleGrid>
    </ScrollableHeader>
  );
};

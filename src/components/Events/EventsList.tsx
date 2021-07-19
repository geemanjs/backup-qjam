import { Box, Heading, SimpleGrid } from "@chakra-ui/react";
import * as React from "react";
import { Event } from "../../types";
import { EventLive } from "./cards/EventLiveCard";
import { EventUpcomingCard } from "./cards/EventUpcomingCard";
import { EventArchived } from "./cards/EventArchivedCard";
import { refreshAt } from "../../services/Utils/refreshAt";

const EventHeading = ({ children }) => {
  return (
    <Heading
      textAlign="center"
      pb={4}
      fontSize="4xl"
      pt={4}
      fontWeight="bold"
      color="neutral.900"
    >
      {children}
    </Heading>
  );
};

export class EventsList extends React.Component<{
  live: Event[];
  upcoming: Event[];
  archived: Event[];
}> {
  timer?: NodeJS.Timeout;

  componentDidMount() {
    const { live, upcoming } = this.props;
    if (!live && upcoming && upcoming.length > 0) {
      const firstEvent = upcoming[0];
      this.timer = refreshAt((firstEvent as any).startAt);
    }
  }

  componentWillUnmount() {
    if (this.timer) {
      clearTimeout(this.timer);
    }
  }

  render() {
    const { live, upcoming, archived } = this.props;
    return (
      <React.Fragment>
        {live && live.length > 0 && (
          <Box mb={4}>
            <EventHeading>LIVE</EventHeading>
            <SimpleGrid
              columns={3}
              spacing={6}
              gridTemplateColumns="repeat(auto-fit, minmax(250px, 317px))"
              width="full"
            >
              {live.map((event) => (
                <EventLive key={event.id} event={event} />
              ))}
            </SimpleGrid>
          </Box>
        )}
        {upcoming && upcoming.length > 0 && (
          <Box mb={4}>
            <EventHeading>UPCOMING EVENTS</EventHeading>
            <SimpleGrid
              columns={3}
              spacing={6}
              gridTemplateColumns="repeat(auto-fit, minmax(250px, 317px))"
              width="full"
            >
              {upcoming.map((event) => (
                <EventUpcomingCard key={event.id} event={event} />
              ))}
            </SimpleGrid>
          </Box>
        )}
        {archived && archived.length > 0 && (
          <Box>
            <EventHeading>PREVIOUS EVENTS</EventHeading>
            <SimpleGrid
              columns={3}
              spacing={6}
              gridTemplateColumns="repeat(auto-fit, minmax(250px, 317px))"
              width="full"
            >
              {archived.map((event) => (
                <EventArchived key={event.id} event={event} />
              ))}
            </SimpleGrid>
          </Box>
        )}
      </React.Fragment>
    );
  }
}

import {Box, Heading, HeadingProps} from "@chakra-ui/react";
import * as React from "react";
import { Event } from "../../types";
import { EventLive } from "./cards/EventLiveCard";
import { EventUpcomingCard } from "./cards/EventUpcomingCard";
import { EventArchivedCard } from "./cards/EventArchivedCard";
import { refreshAt } from "../../services/Utils/refreshAt";
import { StandardGrid } from "../StandardGrid";

const EventHeading = ({ children, ...other }: React.PropsWithChildren<HeadingProps>) => {
  return (
    <Heading
      textAlign="center"
      pb={4}
      fontSize="4xl"
      pt={4}
      fontWeight="bold"
      color="neutral.900"
      {...other}
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
          <Box mb={4} px={4}>
            <EventHeading>LIVE</EventHeading>
            <StandardGrid>
              {live.map((event) => (
                <EventLive key={event.id} event={event} />
              ))}
            </StandardGrid>
          </Box>
        )}
        {upcoming && upcoming.length > 0 && (
          <Box mb={4} px={4}>
            <EventHeading>UPCOMING EVENTS</EventHeading>
            <StandardGrid>
              {upcoming.map((event) => (
                <EventUpcomingCard key={event.id} event={event} />
              ))}
            </StandardGrid>
          </Box>
        )}
        {archived && archived.length > 0 && (
          <Box px={4}>
            <EventHeading>PREVIOUS EVENTS</EventHeading>
            <StandardGrid>
              {archived.map((event) => (
                <EventArchivedCard key={event.id} event={event} />
              ))}
            </StandardGrid>
          </Box>
        )}
      </React.Fragment>
    );
  }
}
import { Box, Heading, SimpleGrid } from '@chakra-ui/react';
import * as React from 'react';
import {Event} from '../../types';
import { EventLive } from './cards/EventLiveCard';
import { EventUpcoming } from './cards/EventUpcomingCard';
import { EventArchived } from './cards/EventArchivedCard';
import {refreshAt} from "../../services/Utils/refreshAt";

export class EventsList extends React.Component<{ live: Event[]; upcoming: Event[]; archived: Event[] }> {
  timer?: NodeJS.Timeout;

  componentDidMount() {
    const { live, upcoming } = this.props;
    if (!live && upcoming && upcoming.length > 0) {
      const firstEvent = upcoming[0];
      this.timer = refreshAt((firstEvent as any).startAt);
    }
  }

  componentWillUnmount() {
    if(this.timer) {
      clearTimeout(this.timer);
    }
  }

  render() {
    const { live, upcoming, archived } = this.props;
    return (
      <React.Fragment>
        {live && live.length > 0 && (
          <Box mb={4}>
            <Heading textAlign="center" pb={4} fontSize={5} pt={4} fontWeight="bold">
              LIVE
            </Heading>
            <SimpleGrid columns={3} spacing={6}>
              {live.map((event) => (
                <EventLive key={event.id} event={event} />
              ))}
            </SimpleGrid>
          </Box>
        )}
        {upcoming && upcoming.length > 0 && (
          <Box mb={4}>
            <Heading textAlign="center" pb={4} fontSize={5} pt={4} fontWeight="bold">
              UPCOMING EVENTS
            </Heading>
            <SimpleGrid columns={3} spacing={6}>
              {upcoming.map((event) => (
                <EventUpcoming key={event.id} event={event} />
              ))}
            </SimpleGrid>
          </Box>
        )}
        {archived && archived.length > 0 && (
          <Box>
            <Heading textAlign="center" pb={4} fontSize={5} pt={4} fontWeight="bold">
              PREVIOUS EVENTS
            </Heading>
            <SimpleGrid columns={3} spacing={6}>
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

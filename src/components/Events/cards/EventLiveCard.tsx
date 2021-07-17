import * as React from 'react';
import {
  Avatar,
  Badge,
  Box,
  Heading,
} from '@chakra-ui/react';
import { Event } from '../../../types';
import styled from '@emotion/styled'
import { EventImageBottom } from './EventImageBottom';
import Link from 'next/link';
import { ForceNoDecoration } from '../../ForceNoDecoration';
import {ABlank, ABlankLineHover} from "../../ABlank";
import {ListItem, ListItemLeft, ListItemTitle} from "../../ListItem";
import {truncateDescription} from "../../../services/Utils/truncateDescription";

interface IEventProps {
  event: Event;
}

//  Rounded badge corners
//  language=SCSS
const BadgeHolder = styled.div`
  & {
    position: absolute;
    bottom: 0;
    padding-bottom: 10px;
  }

  ${Badge} {
    border-radius: 0;
  }

  ${Badge}:first-of-type {
    border-top-left-radius: 4px;
    border-bottom-left-radius: 4px;
  }

  ${Badge}:last-of-type {
    border-top-right-radius: 4px;
    border-bottom-right-radius: 4px;
  }
`;

export class EventLive extends React.Component<IEventProps> {
  render() {
    const { event, ...other } = this.props;
    return (
      <Box {...other}>
        <Link href={`/events/${event.id}`} >
          <ABlank>
            <Box
              width={1}
              p={2}
              style={{ height: '200px', position: 'relative' }}
              height="320px"
              boxShadow="none"
              borderRadius="0px"
              backgroundImage={`url('${event.eventPic.loc}')`}
              backgroundRepeat="no-repeat"
              backgroundPosition="center"
              backgroundSize="cover"
            >
              <EventImageBottom style={{ paddingBottom: 80 }}>
                <BadgeHolder>
                  <Badge bg="red">LIVE</Badge>
                </BadgeHolder>
              </EventImageBottom>
            </Box>
          </ABlank>
        </Link>
        <Box p={2}>
          <Link
            passHref={true}
            href={`/artists/${event.host ? event.host.slug : undefined}`}
          >
            <ABlankLineHover>
              <ListItem>
                <ListItemLeft>
                  <Avatar size="sm" src={event.artistProfilePicLoc} />
                </ListItemLeft>
                <ListItemTitle fontWeight="bold">{event.hostName}</ListItemTitle>
              </ListItem>
            </ABlankLineHover>
          </Link>
          <Link passHref={true} href={`/events/${event.id}`}>
            <ABlankLineHover>
              <Box px={2} pt={2} pb={1}>
                <Heading as={'h3'} fontSize="lg" fontWeight={500}>
                  {event.title}
                </Heading>
                <ForceNoDecoration whiteSpace="pre-wrap" fontSize="md" pt={1}>
                  {truncateDescription(event.description)}
                </ForceNoDecoration>
              </Box>
            </ABlankLineHover>
          </Link>
        </Box>
      </Box>
    );
  }
}

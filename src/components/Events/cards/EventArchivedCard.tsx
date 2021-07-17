import * as React from 'react';
import {
  Avatar,
  Box,
  Flex,
  Heading,
} from '@chakra-ui/react';
import { Event } from '../../..//types';
import { EventImageBottom } from './EventImageBottom';
import Link from 'next/link';
import { parseTimestamp } from '../../../services/Dates/parseTimestamp';
import numeral from 'numeral';
import {ABlank, ABlankLineHover} from '../../ABlank';
import {ListItem, ListItemLeft, ListItemSubTitle, ListItemTitle} from "../../ListItem";
import {truncateDescription} from "../../../services/Utils/truncateDescription";
import {ForceNoDecoration} from "../../ForceNoDecoration";

interface IEventProps {
  event: Event;
}

export const EventArchived = ({ event, ...other }: IEventProps) => {
  return (
    <Box {...other}>
      <Link passHref={true} href={`/events/${event.id}`}>
        <ABlank>
          <Box
            width={1}
            p={2}
            style={{ height: '200px', position: 'relative' }}
            height="320px"
            boxShadow="none"
            borderRadius="0px"
            backgroundImage={`url('${process.env.NEXT_PUBLIC_CLOUDFRONT_VIDEO_THUMBNAIL_API}/${
              event.videoThumbnail ? event.videoThumbnail : ''
            }')`}
            backgroundRepeat="no-repeat"
            backgroundPosition="center"
            backgroundSize="cover"
          >
            <EventImageBottom style={{ paddingBottom: 0 }}>
              <Flex justifyContent="space-between" alignItems="center" width={1} px={2}>
                <ListItem>
                  <ListItemTitle color="white" fontWeight={500}>
                    {numeral((event.streamDuration ? event.streamDuration : 0) / 1000 / 60).format(
                      '0'
                    )}{' '}
                    minutes
                  </ListItemTitle>
                  <ListItemSubTitle color="white" fontWeight="bold">
                    Streamed on {parseTimestamp(event.startAt).toFormat('EEE d MMM')}
                  </ListItemSubTitle>
                </ListItem>
              </Flex>
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
        <Link
          passHref={true}
          href={`/events/${event.id}`}
        >
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
};

EventArchived.defaultProps = {};

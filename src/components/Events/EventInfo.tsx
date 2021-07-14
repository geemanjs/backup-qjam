import {
  Avatar,
  Box,
  Heading,
  Text,
  Link as ALink
} from '@chakra-ui/react';
import Link from 'next/link';
import * as React from 'react';
import { ListItem, ListItemLeft, ListItemRight, ListItemTitle } from '../ListItem';
import { ShareModal } from '../ShareModal';

export class EventInfo extends React.Component<{ event: any }, { isShareModalOpen: boolean }> {
  state = {
    isShareModalOpen: false
  };
  onToggleShare = () => {
    this.setState((prev) => ({ isShareModalOpen: !prev.isShareModalOpen }));
  };

  render() {
    const { event } = this.props;
    const { isShareModalOpen } = this.state;
    return (
      <Box p={2} px={3}>
        <ListItem pl={0}>
          <ListItemLeft>
            <Avatar src={event.artistProfilePicLoc} />
          </ListItemLeft>
          <ListItemTitle fontWeight="bold" fontSize={4}>
            {event.status === 'ARCHIVED' && (
              <Link
                passHref={true}
                href={`/artist/${event.host.slug}`}
              >
                <ALink target="_blank">{event.hostName}</ALink>
              </Link>
            )}
            {event.status !== 'ARCHIVED' && event.hostName}
          </ListItemTitle>
          {!event.isPrivate && (
            <ListItemRight>
              <div onClick={this.onToggleShare}>
                <Link passHref={true} href="#share">
                  <Text fontSize={1} fontWeight="bold" color="muted">
                    &#x21AA; SHARE
                  </Text>
                </Link>
              </div>
              <ShareModal
                isOpen={isShareModalOpen}
                text={`Check out this event from ${event.hostName} on QJAM`}
                link={`https://qjam.com/events/${event.id}`}
                onClose={this.onToggleShare}
              />
            </ListItemRight>
          )}
        </ListItem>
        <Heading as={'h3'} fontSize="lg" mt={2} fontWeight={500}>
          {event.title}
        </Heading>
        <Text whiteSpace="pre-wrap" fontSize="md" pt={1} pb={2}>
          {event.description}
        </Text>
      </Box>
    );
  }
}

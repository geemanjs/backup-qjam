import * as React from "react";
import { Avatar, Badge, Box, Heading } from "@chakra-ui/react";
import { Event } from "../../../types";
import styled from "@emotion/styled";
import { EventImageBottom } from "./EventImageBottom";
import Link from "next/link";
import { ForceNoDecoration } from "../../ForceNoDecoration";
import { ABlank, ABlankLineHover } from "../../ABlank";
import { ListItem, ListItemLeft, ListItemTitle } from "../../ListItem";
import { truncateDescription } from "../../../services/Utils/truncateDescription";

interface IEventProps {
  event: Event;
}

export class EventLive extends React.Component<IEventProps> {
  render() {
    const { event, ...other } = this.props;
    return (
      <Box
        {...other}
        bg="white"
        borderRadius="lg"
        boxShadow="md"
        overflow="hidden"
      >
        <Link href={`/events/${event.id}`} passHref={true}>
          <ABlank>
            <Box
              width="100%"
              p={2}
              style={{ height: "200px", position: "relative" }}
              height="320px"
              boxShadow="none"
              backgroundImage={`url('${event.eventPic.loc}')`}
              backgroundRepeat="no-repeat"
              backgroundPosition="center"
              backgroundSize="cover"
            >
              <EventImageBottom style={{ paddingBottom: 80 }}>
                <Badge
                  colorScheme="red"
                  variant="solid"
                  size="md"
                  px={2}
                  py="2px"
                  borderRadius="0"
                  _last={{
                    borderTopRightRadius: "4px",
                    borderBottomRightRadius: "4px",
                  }}
                  _first={{
                    borderTopLeftRadius: "4px",
                    borderBottomLeftRadius: "4px",
                  }}
                >
                  LIVE
                </Badge>
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
                <ListItemLeft mr={2}>
                  <Avatar size="md" src={event.artistProfilePicLoc} />
                </ListItemLeft>
                <ListItemTitle fontWeight="bold">
                  {event.hostName}
                </ListItemTitle>
              </ListItem>
            </ABlankLineHover>
          </Link>
          <Link passHref={true} href={`/events/${event.id}`}>
            <ABlankLineHover>
              <Box px={2} pt={2} pb={1}>
                <Heading as={"h3"} fontSize="lg" fontWeight={500}>
                  {event.title}
                </Heading>
                <ForceNoDecoration whiteSpace="pre-wrap" fontSize="sm" pt={1}>
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

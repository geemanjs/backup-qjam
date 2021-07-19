import { Avatar, Box, Heading, Spinner } from "@chakra-ui/react";
import * as React from "react";
import numeral from "numeral";
import { Event } from "../../types";
import { ListItem, ListItemLeft, ListItemTitle } from "../ListItem";

export const buildParticipantHeader = (event: Event) => {
  if (event.status === "ARCHIVED") {
    if (!event.archivedParticipants) {
      return "NO PARTICIPANTS";
    }
    if (event.archivedParticipants.length === 0) {
      return "NO PARTICIPANTS";
    }
    if (event.archivedParticipants.length > 0) {
      return `PARTICIPANTS`;
    }
  }
  if (event.status === "LIVE" || event.status === "SCHEDULED") {
    if (!event.queueCount) {
      return "THE Q IS EMPTY";
    }
    if (event.queueCount === 0) {
      return "THE Q IS EMPTY";
    }
    if (event.queueCount > 0) {
      let format = "";
      if (event.queueCount <= 1000) {
        format = "0a";
      } else {
        format = "0.0a";
      }
      return `THE Q (${numeral(event.queueCount).format(format)})`;
    }
  }
  return "";
};

export const EventParticipants = ({ event }: { event: Event }) => (
  <Box boxShadow="md" px={2} bg="white" borderRadius="md">
    <Heading p={2} fontWeight={600} fontSize="lg" textAlign="center">
      {buildParticipantHeader(event)}
    </Heading>
    {event.archivedParticipants &&
      event.archivedParticipants.map((jammer) => (
        <ListItem key={jammer.id}>
          <ListItemLeft>
            <Avatar size="sm" src={jammer.profileImage} />
          </ListItemLeft>
          <ListItemTitle fontWeight={500}>{jammer.displayName}</ListItemTitle>
        </ListItem>
      ))}
    {event.type !== "BROADCAST" &&
      event.queuers &&
      event.queuers.map((jammer) => (
        <ListItem key={jammer.id}>
          <ListItemLeft>
            <Avatar size="sm" src={jammer.profileImage} />
          </ListItemLeft>
          <ListItemTitle fontWeight={500}>{jammer.name}</ListItemTitle>
        </ListItem>
      ))}
  </Box>
);

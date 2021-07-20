import * as React from "react";
import {
  Avatar,
  Box,
  Divider,
  Flex,
  Heading,
  Link as QJamLink,
  Text,
} from "@chakra-ui/react";

import { Event } from "../../../types";
import { EventImageBottom } from "./EventImageBottom";
import numeral from "numeral";
import Link from "next/link";
import { parseTimestamp } from "../../../services/Dates/parseTimestamp";
import { ForceNoDecoration } from "../../ForceNoDecoration";
import { Icon } from "../../Icon";
import { truncateDescription } from "../../../services/Utils/truncateDescription";
import { ListItem, ListItemLeft, ListItemTitle } from "../../ListItem";
import { ABlank, ABlankLineHover } from "../../ABlank";
import { formatQueueCount } from "../../../services/Utils/formatQueueCount";

interface IEventProps {
  event: Event;
}

export const EventUpcomingCard = ({ event, ...other }: IEventProps) => {
  const queueCount = formatQueueCount(event.queueCount);

  return (
    <Box
      {...other}
      bg="white"
      borderRadius="md"
      boxShadow="md"
      overflow="hidden"
    >
      <Link passHref={true} href={`/events/${event.id}`}>
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
            <EventImageBottom>
              <Text
                color="white"
                fontSize="sm"
                fontWeight={500}
                px={2}
                mb={"-0px"}
              >
                {event.type == "JAM" && "Meet & Greet"}
                {event.type != "JAM" && event.type}
              </Text>
              <Flex
                justifyContent="space-between"
                alignItems="center"
                width="full"
                px={2}
              >
                <Text color="white" fontWeight="bold">
                  <Icon alt="Start Time" name="clock" width="14px" />
                  &nbsp;
                  {parseTimestamp(event.startAt).toFormat(
                    "h:mma ZZZZ, EEE d MMM"
                  )}
                </Text>
                <Flex>{/*<Button size="sm">Notify me</Button>*/}</Flex>
              </Flex>
            </EventImageBottom>
          </Box>
        </ABlank>
      </Link>
      <Flex p={2} flexDirection="column" style={{ flexGrow: 1 }}>
        <Link
          passHref={true}
          href={`/artists/${event.host ? event.host.slug : undefined}`}
        >
          <ABlankLineHover>
            <ListItem>
              <ListItemLeft mr={2}>
                <Avatar size="md" src={event.artistProfilePicLoc} />
              </ListItemLeft>
              <ListItemTitle fontWeight="bold">{event.hostName}</ListItemTitle>
            </ListItem>
          </ABlankLineHover>
        </Link>
        <Link passHref={true} href={`/events/${event.id}`}>
          <ABlankLineHover>
            <Box px={2} pt={2} pb={1}>
              <Heading as={"h3"} fontSize="lg" fontWeight={500}>
                {event.title}
              </Heading>
              <ForceNoDecoration whiteSpace="pre-wrap" fontSize="md" pt={1}>
                {truncateDescription(event.description)}
              </ForceNoDecoration>
            </Box>
          </ABlankLineHover>
        </Link>
      </Flex>
      <Divider />
      <Box px={3} py={2}>
        <Text fontSize="md" fontWeight="normal" pb={3}>
          {queueCount}
        </Text>
        {event.queuers &&
          event.queuers.map((queuer) => (
            <Avatar
              key={queuer.id}
              size="sm"
              mr={2}
              src={
                queuer.profileImage
                  ? queuer.profileImage
                  : "/static/img/icons/no-avatar.png"
              }
            />
          ))}
        <Text fontSize="md" color="muted">
          Download the{" "}
          <QJamLink href={process.env.NEXT_PUBLIC_DYNAMIC_APP_LINK}>
            QJAM app
          </QJamLink>{" "}
          to join The Q and take part in the live video chat
        </Text>
      </Box>
    </Box>
  );
};

EventUpcomingCard.defaultProps = {};

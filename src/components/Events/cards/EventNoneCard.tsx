import { Box, Text, Flex, Heading } from "@chakra-ui/react";
import * as React from "react";
import { Icon } from "../../Icon";

export const NoEvents = () => (
  <Box mt={3} mb={5} textAlign="center">
    <Flex alignItems="center" justifyContent="center" flexDirection="column">
      <Icon alt="Events" mx="auto" name="events" width="100px" height="100px" />
      <br />
      <Heading textAlign="center" fontWeight="bold" mb={3} fontSize="lg">
        No Events
      </Heading>
      <Text textAlign="center" fontSize="md">
        Keep checking back to see when new events have been created.
      </Text>
    </Flex>
  </Box>
);

NoEvents.defaultProps = {};

import { FlexProps, Box } from "@chakra-ui/react";

export const Container = (props: FlexProps) => {
  return <Box maxWidth="900px" width="full" ml="auto" mr="auto" {...props} />;
};

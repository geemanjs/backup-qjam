import {Box, Flex, FlexProps, useColorMode} from "@chakra-ui/react";
import {Footer} from "./Footer";

export const StandardLayout = (props: FlexProps) => {
  const {colorMode} = useColorMode()

  const bgColor = {light: 'neutral.100', dark: 'gray.900'}

  const color = {light: 'black', dark: 'white'}
  return (
    <Flex
      width="100%"
      direction="column"
      bg={bgColor[colorMode]}
      color={color[colorMode]}
      {...props}
    >
      {props.children}
      <Box width="100%" bg="neutral.900">
        <Footer/>
      </Box>
    </Flex>
  )
}
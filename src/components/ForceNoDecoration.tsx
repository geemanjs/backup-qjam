import {Text, TextProps} from '@chakra-ui/react';
export const ForceNoDecoration = ({children, ...other}: React.PropsWithChildren<TextProps>) => {
  return <Text display="inline-block" _hover={{textDecoration: "none"}} {...other}>{children}</Text>
}

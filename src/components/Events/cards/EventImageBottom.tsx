//  language=SCSS
import { PropsWithChildren } from "react";
import { Flex } from "@chakra-ui/react";

export const EventImageBottom = ({ children }: PropsWithChildren<any>) => {
  return (
    <Flex
      position="absolute"
      bottom={0}
      right={0}
      left={0}
      padding={2}
      flexWrap="wrap"
      background="linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.75))"
    >
      {children}
    </Flex>
  );
};

// export const EventImageBottom = styled('div')`
//   & {
//     position: absolute;
//     bottom: 0;
//     left: 0;
//     right: 0;
//     padding: 8px;
//     display: flex;
//     flex-wrap: wrap;
//     background: linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.75));
//   }
//
//   ${Badge} {
//     border-radius: 0;
//   }
//
//   ${Badge}:first-of-type {
//     border-top-left-radius: 4px;
//     border-bottom-left-radius: 4px;
//   }
//
//   ${Badge}:last-of-type {
//     border-top-right-radius: 4px;
//     border-bottom-right-radius: 4px;
//   }
// `;

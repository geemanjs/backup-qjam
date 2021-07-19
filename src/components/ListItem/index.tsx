import * as React from "react";
import { Flex, Text } from "@chakra-ui/react";

export const ListItem = (props: any) => {
  const { children } = props;
  let ListItemLeft, ListItemRight, Title, Subtitle;

  children.map((child: any) => {
    if (!child) return;
    const { type } = child;
    switch (type.displayName) {
      case "ListItemTitle":
        Title = child;
        break;
      case "ListItemSubTitle":
        Subtitle = child;
        break;
      case "ListItemLeft":
        ListItemLeft = child;
        break;
      case "ListItemRight":
        ListItemRight = child;
        break;
    }
  });

  if (ListItemLeft && Title && Subtitle) {
    const { children, ...other } = props;
    const flexExtras = { style: { flexGrow: 1 } };
    return (
      <Flex p={2} flexDirection="row" alignItems="center" {...other}>
        {ListItemLeft}
        <Flex flexDirection="column" ml={2} {...flexExtras}>
          {Title}
          {Subtitle}
        </Flex>
        {ListItemRight && ListItemRight}
      </Flex>
    );
  }

  if (ListItemRight && Title && Subtitle) {
    const { children, ...other } = props;
    const flexExtras = { style: { flexGrow: 1 } };
    return (
      <Flex p={2} flexDirection="row" alignItems="center" {...other}>
        <Flex flexDirection="column" mr={2} {...flexExtras}>
          {Title}
          {Subtitle}
        </Flex>
        {ListItemRight && ListItemRight}
      </Flex>
    );
  }

  if (ListItemLeft && Title) {
    const { children, ...other } = props;
    const flexExtras = { style: { flexGrow: 1 } };
    return (
      <Flex p={2} flexDirection="row" alignItems="center" {...other}>
        {ListItemLeft}
        <Flex ml={2} {...flexExtras}>
          {Title}
        </Flex>
        {ListItemRight && ListItemRight}
      </Flex>
    );
  }
  return <Flex p={2} flexDirection="column" {...props} />;
};

ListItem.defaultProps = {};

export const ListItemTitle = (props: any) => <Text {...props} />;

ListItemTitle.defaultProps = {
  fontSize: "md",
  color: "text",
  m: 0,
};

ListItemTitle.displayName = "ListItemTitle";

export const ListItemSubTitle = (props: any) => <Text {...props} />;

ListItemSubTitle.defaultProps = {
  fontSize: "md",
  color: "muted",
  m: 0,
};

ListItemSubTitle.displayName = "ListItemSubTitle";

export const ListItemRight = (props: any) => <Flex {...props} />;

ListItemRight.defaultProps = {};
ListItemRight.displayName = "ListItemRight";

export const ListItemLeft = (props: any) => <Flex {...props} />;

ListItemLeft.defaultProps = {};
ListItemLeft.displayName = "ListItemLeft";

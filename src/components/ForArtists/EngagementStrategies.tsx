import { Box, Flex, Heading, Image, VStack } from "@chakra-ui/react";
import {
  ListItem,
  ListItemLeft,
  ListItemSubTitle,
  ListItemTitle,
} from "../ListItem";
import * as React from "react";

const strategies = [
  {
    icon: "data:img/png;base64,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",
    title: "Album signing day",
    description:
      "Promote your new album or single with a digital signing event.",
  },
  {
    icon: "data:img/png;base64,iVBORw0KGgoAAAANSUhEUgAAADwAAAA7CAYAAAAn+enKAAAFgElEQVRogeWbfWhVZRzHP3ezdOVk0yK3GTWS1Ur/sJdlZUrOMGaZU6h8GZbrhdoMKwKbFERmBZGB2QvkG8tpUeuFjBAVzFi1oigjJ1qLYk6iVrnKLTeL3/F31tndvfece57nbFf6wGH35ez3/L7P7znP83tebqxk2QoiYiQwBbgcOB8oAQr181wt8g+92oH9en0KfAB0RuHWMMv2RNB8YI4KPcXn/pF6jQUmeT7vUeFvAVuBH2w5mGXJztXqnDj2tEbWT2wqJBBXAE8BrcC7QLkNR00FTwZ2aRO8Eci24VQc4uMsYAfwoZZpZCwM+cB6oAm4xrLAVFylZdYDZ4YxEEawNN+9wG1ALLTr4ZEyFwFfhWnm6QiWguq0CRcNgjA/pKPbDjyaTsUHFXwqsAl4PIKe3QTx/xH1LVAnGUSwiH0dqBoyWf5U6Sgx3O9OP8Ex7ZxuGCTHTagAXvMbKfwEPwMszAg5wZgNrEl1ZyrBi4FlUXg1t+xi3n6wllE5I6IwfzewJNmXyQRL7rvWRumlRQWOQBd5/cT8uVxQOJb62tttFJEIifJFib5I1ONKJWwATjctVcTW11aTO+JEJBubP6ey7L+UWUR775VL7rHAacBGzcp648XFc4fmscbUVVb0iZWo+lWM3ONtDYZcCtwZbyJesEzbHrNVYlCCVkwIVgGjUwm+N2yOmqHkAQ8kE5xj2itLrztjYmmmSb9H59wOXsHzgDPCWhWx0uuuXbLQ5nNoA4nyAteOV/AiE+NPLpjX1+tafg5t0KfNFVwAzDAxnBtNEmELWYEpxiP42ohWKzKFmDsfcAVbWS/KcMq9gqf9DwQ7yVSWDsznDL0/kSP5RVGWLpBnNDK2S+ppYYwvEcFnD5bYsvHFjMrJSet/ikbnO2N72XnFzl9D0eeK4LNMLKRDfU11vxmSsH/1SmfykIwVlRX9vkl1bwDGZHnTLpssvW66E5UguBOHeCS65RP6R/STg60mXubZ2moZQO3M6cY2pNK8dHZ10WwmOFsEdxt7FgES3crLJvUzvGPvPtOCOrOi2pY0JT66OIK/MTXrCP59CPSkZPG0KwdEF4sR/tG2w6bUzakYYGHn18Zihe9FsBVLUWMhusIBt0kbdX1CW8dvkUmW3tnC8/uTuOkOS7tNrbV1/GpqIikS3SNHu0zNyL5y32xpp6m1KCO8aXeTDTOORq/g4ybWDDOgpDR/28q+tnZTM/8A2/AIbjdt1tKkxTnbrHl/lw2LzW4/5U0tN5patdT0+pAKNEwlXTa4L7yCXwUOmViVzsVWlKVnXt7QaMPUz8Ar7huv4G49Y2VEzbrNtBw6bOzlqjffs9Xzrwb+dN/Ez5ZeAoy8leGj6rmXjUQ/tKXR1i5iB/C894PsMZOnet8f00Rktkkp3T09bG1qJhaD0nEFDB8W7ByMPA416xvY03LApHgvy+M740SHS2N6sm6KjRJP7Ddd6CzNyGpFYX5ev+9FZEvbYSeiFoYfL58l2h9Odpp2PPBFVKshg8BR3R8ekI8mW/E4CNx1kooVliYSi8+hlgbZI4vOp8h4AViXzLjfmpYcNdx8cuh02KLRTYqfYMlBbwXeiN5XY95RX3tTGQqyaimn02+2kXpGiKSOsin9t18RQZdpe/W48P06VmcK4tfDQLVfZNMV7CJp2lSbv0EwoE0Pp6/URy8QYRbiPwYmAs9qcx9sjmu6OAHYk27ZYXcejgD36eC+LZ0aNmS7/lqmBgi1xGK61fIlcD1wiU4vo9jFOKajhAidqSljaGydbpc09BbdXL9JL9lxD3vSRXrbj/Rguoytv1jy0/pxfpmOvaiXbASLaEng5ZmXrcRxsmWpFSHPv2zzyOxMBH2nP9yQPkKWTv6y7BsA/wKho0pEUyn/TAAAAABJRU5ErkJggg==",
    title: "Pre-concert meet & greet",
    description:
      "Chat with fans before a concert to get them engaged and excited.",
  },
  {
    icon: "data:img/png;base64,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",
    title: "Merchandise promotion",
    description:
      "Incentivise your fans to purchase your album or merchandise. Distribute unique codes to customers for exclusive access to the Q.",
  },
  {
    icon: "data:img/png;base64,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",
    title: "Heart to heart with fans",
    description: "Increase engagement with your fans by hosting a QJAM event.",
  },
];

export const EngagementStrategies = () => (
  <Flex
    bg="neutral.50"
    color="neutral.900"
    py={24}
    alignItems="center"
    justifyContent="center"
  >
    <Box
      bg="neutral.50"
      borderRadius="xl"
      overflow="hidden"
      width="xl"
      boxShadow="xl"
      pb={8}
    >
      <Box bg="green.500" width="100%" py={2}></Box>
      <VStack>
        <Heading
          bg="white"
          py="8"
          width="full"
          textAlign="center"
          color="black"
        >
          Engagement Strategies
        </Heading>
        {strategies.map((strategy) => (
          <ListItem py={4} px={8}>
            <ListItemLeft mr={2} alignSelf="flex-start" justifyContent="center">
              <Image src={strategy.icon} alt="" height="48px" width="48px" />
            </ListItemLeft>
            <ListItemTitle fontSize="xl" fontWeight="bold">
              {strategy.title}
            </ListItemTitle>
            <ListItemSubTitle color="neutral.800" fontSize="lg">
              {strategy.description}
            </ListItemSubTitle>
          </ListItem>
        ))}
      </VStack>
    </Box>
  </Flex>
);

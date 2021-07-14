import React from 'react';
import { Button, Flex } from '@chakra-ui/react';

export const FacebookShare = ({ to }: {to: string}) => (
  <a href={to} target="_blank" rel="noreferrer">
    <Button bg="#29487d" color="white" width={1}>
      <Flex alignItems={'center'} justifyContent={'space-between'} color="white">
        <svg
          height="22px"
          style={{ marginRight: '8px' }}
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 16 16"
          color="#FFFFFF"
        >
          <path
            fill="#FFFFFF"
            fillRule="evenodd"
            d="M8 14H3.667C2.733 13.9 2 13.167 2 12.233V3.667A1.65 1.65 0 0 1
            3.667 2h8.666A1.65 1.65 0 0 1 14 3.667v8.566c0 .934-.733
            1.667-1.667
            1.767H10v-3.967h1.3l.7-2.066h-2V6.933c0-.466.167-.9.867-.9H12v-1.8c.033
            0-.933-.266-1.533-.266-1.267 0-2.434.7-2.467
            2.133v1.867H6v2.066h2V14z"
          />
        </svg>
        Facebook
      </Flex>
    </Button>
  </a>
);

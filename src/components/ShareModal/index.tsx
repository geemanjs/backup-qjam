import * as React from 'react'
import {Box, Button, Flex, Heading, Spinner, Input, Modal, ModalContent, ModalOverlay, useClipboard} from '@chakra-ui/react';
import {LinksService} from '../../services/LinkService';
import {FacebookShare} from './FacebookShare';
import {TwitterShare} from './TwitterShare';
import {useEffect, useState} from "react";

export const ShareModal = ({isOpen, onClose, link, text}:{ isOpen: boolean; onClose: any; link: string; text: string }) => {
  const [shareLink, setShareLink] = useState<string>(link);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const {onCopy}= useClipboard(shareLink);
  const encodedUri = encodeURIComponent(shareLink);

  useEffect(()=> {
    const doIt = async () => {
      const shareUri = await LinksService.get(link);
      setShareLink(shareUri);
      setIsLoading(false);
    }
    doIt();
  }, [link]);

  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
    >
      <ModalOverlay/>
      <ModalContent>
        <Box p={3}>
          <Heading mb={2} fontWeight={500}>
            Share
          </Heading>

          {isLoading && <Spinner/>}
          {!isLoading && (
            <Flex>
              <Input type="text" value={shareLink} readOnly={true}/>
            </Flex>
          )}
          <Flex justifyContent="space-between" mt={3}>
            <FacebookShare to={`https://www.facebook.com/sharer/sharer.php?u=${encodedUri}`}/>
            <TwitterShare
              to={`https://twitter.com/intent/tweet?text=${encodeURIComponent(
                text
              )}&url=${encodedUri}&hashtags=QJAM`}
            />
            <Button onClick={() => onCopy()}>Copy</Button>
          </Flex>
        </Box>
      </ModalContent>
    </Modal>
  )
}
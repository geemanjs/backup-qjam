import * as React from 'react';
import numeral from 'numeral';
import {Artist, ArtistSource} from '../../types';
import {
  Avatar,
  Box,
  Flex,
} from '@chakra-ui/react';
import { ListItem, ListItemLeft, ListItemTitle, ListItemSubTitle } from '../ListItem';

import { Icon } from '../Icon';
import {formatFollowerCount} from "../../services/Utils/formatFollowerCount";

interface IArtistProps {
  source: ArtistSource;
  artist: Artist;
}

export const ArtistCard = ({ artist, source, ...other }: IArtistProps) => {
  const followers = formatFollowerCount(artist.followerCount);
  return (
    <Flex
      height="195px"
      borderRadius="md"
      boxShadow="md"
      backgroundImage={`url('${artist.coverPhoto.loc}')`}
      backgroundRepeat="no-repeat"
      backgroundPosition="center"
      backgroundSize="cover"
      alignItems="flex-end"
      {...other}
    >
      <Box px={0} width="100%"  backgroundImage="linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.75))"
           borderBottomRightRadius="md"
           borderBottomLeftRadius="md">
        <ListItem>
          {artist.profilePic && (
            <ListItemLeft mr={2}>
              <Avatar alt="" size="md" src={artist.profilePic.loc} />
            </ListItemLeft>
          )}
          <ListItemTitle color="white" fontWeight="bold" fontSize="lg" display="flex" alignItems="center" >
            {artist.displayName}{' '}
            {artist.isVerified && !artist.isUnclaimed && (
              <Box ml={2} mt={-1}>
              <Icon alt="Verified Account" name="verified-tick" width="16px"  />
              </Box>
            )}
          </ListItemTitle>
          {source === 'FEATURED' && <ListItemSubTitle mt={-2} fontSize="md" fontFamily="futura-pt" color="white">{followers}</ListItemSubTitle>}
        </ListItem>
      </Box>
    </Flex>
  );
};
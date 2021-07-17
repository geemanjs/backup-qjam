import {Flex, Text} from '@chakra-ui/react';
import {DateTime} from 'luxon';
import numeral from 'numeral';
import * as React from 'react';
import {Event} from '../../types';
import {parseTimestamp} from '../../services/Dates/parseTimestamp';
import {NextSeo} from 'next-seo';
import VideoPlayer from '../Video/VideoPlayer';

export const VideoEventArchived = ({event, startAt = 0}: {
  startAt?: number;
  event: Event;
}) => {
  const totalViews = viewText(event.totalViews || 0);
  return (
    <React.Fragment>
      <NextSeo
        {...seoConfig(event)}
      />
      <VideoPlayer
        id="archived-player"
        uri={`${process.env.NEXT_PUBLIC_CLOUDFRONT_VIDEO_API}/${event.video}`}
        seekTo={startAt}
        {...additional(event)}
      />
      <Flex justifyContent="space-between" color="gray.300" mb={2} pt={1} px={3}>
        <Text fontSize="md" fontWeight="bold">
          {totalViews}
        </Text>
        {event.totalSignings != null && event.totalSignings > 0 && (
          <Text fontSize="md" fontWeight="bold">
            {numeral(event.totalSignings).format('0a')} SIGNINGS
          </Text>
        )}
        <Text fontSize="md" fontWeight="bold">
          STREAMED ON{' '}
          {parseTimestamp(event.startAt)
            .toLocaleString(DateTime.DATE_MED)
            .toUpperCase()}
        </Text>
      </Flex>
    </React.Fragment>);
}

const additional = (event: Event) => {
  if (event.videoThumbnail && event.videoThumbnail) {
    return {
      poster: `${process.env.NEXT_PUBLIC_CLOUDFRONT_VIDEO_THUMBNAIL_API}/${event.videoThumbnail}`
    };
  }
  return {};
};

const viewText = (views: number) => {
  let totalViews;
  if (views > 0) {
    let format = '';
    if (views <= 1000) {
      format = '0a';
    } else {
      format = '0.0a';
    }
    totalViews = `${numeral(views).format(format)} VIEWS`;
  } else {
    totalViews = 'No views';
  }

  return totalViews;
}


function seoConfig(event: Event) {
  return {
    title: `${event.title} | QJAM`,
    description: event.description || '',
    openGraph: {
      title: `${event.title} | QJAM`,
      description: event.description || '',
      images: [
        {
          url: event.eventPic.loc,
          width: 782,
          height: 440,
          alt: `${event.title} event picture`
        }
      ],
      site_name: 'QJAM'
    },
    twitter: {
      cardType: 'summary_large_image'
    }
  };
}
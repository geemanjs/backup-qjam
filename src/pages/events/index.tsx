import {GetStaticProps} from "next";
import {EventsService} from "../../services/EventService";
import {StandardLayout} from "../../components/Layouts/Standard";
import {NextSeo} from "next-seo";
import {Container} from "../../components/Container";
import {NoEvents} from "../../components/Events/cards/EventNoneCard";
import {EventsList} from "../../components/Events/EventsList";
import {Box} from "@chakra-ui/react";
import {Event} from '../../types'

interface IProps {
  liveEvents: Event[];
  upcomingEvents: Event[];
  archivedEvents: Event[];
}

function seoConfig() {
  return {
    title: `Events | QJAM`,
    description: `View live, upcoming and past events with artists on the QJAM app.`,
    openGraph: {
      title: `Events | QJAM`,
      description: `View live, upcoming and past events with artists on the QJAM app.`,
      images: [
        {
          url:
            'https://res.cloudinary.com/qjam/image/upload/v1575666417/website/SEO/Screenshot_2019-12-06_at_20.55.04.png',
          width: 2504,
          height: 1408,
          alt: `QJAM – Meet your favourite artists.`
        }
      ],
      site_name: 'QJAM'
    },
    twitter: {
      cardType: 'summary_large_image'
    }
  };
}

export const Events = ({liveEvents, upcomingEvents, archivedEvents}: IProps) => {
  const hasLiveEvents = liveEvents && liveEvents.length > 0;
  const hasUpcomingEvents = upcomingEvents && upcomingEvents.length > 0;
  const hasArchivedEvents = archivedEvents && archivedEvents.length > 0;
  return (
    <StandardLayout>
      <NextSeo {...seoConfig()} />
      <Container>
        { !hasLiveEvents && !hasUpcomingEvents && !hasArchivedEvents && (
          <NoEvents />
        )}
        <EventsList live={liveEvents} upcoming={upcomingEvents} archived={archivedEvents} />
        <Box p={4} />
      </Container>
    </StandardLayout>
  )
}
export default Events;

export const getStaticProps: GetStaticProps<IProps, {}> = async () => {
  const [archivedEvents, upcomingEvents, liveEvents] = await Promise.all([
    EventsService.archived(),
    EventsService.upcoming(),
    EventsService.live(),
  ]);
  return {
    props: {
      archivedEvents,
      liveEvents,
      upcomingEvents
    }
  };
}
import {GetStaticPaths, GetStaticProps} from "next";
import {EventsService} from "../../../services/EventService";
import {Event} from '../../../types';
import {useRouter} from "next/router";
import {StandardLayout} from "../../../components/Layouts/Standard";

const ViewEvent = ({event}: {event: Event}) => {
  const {query} = useRouter();
  const {s: startAt} = query;
  return (
    <StandardLayout>

    </StandardLayout>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  const slugs = await EventsService.getSlugs();
  return {
    fallback: 'blocking',
    paths: slugs
  };
};

export const getStaticProps: GetStaticProps<{ event: Event }, { eventId: string }> = async (context) => {
  const {eventId} = context.params || {};
  if (!eventId) {
    throw new Error("Event id is required");
  }
  return {
    props: {event: await EventsService.get(eventId)}
  };
}

export default ViewEvent
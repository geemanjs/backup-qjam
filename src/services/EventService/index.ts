import { Api } from "../Api";
import { DateTime } from "luxon";
import {
  ApiDateTime,
  Event,
  EventId,
  HostId,
  Jammer,
  Queuer,
} from "../../types";

const apiEventToRealEvent = (apiEvent: any): Event => {
  apiEvent.eventPic.loc = `${process.env.NEXT_PUBLIC_CLOUDINARY_IMAGE_API}/${apiEvent.eventPic.loc}.jpg`;
  apiEvent.artistProfilePicLoc = apiEvent.artistProfilePicLoc
    ? `${process.env.NEXT_PUBLIC_CLOUDINARY_IMAGE_API}/${apiEvent.artistProfilePicLoc}.jpg`
    : "/img/icons/no-avatar.png";
  if (apiEvent.archivedParticipants) {
    apiEvent.archivedParticipants.forEach((jammer: Jammer) => {
      if (jammer.profileImage) {
        jammer.profileImage = `${process.env.NEXT_PUBLIC_CLOUDINARY_IMAGE_API}/${jammer.profileImage}.jpg`;
      } else {
        jammer.profileImage = "/img/icons/no-avatar.png";
      }
    });
  }
  if (apiEvent.queuers) {
    apiEvent.queuers.forEach((queuer: Queuer) => {
      if (queuer.profileImage) {
        queuer.profileImage = `${process.env.NEXT_PUBLIC_CLOUDINARY_IMAGE_API}/${queuer.profileImage}.jpg`;
      } else {
        queuer.profileImage = "/img/icons/no-avatar.png";
      }
    });
  }
  return apiEvent as Event;
};

class Events {
  orderByStartDate = (a: ApiDateTime, b: ApiDateTime) => {
    if (a.startAt && b.startAt) {
      return a.startAt._seconds - b.startAt._seconds;
    } else {
      return -1;
    }
  };

  parseEventResponse = (response: any) => {
    return response.map(apiEventToRealEvent);
  };

  upcoming = async (limit = 9) => {
    const now = DateTime.local().minus({ hours: 1 }).toISO();
    const res = await Api.get(
      `/events?limit=${limit}&from=${encodeURIComponent(now)}&status=SCHEDULED`
    );
    return this.parseEventResponse(res).sort(this.orderByStartDate);
  };

  archived = async (limit = 100) => {
    const now = DateTime.local().toISO();
    const res = await Api.get(
      `/events?limit=${limit}&to=${encodeURIComponent(now)}&status=ARCHIVED`
    );
    return this.parseEventResponse(res);
  };

  live = async (limit = 100) => {
    const res = await Api.get(`/events?limit=${limit}&status=LIVE`);
    return this.parseEventResponse(res);
  };

  upcomingByHost = async (hostId: HostId, limit = 6) => {
    const now = DateTime.local().toISO();
    const res = await Api.get(
      `/events?limit=${limit}&from=${encodeURIComponent(
        now
      )}&hostId=${hostId}&status=SCHEDULED`
    );
    return this.parseEventResponse(res);
  };

  archivedByHost = async (hostId: HostId, limit = 6) => {
    const now = DateTime.local().toISO();
    const unParsedEvents = await Api.get(
      `/events?limit=${limit}&to=${encodeURIComponent(
        now
      )}&hostId=${hostId}&status=ARCHIVED`
    );
    return this.parseEventResponse(unParsedEvents);
  };

  liveByHost = async (hostId: HostId, limit = 100) => {
    const res = await Api.get(
      `/events?limit=${limit}&status=LIVE&hostId=${hostId}`
    );
    return this.parseEventResponse(res);
  };

  get = async (eventId: EventId) => {
    const event = await Api.get(`/events/${eventId}/`);
    return apiEventToRealEvent(event);
  };

  parseEvent = apiEventToRealEvent;

  async getSlugs() {
    return await Api.get("/events/ids");
  }
}

export const EventsService = new Events();

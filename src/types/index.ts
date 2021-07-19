export type Media = {
  loc: string;
  type: string;
};

export type EventType = "JAM" | "BROADCAST" | "SIGNING";
export type EventStatus = "SCHEDULED" | "LIVE" | "ARCHIVED";

export type Jammer = {
  id: string;
  displayName: string;
  startAt: Date;
  endAt: Date;
  profileImage: string;
};

export type Queuer = {
  id: string;
  name: string;
  firstName: string;
  profileImage: string;
  endTimestamp: Date;
  queuePosition: number;
  isSubscribedToTopic: boolean;
  // Is 1 to 3 and used to identify where in the artists queue it is
  internalQueuePositionNumber: number;
};

export type Event = {
  id: string;
  host?: IUserSnapshot;
  hostSlug: string;
  hostName: string;
  artistProfilePicLoc?: string;
  artistIsVerified?: boolean;
  title: string;
  createdAt?: Date;
  startAt: Date;
  lastStartTime?: Date;
  accumulatedDuration?: number;
  streamDuration?: number;
  endAt: Date;
  description?: string;
  type: EventType;
  eventPic: Media;
  signingPic?: Media;
  status: EventStatus;
  isPrivate: boolean;
  maxChats: number;
  chatDuration: number;
  sessionId?: string;
  videoThumbnail?: string;
  video?: string;
  hlsBroadcast?: {
    url: string;
  };
  userInQueue?: boolean;
  queuePosition?: number;
  isSubscribedToTopic?: boolean;
  viewCount?: number;
  queueCount?: number;
  totalViews?: number;
  participantCount?: number;
  totalSignings?: number;
  archivedParticipants?: Array<Jammer>;
  queuers?: Array<Queuer>;
};

export interface IUserSnapshot {
  id: string;
  type: UserRole;
  displayName: string;
  isVerified?: boolean;
  image?: string;
  slug?: string;
}

export enum UserRole {
  ADMIN = "admin",
  ARTIST = "artist",
  FAN = "fan",
}

export type MusicMedia = {
  height: number;
  width: number;
  url: string;
};

export type MusicTrack = {
  trackNumber: number;

  uri: string;
  id: string;
  albumName: string;
  preview_url?: string;
  name: string;
  albumImages: MusicMedia[];
  trackId: number;
};

export type Artist = {
  id: string;
  objectID: string;
  displayName: string;
  profilePic: Media;
  coverPhoto: Media;
  spotifyUri?: string;
  appleMusicUrl?: string;
  isVerified: boolean;
  isUnclaimed: boolean;
  upcomingEvents?: Event[];
  previousEvents?: Event[];
  music?: {
    tracks: Array<MusicTrack>;
    title: string;
    releaseDate?: Date;
  };
  isFollowing: boolean;
  followerCount: number;
  bio: string;
  slug: string;
};

export type ArtistSource = "ALGOLIA" | "FEATURED";

export type ApiDateTime = {
  startAt: {
    _seconds: number;
  };
};

export type HostId = string;
export type EventId = string;
export type ArtistId = string;

export type TODO = any;

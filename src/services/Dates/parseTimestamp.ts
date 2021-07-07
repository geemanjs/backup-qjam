import { DateTime } from 'luxon';

export const parseTimestamp = (timestamp: any) => {
  return DateTime.fromMillis(timestamp._seconds * 1000);
};

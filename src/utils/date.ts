import moment from 'moment';
import { EN_US_LOCALE, SEOUL_TIMEZONE } from './constans';

export const getDayString = (date: Date | moment.Moment): string => {
  return new Date(date.toString()).toLocaleDateString(EN_US_LOCALE, {
    timeZone: SEOUL_TIMEZONE,
    weekday: 'long',
  });
};

export const getDateString = (date: Date | moment.Moment): string => {
  return new Date(date.toString()).toLocaleDateString(EN_US_LOCALE, {
    timeZone: SEOUL_TIMEZONE,
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
};

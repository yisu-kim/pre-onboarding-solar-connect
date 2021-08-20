import { EN_US_LOCALE, SEOUL_TIMEZONE } from './constans';

export const getDayString = (date: Date): string => {
  return date.toLocaleDateString(EN_US_LOCALE, {
    timeZone: SEOUL_TIMEZONE,
    weekday: 'long',
  });
};

export const getDateString = (date: Date): string => {
  return date.toLocaleDateString(EN_US_LOCALE, {
    timeZone: SEOUL_TIMEZONE,
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
};

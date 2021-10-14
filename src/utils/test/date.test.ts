import moment from 'moment';
import { getDateString, getDayString } from '../date';

describe('날짜 테스트', () => {
  test('Date 요일 테스트', () => {
    expect(getDayString(new Date('2021-10-14'))).toBe('Thursday');
  });
  test('moment 요일 테스트', () => {
    expect(getDayString(moment('2021-10-14'))).toBe('Thursday');
  });
  test('Date 날짜 테스트', () => {
    expect(getDateString(new Date('2021-10-14'))).toBe('October 14, 2021');
  });
  test('moment 날짜 테스트', () => {
    expect(getDateString(moment('2021-10-14'))).toBe('October 14, 2021');
  });
});

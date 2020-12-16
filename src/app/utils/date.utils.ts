import * as moment from 'moment';

export const Formats = {
  hour: 'hh:mm A',
  default: 'YYYY-MM-DD'
};

export const parseToMomentDate = (date: string): any => {
  return moment(date);
};

export const formatDateToHour = (date: any, format = Formats.default): string => {
  const momentDate = parseToMomentDate(date);
  return momentDate.format(format);
};

import {Email} from '../interfaces/Email';
import {parseToMomentDate} from '../utils/date.utils';

export const mapToEmailsArray = (response): Array<Email> =>  {
  const {messages} = response;
  if (!messages || !messages?.length) {
    return [];
  }
  return messages.map( currentEmail => {
    const {id, date} = currentEmail;
    return {
      ...currentEmail,
      id: Number(id),
      date: parseToMomentDate(date),
      checked: false
    };
  });
};

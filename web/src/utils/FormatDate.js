import { format, parseISO } from 'date-fns';

export function formatDateWithDate(date) {
  return format(parseISO(date), "dd/MM/yyyy 'as' hh:mm:ss");
}

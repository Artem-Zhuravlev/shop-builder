import moment from 'moment';
import { useMemo } from 'react';

export function useFormattedDate(date: string): string {
  const formattedDate = useMemo(() => {
    if (!date) return '';
    return moment(date).format('DD.MM.YYYY');
  }, [date]);

  return formattedDate;
}

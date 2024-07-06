import { useFormattedDate } from './index';

describe('useFormattedDate', () => {
  it('formats date correctly for "date" type', () => {
    const result = useFormattedDate('2024-07-06', 'date');
    expect(result).toBe('06.07.2024');
  });

  it('formats date correctly for "time" type', () => {
    const result = useFormattedDate('2024-07-06T12:34:56', 'time');
    expect(result).toBe('12:34');
  });

  it('formats date correctly for "datetime" type', () => {
    const result = useFormattedDate('2024-07-06T12:34:56', 'datetime');
    expect(result).toBe('Jul 2024 12:34');
  });

  it('formats date correctly for "month" type', () => {
    const result = useFormattedDate('2024-07-06', 'month');
    expect(result).toBe('Jul 2024');
  });

  it('formats date correctly for "year" type', () => {
    const result = useFormattedDate('2024-07-06', 'year');
    expect(result).toBe('2024');
  });

  it('defaults to "date" type when type is not provided', () => {
    const result = useFormattedDate('2024-07-06');
    expect(result).toBe('06.07.2024');
  });
});

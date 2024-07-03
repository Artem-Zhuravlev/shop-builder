import '@testing-library/jest-dom';
import { render } from '@testing-library/react';
import { StatusLabel } from './StatusLabel';

// Mock useTranslations hook
jest.mock('next-intl', () => ({
  useTranslations: () => (key: string) => key,
}));

describe('StatusLabel', () => {
  const statuses = [
    'pending',
    'cancelled',
    'delivered',
    'processing',
    'shipped',
  ] as const;

  statuses.forEach((status) => {
    it(`renders correctly for status: ${status}`, () => {
      const { getByText } = render(<StatusLabel value={status} />);
      expect(getByText(status)).toBeInTheDocument();
      expect(getByText(status).classList).toContain(status);
    });
  });
});

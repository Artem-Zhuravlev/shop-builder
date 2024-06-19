import '@testing-library/jest-dom';
import { act, screen } from '@testing-library/react';
import { customRender } from '@utils/intlWrapper/IntlWrapper';
import { TimerBase } from './TimerBase';

describe('TimerBase component', () => {
  test('renders timer with correct values', async () => {
    const deadline = new Date(Date.now() + 10000).toISOString();
    customRender(<TimerBase deadline={deadline} />);

    await act(async () => {
      await new Promise((resolve) => setTimeout(resolve, 1000));
    });

    expect(screen.getByText(/Days/i)).toBeInTheDocument();
    expect(screen.getByText(/Hours/i)).toBeInTheDocument();
    expect(screen.getByText(/Minutes/i)).toBeInTheDocument();
    expect(screen.getByText(/Seconds/i)).toBeInTheDocument();
  });
});

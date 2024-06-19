import '@testing-library/jest-dom';
import { fireEvent, screen } from '@testing-library/react';
import { customRender } from '@utils/intlWrapper/IntlWrapper';
import { AlertBase } from './AlertBase';
import { AlertItemProps } from './common/AlertItem';

describe('AlertBase Component', () => {
  const mockAlerts: Pick<AlertItemProps, 'type' | 'message'>[] = [
    { type: 'success', message: 'Success message' },
    { type: 'error', message: 'Error message' },
  ];

  test('renders AlertBase component with alerts', () => {
    customRender(<AlertBase alerts={mockAlerts} />);

    const alertBaseElement = screen.getByTestId('alert-base');
    expect(alertBaseElement).toBeInTheDocument();

    const alertItems = screen.getAllByTestId((id) =>
      id.startsWith('alert-item'),
    );
    expect(alertItems.length).toBe(mockAlerts.length);
  });

  test('closes an alert when the close button is clicked', () => {
    customRender(<AlertBase alerts={mockAlerts} />);

    const closeButtons = screen.getAllByTestId((id) =>
      id.startsWith('alert-close'),
    );
    expect(closeButtons.length).toBe(mockAlerts.length);

    fireEvent.click(closeButtons[0]);

    const remainingAlerts = screen.getAllByTestId((id) =>
      id.startsWith('alert-item'),
    );
    expect(remainingAlerts.length).toBe(mockAlerts.length - 1);
  });
});

import React from 'react';
import '@testing-library/jest-dom';

import { render, screen, fireEvent } from '@testing-library/react';
import { AlertBase } from './AlertBase';
import { IAlertItem } from './AlertItem';

describe('AlertBase Component', () => {
	const mockAlerts: IAlertItem[] = [
		{ type: 'success', message: 'Success message' },
		{ type: 'error', message: 'Error message' },
	];

	test('renders AlertBase component with alerts', () => {
		render(<AlertBase alerts={mockAlerts} />);

		const alertBaseElement = screen.getByTestId('alert-base');
		expect(alertBaseElement).toBeInTheDocument();

		const alertItems = screen.getAllByTestId((id) =>
			id.startsWith('alert-item')
		);
		expect(alertItems.length).toBe(mockAlerts.length);
	});

	test('closes an alert when the close button is clicked', () => {
		render(<AlertBase alerts={mockAlerts} />);

		const closeButtons = screen.getAllByTestId((id) =>
			id.startsWith('alert-close')
		);
		expect(closeButtons.length).toBe(mockAlerts.length);

		fireEvent.click(closeButtons[0]);

		const remainingAlerts = screen.getAllByTestId((id) =>
			id.startsWith('alert-item')
		);
		expect(remainingAlerts.length).toBe(mockAlerts.length - 1);
	});
});

import React from 'react';
import { render, screen, act } from '@testing-library/react';
import '@testing-library/jest-dom';
import { TimerBase } from './TimerBase';
import { customRender } from '@utils/intlWrapper/IntlWrapper';

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

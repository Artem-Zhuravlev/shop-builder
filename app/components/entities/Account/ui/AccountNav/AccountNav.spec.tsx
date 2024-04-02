import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import { AccountNav } from './AccountNav';

const items = [
	{ to: '/home', value: 'Home', icon: 'home-icon' },
	{ to: '/profile', value: 'Profile', icon: 'profile-icon' },
	{ to: '/settings', value: 'Settings', icon: 'settings-icon' },
];

describe('AccountNav component', () => {
	it('renders without crashing', () => {
		render(<AccountNav items={items} />);
	});

	it('renders correct number of navigation items', () => {
		const { getAllByRole } = render(<AccountNav items={items} />);
		const navItems = getAllByRole('listitem');
		expect(navItems.length).toBe(items.length);
	});
});

import React from 'react';
import { customRender } from '@utils/intlWrapper/IntlWrapper';
import '@testing-library/jest-dom';
import { AccountNav } from './AccountNav';

const items = [
	{ to: '/home', value: 'home', icon: 'home-icon' },
	{ to: '/profile', value: 'profile', icon: 'profile-icon' },
	{ to: '/settings', value: 'settings', icon: 'settings-icon' },
];

describe('AccountNav component', () => {
	it('renders without crashing', () => {
		customRender(<AccountNav items={items} />);
	});

	it('renders correct number of navigation items', () => {
		const { getAllByRole } = customRender(<AccountNav items={items} />);
		const navItems = getAllByRole('listitem');
		expect(navItems.length).toBe(items.length);
	});
});

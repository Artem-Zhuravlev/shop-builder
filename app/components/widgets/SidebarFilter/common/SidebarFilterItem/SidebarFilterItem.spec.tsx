import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { SidebarFilterItem } from './SidebarFilterItem';

describe('SidebarFilterItem component', () => {
	test('renders SidebarFilterItem with correct amount', () => {
		render(<SidebarFilterItem amount={5} />);
	});

	test('renders SidebarFilterItem without amount', () => {
		render(<SidebarFilterItem />);
	});

	test('renders SidebarFilterItem with children', () => {
		render(<SidebarFilterItem>Test</SidebarFilterItem>);
	});
});

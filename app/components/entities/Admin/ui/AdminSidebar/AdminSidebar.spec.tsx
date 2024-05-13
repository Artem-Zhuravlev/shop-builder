import React from 'react';
import { fireEvent } from '@testing-library/react';
import { customRender } from '@utils/intlWrapper/IntlWrapper';
import '@testing-library/jest-dom';
import { AdminSidebar } from './AdminSidebar';

describe('AdminSidebar', () => {
	test('renders sidebar with correct items', () => {
		const { getByText } = customRender(<AdminSidebar />);

		expect(getByText('Dashboard')).toBeInTheDocument();
		expect(getByText('Catalog')).toBeInTheDocument();
	});
});

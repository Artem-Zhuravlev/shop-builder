import React from 'react';
import { fireEvent } from '@testing-library/react';
import { customRender } from '@utils/intlWrapper/IntlWrapper';
import '@testing-library/jest-dom';
import ModalWindow from './ModalWindow';

describe('ModalWindow component', () => {
	test('renders with title and children when visible is true', () => {
		const { getByText } = customRender(
			<ModalWindow
				title='Test Modal'
				visibility={true}>
				<p>Modal Content</p>
			</ModalWindow>
		);

		expect(getByText('Test Modal')).toBeInTheDocument();
		expect(getByText('Modal Content')).toBeInTheDocument();
	});

	test('does not render when visible is false', () => {
		const { queryByText } = customRender(
			<ModalWindow
				title='Test Modal'
				visibility={false}>
				<p>Modal Content</p>
			</ModalWindow>
		);

		expect(queryByText('Test Modal')).not.toBeInTheDocument();
		expect(queryByText('Modal Content')).not.toBeInTheDocument();
	});
});

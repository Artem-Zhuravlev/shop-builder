import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { customRender } from '@utils/intlWrapper/IntlWrapper';
import '@testing-library/jest-dom';
import { InputSwitcher } from './InputSwitcher';
import { Form } from 'react-final-form';

describe('InputSwitcher component', () => {
	const mockOnChange = jest.fn();
	const label = 'Check me';
	const name = 'name';

	it('renders with the default value', () => {
		const { getByTestId } = customRender(
			<Form onSubmit={mockOnChange}>
				{({ handleSubmit }) => (
					<form onSubmit={handleSubmit}>
						<InputSwitcher
							label={label}
							name={name}
						/>
					</form>
				)}
			</Form>
		);
		const switchElement = getByTestId('input-switcher');
		expect(switchElement).toBeInTheDocument();
		expect(switchElement).not.toBeChecked();
	});
});

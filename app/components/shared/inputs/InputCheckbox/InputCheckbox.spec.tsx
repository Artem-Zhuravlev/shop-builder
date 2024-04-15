import React from 'react';
import { fireEvent } from '@testing-library/react';
import { customRender } from '@utils/intlWrapper/IntlWrapper';
import '@testing-library/jest-dom';
import { InputCheckbox } from './InputCheckbox';
import { Form } from 'react-final-form';

describe('InputCheckbox Component', () => {
	const mockOnChange = jest.fn();

	it('renders the checkbox input with the given label', () => {
		const label = 'Check me';
		const name = 'name';

		const { getByText, getByLabelText } = customRender(
			<Form onSubmit={mockOnChange}>
				{({ handleSubmit }) => (
					<form onSubmit={handleSubmit}>
						<InputCheckbox
							label={label}
							name={name}
						/>
					</form>
				)}
			</Form>
		);

		expect(getByText(label)).toBeInTheDocument();
		expect(getByLabelText(label)).toBeInTheDocument();
	});

	it('renders the checkbox as checked when value is true', () => {
		const label = 'Check me';
		const name = 'name';

		const { getByLabelText } = customRender(
			<Form
				onSubmit={mockOnChange}
				initialValues={{ [name]: true }}>
				{({ handleSubmit }) => (
					<form onSubmit={handleSubmit}>
						<InputCheckbox
							label={label}
							name={name}
							onChange={mockOnChange}
						/>
					</form>
				)}
			</Form>
		);

		const checkbox = getByLabelText(label) as HTMLInputElement;

		expect(checkbox).toBeInTheDocument();
		expect(checkbox).toBeChecked();
	});
});

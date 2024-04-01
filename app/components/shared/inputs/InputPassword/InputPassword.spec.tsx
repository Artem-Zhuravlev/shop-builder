import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import { Form, Field } from 'react-final-form';
import { InputType, InputPassword } from './InputPassword';

jest.mock('next-intl', () => ({
	useTranslations: () => (key: any) => key,
}));

describe('InputPassword component', () => {
	it('changes input type on suffix click', () => {
		const Wrapper = () => (
			<Form onSubmit={() => {}}>
				{({ handleSubmit }) => (
					<form onSubmit={handleSubmit}>
						<Field name='password'>
							{({ input }) => (
								<InputPassword
									name={input.name}
									placeholder='Password'
									value={input.value}
									onChange={input.onChange}
								/>
							)}
						</Field>
					</form>
				)}
			</Form>
		);

		const { getByPlaceholderText, getByRole } = render(<Wrapper />);
		const inputElement = getByPlaceholderText('Password') as HTMLInputElement;
		const suffixButton = getByRole('button');

		expect(inputElement).toBeInTheDocument();
		expect(inputElement.type).toBe(InputType.PASSWORD);

		fireEvent.click(suffixButton);

		expect(inputElement.type).toBe(InputType.TEXT);
	});

	it('calls onChange function when input value changes', () => {
		const Wrapper = () => (
			<Form onSubmit={() => {}}>
				{({ handleSubmit }) => (
					<form onSubmit={handleSubmit}>
						<Field name='password'>
							{({ input }) => (
								<InputPassword
									name={input.name}
									placeholder='Password'
									value={input.value}
									onChange={input.onChange}
								/>
							)}
						</Field>
					</form>
				)}
			</Form>
		);

		const { getByPlaceholderText } = render(<Wrapper />);
		const inputElement = getByPlaceholderText('Password') as HTMLInputElement;

		fireEvent.change(inputElement, { target: { value: 'newPassword' } });

		expect(inputElement.value).toBe('newPassword');
	});
});

import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import { Form, Field } from 'react-final-form';
import { InputType, InputPassword } from './InputPassword';

describe('InputPassword component', () => {
  it('changes input type on suffix click', () => {
    const Wrapper = () => (
      <Form onSubmit={() => {}}>
        {({ handleSubmit }) => (
          <form onSubmit={handleSubmit}>
            <Field name="password">
              {({ input }) => (
                <InputPassword
                  name={input.name}
                  label="Password"
                  value={input.value}
                  onChange={input.onChange}
                />
              )}
            </Field>
          </form>
        )}
      </Form>
    );

    const { getByLabelText, getByRole } = render(<Wrapper />);
    const inputElement = getByLabelText('Password').closest('input') as HTMLInputElement;
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
            <Field name="password">
              {({ input }) => (
                <InputPassword
                  name={input.name}
                  label="Password"
                  value={input.value}
                  onChange={input.onChange}
                />
              )}
            </Field>
          </form>
        )}
      </Form>
    );

    const { getByLabelText } = render(<Wrapper />);
    const inputElement = getByLabelText('Password') as HTMLInputElement;

    fireEvent.change(inputElement, { target: { value: 'newPassword' } });

    expect(inputElement.value).toBe('newPassword');
  });
});

import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import { Form, useField } from 'react-final-form';
import { InputText } from './InputText';

const TestComponent = () => {
  const { input } = useField('input');
  return <InputText name="input" label="Your Label" value="" onChange={input.onChange} />;
};

jest.mock('next-intl', () => ({
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  useTranslations: () => (key: any) => key
}));

describe('InputText component', () => {
  it('renders with the correct label', () => {
    const { getByLabelText } = render(
      <Form
        onSubmit={() => {}}
        render={() => <TestComponent />}
      />
    );
    const labelElement = getByLabelText('Your Label');
    expect(labelElement).toBeInTheDocument();
  });

  it('handles input change correctly', () => {
    const { getByLabelText } = render(
      <Form
        onSubmit={() => {}}
        render={() => <TestComponent />}
      />
    );
    const inputElement = getByLabelText('Your Label');
    fireEvent.change(inputElement, { target: { value: 'Test Input' } });
    expect(inputElement).toHaveValue('Test Input');
  });
});

import { fireEvent, render } from '@testing-library/react';
import { Form } from 'react-final-form'; // Import Form from react-final-form
import { InputRadio } from './InputRadio';

describe('InputRadio component', () => {
  it('should render correctly', () => {
    const { getByLabelText } = render(
      <Form onSubmit={() => {}}>
        {({ handleSubmit }) => (
          <form onSubmit={handleSubmit}>
            <InputRadio name='test' value='option1' />
          </form>
        )}
      </Form>,
    );
    const radioInput = getByLabelText('option1');
    expect(radioInput).toBeInTheDocument();
  });

  it('should call onChange handler when radio button is clicked', () => {
    const onChangeMock = jest.fn();
    const { getByLabelText } = render(
      <Form onSubmit={() => {}}>
        {({ handleSubmit }) => (
          <form onSubmit={handleSubmit}>
            <InputRadio name='test' value='option1' onChange={onChangeMock} />
          </form>
        )}
      </Form>,
    );
    const radioInput = getByLabelText('option1');
    fireEvent.click(radioInput);
    expect(onChangeMock).toHaveBeenCalled();
  });

  it('should render suffix when provided', () => {
    const { getByText } = render(
      <Form onSubmit={() => {}}>
        {({ handleSubmit }) => (
          <form onSubmit={handleSubmit}>
            <InputRadio
              name='test'
              value='option1'
              suffix={<span>Suffix</span>}
            />
          </form>
        )}
      </Form>,
    );
    const suffixElement = getByText('Suffix');
    expect(suffixElement).toBeInTheDocument();
  });
});

import '@testing-library/jest-dom';
import { render } from '@testing-library/react';
import { Form } from 'react-final-form';
import { InputColors } from './InputColors';

describe('InputColors component', () => {
  const items = [
    { color: 'red', value: 'Red', tip: 'This is a red color' },
    { color: 'green', value: 'Green', tip: 'This is a green color' },
    { color: 'blue', value: 'Blue', tip: 'This is a blue color' },
  ];

  it('renders correctly with checkboxes', () => {
    const { getByLabelText } = render(
      <Form onSubmit={() => {}}>
        {({ handleSubmit }) => (
          <form onSubmit={handleSubmit}>
            <InputColors type='checkbox' items={items} />
          </form>
        )}
      </Form>,
    );

    for (const item of items) {
      const checkbox = getByLabelText(item.value);
      expect(checkbox).toBeInTheDocument();
    }
  });

  it('renders correctly with radio buttons', () => {
    const { getByLabelText } = render(
      <Form onSubmit={() => {}}>
        {({ handleSubmit }) => (
          <form onSubmit={handleSubmit}>
            <InputColors type='radio' items={items} />
          </form>
        )}
      </Form>,
    );

    for (const item of items) {
      const radio = getByLabelText(item.value);
      expect(radio).toBeInTheDocument();
    }
  });
});

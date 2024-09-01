import '@testing-library/jest-dom';
import { render } from '@testing-library/react';
import { InputRange } from './InputRange';

describe('InputRange component', () => {
  it('renders the Slider component with props', () => {
    const props = {
      disabled: true,
      autoFocus: true,
      onFocus: jest.fn(),
      onBlur: jest.fn(),
      onChange: jest.fn(),
      range: true,
      count: 5,
      min: 0,
      max: 100,
      step: 10,
      value: [20, 50],
      defaultValue: [0, 100],
      pushable: true,
    };

    const { container } = render(<InputRange {...props} />);
    const sliderComponent = container.querySelector('.rc-slider');

    expect(sliderComponent).toBeInTheDocument();
    expect(sliderComponent).toHaveClass('rc-slider');
    expect(sliderComponent).toHaveClass('rc-slider-disabled');
    expect(sliderComponent).not.toHaveAttribute('aria-disabled');
  });
});

import '@testing-library/jest-dom';
import { render } from '@testing-library/react';
import { RatingProps } from 'react-simple-star-rating';
import { InputRating } from './InputRating';

describe('InputRating component', () => {
  it('renders the Rating component with props', () => {
    const props: RatingProps = {
      onClick: jest.fn(),
      onPointerMove: jest.fn(),
      onPointerEnter: jest.fn(),
      onPointerLeave: jest.fn(),
      initialValue: 3,
      allowFraction: true,
      allowHover: true,
      disableFillHover: false,
      transition: false, // Assuming transition is of type boolean | undefined
      size: 5,
      readonly: false,
    };

    const { container } = render(<InputRating {...props} />);
    const ratingComponent = container.querySelector('.rating, svg');

    expect(ratingComponent).toBeTruthy();
    if (ratingComponent) {
      expect(ratingComponent).toHaveClass('star-svg');
    }
  });
});

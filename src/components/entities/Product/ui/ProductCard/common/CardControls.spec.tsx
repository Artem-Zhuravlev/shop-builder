import '@testing-library/jest-dom';
import { fireEvent, render } from '@testing-library/react';
import { CardControls } from './CardControls';

describe('CardControls Component', () => {
  it('should trigger correct callbacks when buttons are clicked', () => {
    const mockToCard = jest.fn();
    const mockToFavorite = jest.fn();
    const mockQuickView = jest.fn();
    const mockCompare = jest.fn();

    const { getByLabelText } = render(
      <CardControls
        handleToCard={mockToCard}
        handleToFavorite={mockToFavorite}
        handleQuickView={mockQuickView}
        handleCompare={mockCompare}
      />,
    );

    const toCardButton = getByLabelText('Add to card');
    const toFavoriteButton = getByLabelText('Add to wish list');
    const quickViewButton = getByLabelText('Quick view');
    const compareButton = getByLabelText('Compare this Product');

    fireEvent.click(toCardButton);
    fireEvent.click(toFavoriteButton);
    fireEvent.click(quickViewButton);
    fireEvent.click(compareButton);

    expect(mockToCard).toHaveBeenCalledTimes(1);
    expect(mockToFavorite).toHaveBeenCalledTimes(1);
    expect(mockQuickView).toHaveBeenCalledTimes(1);
    expect(mockCompare).toHaveBeenCalledTimes(1);
  });
});

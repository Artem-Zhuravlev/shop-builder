import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import { CardInfo } from './CardInfo';

describe('CardInfo Component', () => {
  it('renders price, old price, and tax if provided', () => {
    const price = 50;
    const oldPrice = 70;
    const tax = 10;
    const symbol = '$';

    const { getByText } = render(
      <CardInfo price={price} oldPrice={oldPrice} tax={tax} symbol={symbol} />
    );

    const priceElement = getByText(`${price} ${symbol}`);
    expect(priceElement).toBeInTheDocument();

    const oldPriceElement = getByText(`${oldPrice} ${symbol}`);
    expect(oldPriceElement).toBeInTheDocument();

    const taxElement = getByText(`-${tax}%`);
    expect(taxElement).toBeInTheDocument();
  });

  it('does not render old price if not provided', () => {
    const price = 50;
    const symbol = '$';

    const { getByText, queryByText } = render(
      <CardInfo price={price} symbol={symbol} />
    );

    const priceElement = getByText(`${price} ${symbol}`);
    expect(priceElement).toBeInTheDocument();

    const oldPriceElement = queryByText(`${price} ${symbol}`);
    expect(oldPriceElement).toBeInTheDocument();
  });

  it('does not render tax if not provided', () => {
    const price = 50;
    const symbol = '$';

    const { getByText, queryByText } = render(
      <CardInfo price={price} symbol={symbol} />
    );

    const priceElement = getByText(`${price} ${symbol}`);
    expect(priceElement).toBeInTheDocument();

    const taxElement = queryByText(/-\d+%/);
    expect(taxElement).toBeNull();
  });
});

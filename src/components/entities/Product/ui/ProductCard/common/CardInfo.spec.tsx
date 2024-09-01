import '@testing-library/jest-dom';
import { customRender } from '@/utils/intlWrapper/IntlWrapper';
import { CardInfo } from './CardInfo';

describe('CardInfo Component', () => {
	it('renders price, old price, and tax if provided', () => {
		const price = 50;
		const oldPrice = 70;
		const tax = 10;
		const currency = '$';

		const { getByText } = customRender(
			<CardInfo
				price={price}
				oldPrice={oldPrice}
				tax={tax}
				currency={currency}
			/>,
		);

		const priceElement = getByText(`${price} ${currency}`);
		expect(priceElement).toBeInTheDocument();

		const oldPriceElement = getByText(`${oldPrice} ${currency}`);
		expect(oldPriceElement).toBeInTheDocument();

		const taxElement = getByText(`-${tax}%`);
		expect(taxElement).toBeInTheDocument();
	});

	it('does not render old price if not provided', () => {
		const price = 50;
		const currency = '$';

		const { getByText, queryByText } = customRender(
			<CardInfo price={price} currency={currency} />,
		);

		const priceElement = getByText(`${price} ${currency}`);
		expect(priceElement).toBeInTheDocument();

		const oldPriceElement = queryByText(`${price} ${currency}`);
		expect(oldPriceElement).toBeInTheDocument();
	});

	it('does not render tax if not provided', () => {
		const price = 50;
		const currency = '$';

		const { getByText, queryByText } = customRender(
			<CardInfo price={price} currency={currency} />,
		);

		const priceElement = getByText(`${price} ${currency}`);
		expect(priceElement).toBeInTheDocument();

		const taxElement = queryByText(/-\d+%/);
		expect(taxElement).toBeNull();
	});
});

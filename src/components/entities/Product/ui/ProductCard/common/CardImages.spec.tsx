import '@testing-library/jest-dom';
import { customRender } from '@/utils/intlWrapper/IntlWrapper';
import { CardImages } from './CardImages';

jest.mock('next/image', () => ({
	__esModule: true,
	default: (props: any) => {
		// biome-ignore lint/a11y/useAltText: <explanation>
		return <img {...props} />;
	},
}));

describe('CardImages Component', () => {
	it('renders images and link correctly', () => {
		const images = [
			{ url: '/image1.jpg', alt: 'Image 1' },
			{ url: '/image2.jpg', alt: 'Image 2' },
		];
		const to = '/product';

		const { getAllByAltText, getByRole } = customRender(
			<CardImages to={to} images={images} />,
		);

		const renderedImages = getAllByAltText(/Image/);
		expect(renderedImages).toHaveLength(images.length);

		const linkElement = getByRole('link');
		expect(linkElement).toHaveAttribute('href', to);
	});
});

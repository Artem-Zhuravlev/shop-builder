import React from 'react';
import '@testing-library/jest-dom';
import { InfoList, Availability } from './InfoList';
import { customRender } from '@utils/intlWrapper/IntlWrapper';

const item = {
	brand: {
		name: 'Test Brand',
		to: '/test-url',
	},
	viewed: 100,
	reward_points: 50,
	availability: 'In stock' as Availability,
};

describe('InfoList Component', () => {
	test('renders brand, viewed, reward points, and availability', () => {
		const { container, getByText } = customRender(<InfoList item={item} />);

		const brandElement = getByText(item.brand.name);
		const viewedElement = getByText(item.viewed.toString());
		expect(brandElement).toBeInTheDocument();
		expect(viewedElement).toBeInTheDocument();

		const rewardPointsElement = getByText(item.reward_points.toString());
		expect(rewardPointsElement).toBeInTheDocument();

		const availabilityElement = getByText(item.availability);
		expect(availabilityElement).toBeInTheDocument();
		expect(availabilityElement).toHaveClass('InStock'); // Assuming 'InStock' class is present

		const linkElement = container.querySelector('a[href="/test-url"]');
		expect(linkElement).toBeInTheDocument();
	});

	test('does not render reward points and availability if not present in the item', () => {
		const itemWithoutOptionalProps = {
			brand: {
				name: 'Test Brand',
				to: '/test-url',
			},
			viewed: 100,
		};

		const { queryByText } = customRender(
			<InfoList item={itemWithoutOptionalProps} />
		);

		const rewardPointsElement = queryByText('Reward Points');
		const availabilityElement = queryByText('Availability');
		expect(rewardPointsElement).toBeNull();
		expect(availabilityElement).toBeNull();
	});
});

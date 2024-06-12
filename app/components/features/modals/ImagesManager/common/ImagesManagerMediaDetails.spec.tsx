import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { ImagesManagerMediaDetails } from './ImagesManagerMediaDetails';
import { useTranslations } from 'next-intl';

// Mock the next-intl useTranslations hook
jest.mock('next-intl', () => ({
	useTranslations: jest.fn(),
}));

// Mock the ButtonBase component
jest.mock('@shared/ButtonBase', () => ({
	// @ts-ignore
	ButtonBase: ({ children, variant }) => (
		<button className={`btn-${variant}`}>{children}</button>
	),
}));

describe('ImagesManagerMediaDetails', () => {
	const mockTranslations = {
		'admin.attach_file_details': 'Attach File Details',
		'base.delete': 'Delete',
	};

	beforeEach(() => {
		(useTranslations as jest.Mock).mockReturnValue(
			// @ts-ignore
			(key: string) => mockTranslations[key]
		);
	});

	const props = {
		image: 'https://picsum.photos/200/300',
		fileName: 'test-image.jpg',
		publishedAt: '2024-05-06',
		size: '1.5 MB',
		resolution: '1024 x 768',
	};

	it('should render image details correctly', () => {
		render(<ImagesManagerMediaDetails {...props} />);

		expect(screen.getByRole('img')).toHaveAttribute('src', props.image);
		expect(screen.getByRole('img')).toHaveAttribute('alt', '');

		expect(
			screen.getByText(mockTranslations['admin.attach_file_details'])
		).toBeInTheDocument();
		expect(screen.getByText(props.fileName)).toBeInTheDocument();
		expect(
			screen.getByText(new Date(props.publishedAt).toLocaleDateString())
		).toBeInTheDocument();
		expect(screen.getByText(props.size)).toBeInTheDocument();
		expect(screen.getAllByText(props.resolution)).toHaveLength(2);
		expect(
			screen.getByText(mockTranslations['base.delete'])
		).toBeInTheDocument();
	});

	it('should render a delete button with the correct variant', () => {
		render(<ImagesManagerMediaDetails {...props} />);

		const deleteButton = screen.getByText(mockTranslations['base.delete']);
		expect(deleteButton).toHaveClass('btn-danger');
	});
});

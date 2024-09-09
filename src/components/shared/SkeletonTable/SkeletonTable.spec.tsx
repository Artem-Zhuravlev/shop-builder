import React from 'react';
import { render, screen } from '@testing-library/react';
import { SkeletonTable } from './SkeletonTable';

jest.mock('../SkeletonBase', () => ({
	SkeletonBase: () => <div data-testid='skeleton-base' />,
}));

describe('SkeletonTable', () => {
	test('renders the correct number of rows', () => {
		const rows = 3;
		render(<SkeletonTable rows={rows} cellsGrid='100px 200px' />);

		const skeletonRows = screen.getAllByTestId('skeleton-row');
		expect(skeletonRows.length).toBe(rows);
	});

	test('renders the correct number of cells per row', () => {
		const rows = 2;
		const cellsGrid = '100px 200px';
		const totalCells = 4;

		render(<SkeletonTable rows={rows} cellsGrid={cellsGrid} />);

		const skeletonCells = screen.getAllByTestId('skeleton-base');
		expect(skeletonCells.length).toBe(rows * totalCells);
	});

	test('applies the correct gridTemplateColumns style', () => {
		const cellsGrid = '100px 200px';
		render(<SkeletonTable rows={1} cellsGrid={cellsGrid} />);

		const skeletonRow = screen.getByTestId('skeleton-row');
		expect(skeletonRow).toHaveStyle(
			'grid-template-columns: 50px 100px 200px 150px',
		);
	});
});

import React, { type FC } from 'react';
import cls from './SkeletonTable.module.scss';
import { SkeletonBase } from '../SkeletonBase';

interface SkeletonTableProps {
	rows: number;
	cellsGrid: string;
}

export const SkeletonTable: FC<SkeletonTableProps> = ({ rows, cellsGrid }) => {
	const skeletonKeys = Array.from(
		{ length: rows },
		(_, rowIndex) => `skeleton-row-${rowIndex}`,
	);

	const cells = cellsGrid.split(' ').length + 2;
	const cellsKeys = Array.from(
		{ length: cells },
		(_, cellIndex) => `skeleton-cell-${cellIndex}`,
	);

	return (
		<div className={cls.SkeletonTable}>
			{skeletonKeys.map((key) => (
				<div
					key={key}
					className={cls.SkeletonRow}
					style={{ gridTemplateColumns: `50px ${cellsGrid} 150px` }}
					data-testid='skeleton-row'
				>
					{cellsKeys.map((key) => (
						<SkeletonBase key={key} width='100%' height='25px' />
					))}
				</div>
			))}
		</div>
	);
};

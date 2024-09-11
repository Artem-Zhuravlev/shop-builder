import { Cell, Row } from '@table-library/react-table-library';
import { useTranslations } from 'next-intl';
import React, { type FC, useId } from 'react';

interface EmptyDataTableRowProps {
	cells: number;
}

export const EmptyDataTableRow: FC<EmptyDataTableRowProps> = ({ cells }) => {
	const id = useId();
	const t = useTranslations('base');

	return (
		<Row item={{ id }}>
			<Cell
				style={{
					gridColumn: `1/${cells + 1}`,
					textAlign: 'center',
					minHeight: 'var(--size-big)',
				}}
			>
				{t('no_table_data')}
			</Cell>
		</Row>
	);
};

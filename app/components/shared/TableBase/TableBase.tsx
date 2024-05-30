import React, { FC } from 'react';
import cls from './TableBase.module.scss';
import {
	CompactTable,
	CompactTableProps,
} from '@table-library/react-table-library/compact';
import { useTheme } from '@table-library/react-table-library/theme';
import { getTheme } from '@table-library/react-table-library/baseline';

interface TableNode {
	id: string | number;
	[key: string]: any;
}

type TableBaseProps<T extends TableNode> = Omit<
	CompactTableProps<T>,
	'data'
> & {
	data: T[];
	columns: CompactTableProps<T>['columns'];
	themeProps?: any;
};

export const TableBase = <T extends TableNode>({
	columns,
	data,
	themeProps,
	...rest
}: TableBaseProps<T>) => {
	const theme = useTheme([getTheme(), { ...themeProps }]);

	return (
		<CompactTable
			className={cls.TableBase}
			columns={columns}
			data={{ nodes: data }}
			{...rest}
			theme={theme}
		/>
	);
};

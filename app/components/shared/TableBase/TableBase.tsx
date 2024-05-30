// import React, { FC } from 'react';
// import Table, { TableProps } from 'rc-table';
// import { ColumnType, DefaultRecordType } from 'rc-table/lib/interface';
// import cls from './TableBase.module.scss';

// interface TableBaseProps extends TableProps<DefaultRecordType> {
// 	columns: ColumnType<DefaultRecordType>[];
// }

// export const TableBase: FC<TableBaseProps> = (props) => {
// 	const { columns, data } = props;

// 	return (
// 		<Table
// 			className={cls.TableBase}
// 			columns={columns}
// 			data={data}
// 		/>
// 	);
// };

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
};

export const TableBase = <T extends TableNode>({
	columns,
	data,
	...rest
}: TableBaseProps<T>) => {
	const theme = useTheme(getTheme());

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

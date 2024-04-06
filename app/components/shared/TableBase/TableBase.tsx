import React, { FC } from 'react';
import Table, { TableProps } from 'rc-table';
import { ColumnType, DefaultRecordType } from 'rc-table/lib/interface';
import cls from './TableBase.module.scss';

interface TableBaseProps extends TableProps<DefaultRecordType> {
	columns: ColumnType<DefaultRecordType>[];
}

export const TableBase: FC<TableBaseProps> = (props) => {
	const { data, columns } = props;

	return (
		<Table
			className={cls.TableBase}
			columns={columns}
			data={data}
		/>
	);
};

import { getTheme } from '@table-library/react-table-library/baseline';
import {
  CompactTable,
  type CompactTableProps,
} from '@table-library/react-table-library/compact';
import { useTheme } from '@table-library/react-table-library/theme';
import type { SortOptionsIcon } from '@table-library/react-table-library/types/sort';
import cls from './TableBase.module.scss';

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

export const defaultTableStyles = {
  Row: `
		&.row-select-selected, &.row-select-single-selected {
			background-color: var(--gray-20);
			font-weight: normal;
		}
	`,
  HeaderCell: `&.th {
		padding: 14px 12px;
		border-bottom: 1px solid var(--gray-30)
	}`,
  Cell: `&.td {
		border-bottom: 1px solid var(--gray-30)
	}`,
};

export const defaultSortIcon: SortOptionsIcon = {
  margin: 'var(--space-extra-small)',
  iconDefault: null,
  iconUp: <span className='icon-arrow-up2' />,
  iconDown: <span className='icon-arrow-down2' />,
};

export const TableBase = <T extends TableNode>({
  columns,
  data,
  themeProps,
  ...rest
}: TableBaseProps<T>) => {
  const theme = useTheme([
    getTheme(),
    {
      ...defaultTableStyles,
      ...themeProps,
    },
  ]);

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

TableBase.displayName = 'TableBase';

import React, { type FC } from 'react';
import Pagination, { type PaginationProps } from 'rc-pagination';
import cls from './Paginate.module.scss';

export const Paginate: FC<PaginationProps> = (props) => {
	const { onChange, total, pageSize, current } = props;

	return (
		<Pagination
			total={total}
			pageSize={pageSize}
			onChange={onChange}
			current={current}
			className={cls.Paginate}
			prevIcon='<'
			nextIcon='>'
			jumpPrevIcon='...'
			jumpNextIcon='...'
		/>
	);
};

Paginate.displayName = 'Paginate';

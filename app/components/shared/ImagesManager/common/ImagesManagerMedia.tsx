import React, { FC } from 'react';
import cls from '../ImagesManager.module.scss';
import {
	ImagesManagerMediaFilter,
	ImageFilterProps,
} from './ImagesManagerMediaFilter';

interface ImagesManagerMediaProps {}

export const ImagesManagerMedia: FC<ImagesManagerMediaProps> = (props) => {
	const handleFilters = (value: ImageFilterProps) => {
		console.log(value);
	};

	return (
		<div className={cls.ImagesManagerMedia}>
			<div className={cls.ImagesManagerMediaMain}>
				<ImagesManagerMediaFilter onSelect={handleFilters} />
			</div>
			<div className={cls.ImagesManagerMediaSidebar}></div>
		</div>
	);
};

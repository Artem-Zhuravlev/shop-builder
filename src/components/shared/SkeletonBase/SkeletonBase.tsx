import React, { type FC } from 'react';
import cls from './SkeletonBase.module.scss';

interface SkeletonBaseProps {
	width: string;
	height: string;
}

export const SkeletonBase: FC<SkeletonBaseProps> = (props) => {
	const { width, height } = props;
	return (
		<div className={cls.SkeletonBase} style={{ maxWidth: width, height }} />
	);
};

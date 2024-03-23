import React, { FC, ReactNode } from 'react';
import classNames from 'classnames';
import cls from './HeadingBase.module.scss';

interface HeadingProps {
	level: 1 | 2 | 3 | 4 | 5 | 6;
	className?: string;
	children: ReactNode;
}

export const HeadingBase: FC<HeadingProps> = (props) => {
	const { level, children, className } = props;

	const Tag = `h${level}` as keyof JSX.IntrinsicElements;

	const headingClasses = classNames(cls[`h${level}`], className);

	return <Tag className={headingClasses}>{children}</Tag>;
};

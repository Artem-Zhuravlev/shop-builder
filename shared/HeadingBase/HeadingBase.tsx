import React, { FC, ReactNode } from 'react';
import classNames from 'classnames';
import cls from './HeadingBase.module.scss';

interface HeadingProps {
	level: 1 | 2 | 3 | 4 | 5 | 6;
	className?: string;
	children: ReactNode;
	additionalClass?: string;
}

export const HeadingBase: FC<HeadingProps> = (props) => {
	const {
		level,
		children,
		className = `h${props.level}`,
		additionalClass = '',
	} = props;

	const Tag = `h${level}` as keyof JSX.IntrinsicElements;

	const headingClasses = classNames(cls[className], additionalClass);

	return <Tag className={headingClasses}>{children}</Tag>;
};

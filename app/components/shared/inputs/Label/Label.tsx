import React, { ReactNode, FC } from 'react';
import classNames from 'classnames';
import cls from './Label.module.scss';

interface LabelProps {
	children: ReactNode;
	className?: string;
	error?: string;
	hasError?: boolean;
}

export const Label: FC<LabelProps> = (props) => {
	const { children, className, error, hasError } = props;
	const labelClasses = classNames(cls.Label, className);

	return (
		<div className={labelClasses}>
			{children}
			{hasError && <span className={cls.ErrorMessage}>{error}</span>}
		</div>
	);
};

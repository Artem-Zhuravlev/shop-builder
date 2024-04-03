import React, { ReactNode, FC } from 'react';
import classNames from 'classnames';
import cls from './Label.module.scss';

interface LabelProps {
	children: ReactNode;
	hasError?: boolean;
	error?: string;
	suffix?: ReactNode;
	className?: string;
}

export const Label: FC<LabelProps> = ({
	children,
	hasError,
	error,
	suffix,
	className,
}) => {
	const labelClasses = classNames(cls.Label, className);

	return (
		<div className={labelClasses}>
			{children}
			{suffix}
			{hasError && <span className={cls.ErrorMessage}>{error}</span>}
		</div>
	);
};

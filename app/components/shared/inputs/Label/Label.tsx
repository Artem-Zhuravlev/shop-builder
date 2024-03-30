import React, { ReactNode, FC, useState } from 'react';
import cls from './Label.module.scss';

interface LabelProps {
	children: ReactNode;
	hasError?: boolean;
	error?: string;
	suffix?: ReactNode;
}

export const Label: FC<LabelProps> = ({
	children,
	hasError,
	error,
	suffix,
}) => {
	return (
		<div className={cls.Label}>
			{children}
			{suffix}
			{hasError && <span className={cls.ErrorMessage}>{error}</span>}
		</div>
	);
};

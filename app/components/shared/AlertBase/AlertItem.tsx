import React, { FC } from 'react';
import cls from './AlertBase.module.scss';
import classNames from 'classnames';

export interface IAlertItem {
	type: 'error' | 'success';
	message: string;
}
interface AlertProps extends IAlertItem {
	onClose: (index: number) => void;
	index: number;
}

export const AlertItem: FC<AlertProps> = (props) => {
	const { type = 'success', message, onClose, index } = props;

	const alertClasses = classNames(
		cls.AlertItem,
		type === 'success' && cls.success,
		type === 'error' && cls.error
	);

	const handleClose = () => {
		onClose(index);
	};

	return (
		<div
			data-testid='alert-item'
			className={alertClasses}>
			{message}
			<button
				data-testid='alert-close'
				type='button'
				className={cls.AlertButton}
				onClick={handleClose}>
				<span className='icon-cross' />
			</button>
		</div>
	);
};

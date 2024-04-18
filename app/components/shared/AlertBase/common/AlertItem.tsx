import React, { FC } from 'react';
import cls from '../AlertBase.module.scss';
import classNames from 'classnames';

export interface AlertItemProps {
	index: number;
	message: string;
	type: 'error' | 'success';
	onClose: (index: number) => void;
}

export const AlertItem: FC<AlertItemProps> = (props) => {
	const { index, message, type = 'success', onClose } = props;

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

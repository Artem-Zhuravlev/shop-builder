import classNames from 'classnames';
import { useTranslations } from 'next-intl';
import React, { type FC } from 'react';
import cls from '../AlertBase.module.scss';

export interface AlertItemInterface {
	message: string;
	type: 'error' | 'success';
}

export interface AlertItemProps extends AlertItemInterface {
	index: number;
	onClose: (index: number) => void;
}

export const AlertItem: FC<AlertItemProps> = (props) => {
	const { index, message, type = 'success', onClose } = props;
	const t = useTranslations('base');

	const alertClasses = classNames(
		cls.AlertItem,
		type === 'success' && cls.success,
		type === 'error' && cls.error,
	);

	const handleClose = () => {
		onClose(index);
	};

	return (
		<div data-testid='alert-item' className={alertClasses}>
			{message}
			<button
				data-testid='alert-close'
				type='button'
				className={cls.AlertButton}
				aria-label={t('close')}
				onClick={handleClose}
			>
				<span className='icon-cross' />
			</button>
		</div>
	);
};

AlertItem.displayName = 'AlertItem';

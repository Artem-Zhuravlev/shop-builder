import React, { type FC, type ReactNode } from 'react';
import 'react-responsive-modal/styles.css';
import cls from './ModalWindow.module.scss';
import classNames from 'classnames';
import { ButtonBase } from '@/components/shared/ButtonBase';
import { useTranslations } from 'next-intl';
import { Modal } from 'react-responsive-modal';

interface ModalWindowProps {
	children: ReactNode;
	title?: string;
	open: boolean;
	size?: 'xxl';
	textSubmit?: string;
	textCancel?: string;
	onSave?: () => void;
	onClose: (value: boolean) => void;
	onCancel?: () => void;
}

export const ModalWindow: FC<ModalWindowProps> = ({
	children,
	title,
	size,
	textSubmit,
	textCancel,
	onSave,
	open,
	onClose,
	onCancel,
}) => {
	const t = useTranslations('base');

	const handleClose = () => onClose(false);

	const handleCancel = () => {
		onClose(false);
		if (onCancel) onCancel();
	};

	const handleSave = () => {
		onClose(false);
		if (onSave) onSave();
	};

	const renderFooter = () => (
		<div className={cls.ModalFooter}>
			<ButtonBase onClick={handleSave}>{textSubmit ?? t('save')}</ButtonBase>
			<ButtonBase variant='outline' onClick={handleCancel}>
				{textCancel ?? t('cancel')}
			</ButtonBase>
		</div>
	);

	return (
		<Modal
			open={open}
			onClose={handleClose}
			center
			blockScroll={false}
			closeIcon={<span className='icon-cross' />}
			classNames={{
				overlay: cls.ModalBackdrop,
				modal: classNames(cls.ModalWindow, cls[`${size}`]),
				closeButton: cls.ModalBtn,
			}}
		>
			{title && <h3 className={cls.ModalTitle}>{title}</h3>}
			{children && <div className={cls.ModalContent}>{children}</div>}
			{onSave && renderFooter()}
		</Modal>
	);
};

ModalWindow.displayName = 'ModalWindow';

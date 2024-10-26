import { ModalWindow } from '@/components/shared/ModalWindow';
import { useTranslations } from 'next-intl';
import React, { type FC } from 'react';

interface ConfirmModalProps {
	isOpen: boolean;
	onClose: () => void;
	onConfirm: () => void;
}

export const ConfirmModal: FC<ConfirmModalProps> = (props) => {
	const { isOpen, onClose, onConfirm } = props;
	const t = useTranslations();

	return (
		<ModalWindow
			textSubmit={t('base.accept')}
			onSave={onConfirm}
			open={isOpen}
			onClose={onClose}
		>
			<p>{t('alerts.confirm_alert')}</p>
		</ModalWindow>
	);
};

ConfirmModal.displayName = 'ConfirmModal';

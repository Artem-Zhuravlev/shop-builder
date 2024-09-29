import { ModalWindow } from '@/components/shared/ModalWindow';
import { useTranslations } from 'next-intl';
import React, { useState, type FC } from 'react';

export const ConfirmModal: FC = () => {
	const t = useTranslations();

	const handleConfirm = () => {};

	return (
		<ModalWindow textSubmit={t('base.accept')} onSubmit={handleConfirm}>
			<p>{t('alerts.confirm_alert')}</p>
		</ModalWindow>
	);
};

ConfirmModal.displayName = 'ConfirmModal';

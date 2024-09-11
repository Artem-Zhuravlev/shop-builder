import React, { type FC, useMemo } from 'react';
import { AlertBase } from '@/components/shared/AlertBase/AlertBase';
import { useTranslations } from 'next-intl';

interface FormAlertProps {
	submitSucceeded: boolean;
}

export const SuccessAlert: FC<FormAlertProps> = ({ submitSucceeded }) => {
	const t = useTranslations('alerts');

	const alertContent = useMemo(() => {
		return submitSucceeded ? (
			<AlertBase
				alerts={[
					{
						type: 'success',
						message: t('form_success'),
					},
				]}
			/>
		) : null;
	}, [submitSucceeded]);

	return <>{alertContent}</>;
};

SuccessAlert.displayName = 'SuccessAlert';

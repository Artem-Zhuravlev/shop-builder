import React, { type FC, useMemo } from 'react';
import { AlertBase } from '@/components/shared/AlertBase/AlertBase';
import { useTranslations } from 'next-intl';

interface FormAlertProps {
	submitFailed: boolean;
}

export const ErrorAlert: FC<FormAlertProps> = ({ submitFailed }) => {
	const t = useTranslations('alerts');

	const alertContent = useMemo(() => {
		return submitFailed ? (
			<AlertBase
				alerts={[
					{
						type: 'error',
						message: t('missing_required_fields'),
					},
				]}
			/>
		) : null;
	}, [submitFailed]);

	return <>{alertContent}</>;
};

ErrorAlert.displayName = 'ErrorAlert';

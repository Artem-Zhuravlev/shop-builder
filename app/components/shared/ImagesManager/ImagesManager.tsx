import React, { FC } from 'react';
import { useTranslations } from 'next-intl';
import { TabsBase } from '@shared/TabsBase';
import { ModalWindow } from '@shared/ModalWindow';

interface ImagesManagerProps {
	title?: string;
	visibility: boolean;
}

export const ImagesManager: FC<ImagesManagerProps> = (props) => {
	const { title, visibility } = props;
	const t = useTranslations();

	const tabs = [
		{
			label: t('base.download_files'),
			description: 'download files',
		},
		{
			label: t('base.media_library'),
			description: 'description',
		},
	];

	return (
		<ModalWindow
			visibility={visibility}
			size='xxl'
			title={title}>
			<TabsBase items={tabs} />
		</ModalWindow>
	);
};

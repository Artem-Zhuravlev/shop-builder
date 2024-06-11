import React, { FC, useState } from 'react';
import { useTranslations } from 'next-intl';
import { TabsBase } from '@shared/TabsBase';
import { ModalWindow } from '@shared/ModalWindow';
import { ImagesManagerDownload, ImagesManagerMedia } from './common';

interface ImagesManagerProps {
	title?: string;
	visibility: boolean;
}

export const ImagesManager: FC<ImagesManagerProps> = ({
	title,
	visibility,
}) => {
	const [activeTab, setActiveTab] = useState(0);
	const t = useTranslations();

	const handleActiveTab = (index: number) => {
		setActiveTab(index);
	};

	const tabs = [
		{
			label: t('base.download_files'),
			description: <ImagesManagerDownload handleActiveTab={handleActiveTab} />,
		},
		{
			label: t('base.media_library'),
			description: <ImagesManagerMedia />,
		},
	];

	return (
		<ModalWindow
			visibility={visibility}
			size='xxl'
			title={title}>
			<TabsBase
				items={tabs}
				activeTab={activeTab}
			/>
		</ModalWindow>
	);
};

import React, { FC, useState } from 'react';
import { useTranslations } from 'next-intl';
import { TabsBase } from '@shared/TabsBase';
import { ModalWindow } from '@shared/ModalWindow';
import {
	ImagesManagerDownload,
	ImagesManagerMedia,
	MediaProps,
} from './common';
import cls from './ImagesManager.module.scss';

interface ImagesManagerProps {
	title?: string;
	visibility: boolean;
}

export const ImagesManager: FC<ImagesManagerProps> = ({
	title,
	visibility,
}) => {
	const [activeTab, setActiveTab] = useState(0);
	const [media, setMedia] = useState<MediaProps | null>(null);
	const t = useTranslations();

	const handleActiveTab = (index: number) => {
		setActiveTab(index);
	};

	const handleSubmit = () => {
		// TODO: handle submit
		setActiveTab(0);
		console.log(media);
	};

	const handleSelectMedia = (image: MediaProps) => {
		setMedia(image);
	};

	const tabs = [
		{
			label: t('admin.download_files'),
			description: <ImagesManagerDownload handleActiveTab={handleActiveTab} />,
		},
		{
			label: t('admin.media_library'),
			description: <ImagesManagerMedia onSelectMedia={handleSelectMedia} />,
		},
	];

	return (
		<ModalWindow
			visibility={visibility}
			size='xxl'
			title={title}
			onSubmit={handleSubmit}>
			<TabsBase
				items={tabs}
				activeTab={activeTab}
				className={cls.ImagesManager}
			/>
		</ModalWindow>
	);
};

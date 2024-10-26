'use client';
import type { ImageMetaProps } from '@/lib/types/ImageMetaProps';
import { ModalWindow } from '@/components/shared/ModalWindow';
import { TabsBase } from '@/components/shared/TabsBase';
import { useTranslations } from 'next-intl';
import React, { useState, type FC } from 'react';
import cls from './ImagesManager.module.scss';
import {
	ImagesManagerDownload,
	ImagesManagerMedia,
	type MediaProps,
} from './common';

interface ImagesManagerProps {
	title?: string;
	onSubmit: (value: ImageMetaProps | null) => void;
	open: boolean;
	onClose: (value: boolean) => void;
}

export const ImagesManager: FC<ImagesManagerProps> = ({
	title,
	onSubmit,
	open,
	onClose,
}) => {
	const [activeTab, setActiveTab] = useState(0);
	const [media, setMedia] = useState<ImageMetaProps | null>(null);
	const t = useTranslations();

	const handleActiveTab = (index: number) => {
		setActiveTab(index);
	};

	const handleSubmit = () => {
		// TODO: handle submit
		setActiveTab(0);
		onSubmit(media);
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
			size='xxl'
			title={title ?? t('admin.image_manager')}
			onSave={handleSubmit}
			open={open}
			onClose={onClose}
		>
			<TabsBase items={tabs} activeTab={activeTab} />
		</ModalWindow>
	);
};

ImagesManager.displayName = 'ImagesManager';

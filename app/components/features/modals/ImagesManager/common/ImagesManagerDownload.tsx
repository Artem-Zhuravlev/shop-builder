import { DropzoneBase } from '@shared/DropzoneBase';
import React, { type FC } from 'react';
import cls from '../ImagesManager.module.scss';

interface ImagesManagerDownloadProps {
	handleActiveTab: (activeTab: number) => void;
}

export const ImagesManagerDownload: FC<ImagesManagerDownloadProps> = (
	props,
) => {
	const { handleActiveTab } = props;

	const onDropAccepted = (files: File[]) => {
		// TODO: add download images logic
		handleActiveTab(1);
	};

	return (
		<div className={cls.ImagesManagerDownload}>
			<DropzoneBase onDropAccepted={onDropAccepted} />
		</div>
	);
};

ImagesManagerDownload.displayName = 'ImagesManagerDownload';

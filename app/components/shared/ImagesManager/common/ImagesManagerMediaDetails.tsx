import React, { FC } from 'react';
import { useTranslations } from 'next-intl';
import cls from '../ImagesManager.module.scss';
import { ButtonBase } from '@shared/ButtonBase';

interface ImagesManagerMediaDetailsProps {
	image: string;
	fileName: string;
	publishedAt: string;
	size: string;
	resolution: string;
}

export const ImagesManagerMediaDetails: FC<ImagesManagerMediaDetailsProps> = (
	props
) => {
	const { image, fileName, publishedAt, size, resolution } = props;
	const t = useTranslations('');

	return (
		<div className={cls.ImagesManagerMediaDetails}>
			<h3 className='h5'>{t('admin.attach_file_details')}</h3>
			<img
				src={image}
				alt=''
				className={cls.ImagesManagerMediaDetailsImage}
			/>
			<ul className={cls.ImagesManagerMediaDetailsList}>
				<li className={cls.ImagesManagerMediaDetailsItem}>
					<b>{fileName}</b>
				</li>
				<li className={cls.ImagesManagerMediaDetailsItem}>
					{new Date(publishedAt).toLocaleDateString()}
				</li>
				<li className={cls.ImagesManagerMediaDetailsItem}>{size}</li>
				<li className={cls.ImagesManagerMediaDetailsItem}>{resolution}</li>
				<li className={cls.ImagesManagerMediaDetailsItem}>{resolution}</li>
				<li className={cls.ImagesManagerMediaDetailsItem}>
					<ButtonBase variant='danger'>{t('base.delete')}</ButtonBase>
				</li>
			</ul>
		</div>
	);
};

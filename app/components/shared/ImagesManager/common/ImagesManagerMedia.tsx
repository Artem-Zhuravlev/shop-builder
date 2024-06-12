import React, { FC, useEffect, useState } from 'react';
import cls from '../ImagesManager.module.scss';
import {
	ImagesManagerMediaFilter,
	ImageFilterProps,
} from './ImagesManagerMediaFilter';

import { ImagesManagerMediaDetails } from './ImagesManagerMediaDetails';

interface ImagesManagerMediaProps {
	onSelectMedia: (image: MediaProps) => void;
}

export interface MediaProps {
	id: number;
	url: string;
	alt: string;
}

export const ImagesManagerMedia: FC<ImagesManagerMediaProps> = (props) => {
	const { onSelectMedia } = props;
	const [images, setImages] = useState<MediaProps[]>([]);
	const handleFilters = (value: ImageFilterProps) => {
		console.log(value);
	};

	useEffect(() => {
		setImages([
			{
				id: 1,
				url: 'https://picsum.photos/200/300',
				alt: 'image',
			},
			{
				id: 2,
				url: 'https://picsum.photos/200/300',
				alt: 'image 2',
			},
			{
				id: 3,
				url: 'https://picsum.photos/200/300',
				alt: 'image 3',
			},
		]);
	}, []);

	const handleFileChange = (image: MediaProps) => {
		// TODO: Image details by image id
		// TODO: Logic for selected image
		onSelectMedia({
			id: 3,
			url: 'https://picsum.photos/200/300',
			alt: 'image 3',
		});
	};

	return (
		<div className={cls.ImagesManagerMedia}>
			<div className={cls.ImagesManagerMediaMain}>
				<ImagesManagerMediaFilter onSelect={handleFilters} />
				<div className={cls.ImagesManagerMediaContent}>
					{images.map((image) => (
						<button
							key={image.id}
							className={cls.ImagesManagerMediaItem}
							onClick={() => handleFileChange(image)}>
							<img
								src={image.url}
								alt={image.alt}
							/>
						</button>
					))}
				</div>
			</div>
			<div className={cls.ImagesManagerMediaSidebar}>
				<ImagesManagerMediaDetails
					image={images[1]?.url}
					fileName='partner-6-1.jpg'
					publishedAt='2024-05-06'
					size='1.5 MB'
					resolution='1024 x 768'
				/>
			</div>
		</div>
	);
};

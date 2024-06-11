import React, { FC, useEffect, useState } from 'react';
import cls from '../ImagesManager.module.scss';
import {
	ImagesManagerMediaFilter,
	ImageFilterProps,
} from './ImagesManagerMediaFilter';

interface ImagesManagerMediaProps {}

interface Image {
	id: number;
	url: string;
	alt: string;
}

export const ImagesManagerMedia: FC<ImagesManagerMediaProps> = (props) => {
	const [images, setImages] = useState<Image[]>([]);
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

	const handleFileChange = (image: Image) => {
		// TODO: Image details by image id
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
			<div className={cls.ImagesManagerMediaSidebar}></div>
		</div>
	);
};

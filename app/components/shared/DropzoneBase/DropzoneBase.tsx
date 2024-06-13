import React, { useCallback, FC } from 'react';
import {
	useDropzone,
	DropzoneOptions,
	DropEvent,
	FileRejection,
} from 'react-dropzone';
import { useTranslations } from 'next-intl';
import classNames from 'classnames';
import cls from './DropzoneBase.module.scss';

interface DropzoneBaseProps extends DropzoneOptions {
	textDrag?: string;
	textDragActive?: string;
	textMaxSize?: string;
}

export const DropzoneBase: FC<DropzoneBaseProps> = (props) => {
	const {
		textDrag,
		textDragActive,
		textMaxSize,
		onDropAccepted,
		...dropzoneOptions
	} = props;
	const t = useTranslations();

	const onDrop = useCallback(
		(
			acceptedFiles: File[],
			fileRejections: FileRejection[],
			event: DropEvent
		) => {
			if (onDropAccepted) {
				onDropAccepted(acceptedFiles, event);
			}
		},
		[onDropAccepted]
	);

	const { getRootProps, getInputProps, isDragActive } = useDropzone({
		onDrop,
		...dropzoneOptions,
	});

	return (
		<div
			className={classNames(cls.DropzoneBase, {
				[cls.DropzoneBaseSelected]: isDragActive,
			})}
			{...getRootProps()}>
			<input {...getInputProps()} />
			{isDragActive ? (
				<p>{textDragActive ?? t('inputs.dropzone_active')} </p>
			) : (
				<p>{textDrag ?? t('inputs.dropzone')}</p>
			)}
			{textMaxSize && <p>{textMaxSize}</p>}
		</div>
	);
};

DropzoneBase.displayName = 'DropzoneBase';

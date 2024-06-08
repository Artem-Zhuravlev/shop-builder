import React, { useCallback, FC } from 'react';
import { useDropzone } from 'react-dropzone';
import { useTranslations } from 'next-intl';
import classNames from 'classnames';
import cls from './DropzoneBase.module.scss';

interface DropzoneBaseProps {
	onDropAccepted?: (acceptedFiles: File[]) => void;
	textDrag?: string;
	textDragActive?: string;
  textMaxSize?: string;
}

export const DropzoneBase: FC<DropzoneBaseProps> = (props) => {
	const { textDrag, textDragActive, textMaxSize, onDropAccepted } = props;
	const t = useTranslations();

	const onDrop = useCallback(
		(acceptedFiles: File[]) => {
			if (onDropAccepted) {
				onDropAccepted(acceptedFiles);
			}
		},
		[onDropAccepted]
	);

	const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });

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

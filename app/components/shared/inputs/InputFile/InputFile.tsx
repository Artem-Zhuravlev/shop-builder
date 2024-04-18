import React, { ChangeEvent, FC, useRef, ReactNode } from 'react';
import { ButtonBase } from '../../ButtonBase';

interface InputFileProps {
	children?: ReactNode;
	handleFile: (file: File) => void;
}

export const InputFile: FC<InputFileProps> = (props) => {
	const { handleFile, children } = props;
	const hiddenFileInput = useRef<HTMLInputElement>(null);

	const handleClick = (): void => {
		if (hiddenFileInput.current) {
			hiddenFileInput.current.click();
		}
	};

	const handleChange = (event: ChangeEvent<HTMLInputElement>): void => {
		const fileInput = event.target;

		if (fileInput.files && fileInput.files.length > 0) {
			const fileUploaded = fileInput.files[0];
			handleFile(fileUploaded);
		} else {
			console.error('No file selected.');
		}
	};

	return (
		<>
			<ButtonBase onClick={handleClick}>
				{children ? children : 'Upload a file'}
			</ButtonBase>

			<input
				type='file'
				onChange={handleChange}
				ref={hiddenFileInput}
				style={{ display: 'none' }}
			/>
		</>
	);
};

'use client';
import React, { FC, ReactNode, useState, useEffect } from 'react';
import cls from './ModalWindow.module.scss';

interface ModalWindowProps {
	children: ReactNode;
	title?: string;
	visibility: boolean;
	onClose: (visible: boolean) => void;
}

export const ModalWindow: FC<ModalWindowProps> = (props) => {
	const { children, title, visibility = false, onClose } = props;
	const [visible, setVisible] = useState(visibility);

	const handleClose = () => {
		setVisible(false);
		onClose(false);
	};

	useEffect(() => {
		const handleKeyPress = (event: KeyboardEvent) => {
			if (event.key === 'Escape') {
				handleClose();
			}
		};

		if (visible) {
			window.addEventListener('keydown', handleKeyPress);
		} else {
			window.removeEventListener('keydown', handleKeyPress);
		}

		return () => {
			window.removeEventListener('keydown', handleKeyPress);
		};
	}, [visible, handleClose]);

	return (
		<>
			{visible && (
				<div
					className={cls.ModalBackdrop}
					onClick={handleClose}>
					<div
						className={cls.ModalWindow}
						onClick={(event) => event.stopPropagation()}>
						{title && <h3 className={cls.ModalTitle}>{title}</h3>}
						<button
							type='button'
							className={cls.ModalBtn}
							onClick={handleClose}>
							<span className='icon-cross' />
						</button>
						{children}
					</div>
				</div>
			)}
		</>
	);
};

export default ModalWindow;

'use client';
import { useModal } from '@lib/modalProvider/ModalContext';
import type { modalTypes } from '@lib/modalProvider/modalTypes';
import { ButtonBase } from '@shared/ButtonBase';
import classNames from 'classnames';
import { useTranslations } from 'next-intl';
import React, { type FC, type ReactNode, useEffect } from 'react';
import cls from './ModalWindow.module.scss';

interface ModalWindowProps {
	children: ReactNode;
	title?: string;
	modalType: keyof typeof modalTypes;
	size?: 'xxl';
	textSubmit?: string;
	onSubmit?: () => void;
}

export const ModalWindow: FC<ModalWindowProps> = (props) => {
	const { children, modalType, title, size, textSubmit, onSubmit } = props;
	const { modalTypes, closeModal } = useModal();
	const isVisible = modalTypes[modalType];

	const t = useTranslations('base');

	const handleClose = () => {
		closeModal(modalType);
	};

	const handleSubmit = () => {
		if (onSubmit) {
			onSubmit();
		}
		closeModal(modalType);
	};

	useEffect(() => {
		const handleKeyPress = (event: KeyboardEvent) => {
			if (event.key === 'Escape') {
				handleClose();
			}
		};

		if (isVisible) {
			window.addEventListener('keydown', handleKeyPress);
		} else {
			window.removeEventListener('keydown', handleKeyPress);
		}

		return () => {
			window.removeEventListener('keydown', handleKeyPress);
		};
	}, [isVisible]);

	return (
		<>
			{isVisible && (
				<div className={cls.ModalBackdrop} onClick={handleClose}>
					<div
						className={classNames(cls.ModalWindow, cls[`${size}`])}
						onClick={(event) => event.stopPropagation()}
					>
						{title && <h3 className={cls.ModalTitle}>{title}</h3>}
						<button
							data-testid='close'
							type='button'
							className={cls.ModalBtn}
							onClick={handleClose}
							aria-label={t('close')}
						>
							<span className='icon-cross' />
						</button>
						{children && <div className={cls.ModalContent}>{children}</div>}
						{onSubmit && (
							<div className={cls.ModalFooter}>
								<ButtonBase onClick={handleSubmit}>
									{textSubmit ?? t('save')}
								</ButtonBase>
							</div>
						)}
					</div>
				</div>
			)}
		</>
	);
};

ModalWindow.displayName = 'ModalWindow';

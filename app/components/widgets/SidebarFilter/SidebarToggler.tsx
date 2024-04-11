import React, { FC, ReactNode, useState } from 'react';
import classNames from 'classnames';
import { useTranslations } from 'next-intl';
import cls from './SidebarFilter.module.scss';
import { TooltipBase } from '@shared/TooltipBase/TooltipBase';

interface SidebarTogglerProps {
	title: string;
	children: ReactNode;
	resetMode?: boolean;
	onReset?: (value: boolean) => void;
}

export const SidebarToggler: FC<SidebarTogglerProps> = (props) => {
	const { title, children, resetMode = false, onReset } = props;
	const [isOpen, setIsOpen] = useState(true);
	const t = useTranslations('base');

	const handleReset = () => {
		if (onReset) {
			onReset(false);
		}
	};

	return (
		<div className={cls.SidebarToggler}>
			<button
				type='button'
				onClick={() => setIsOpen(!isOpen)}
				className={classNames(cls.SidebarCollapseBtn, {
					[cls.buttonClose]: !isOpen,
				})}>
				{title}
			</button>
			{resetMode && (
				<TooltipBase content={t('clear')}>
					<button
						type='button'
						className={cls.SidebarResetBtn}
						onClick={handleReset}
						aria-label={t('clear')}>
						<span className='icon-cross' />
					</button>
				</TooltipBase>
			)}
			<div
				className={classNames(cls.SidebarContentWrapper, {
					[cls.contentClose]: !isOpen,
				})}>
				<div className={cls.SidebarContent}>{children}</div>
			</div>
		</div>
	);
};

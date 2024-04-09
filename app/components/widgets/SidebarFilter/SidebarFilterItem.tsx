import React, { FC, ReactNode, useState } from 'react';
import classNames from 'classnames';
import cls from './SidebarFilter.module.scss';
import { TooltipBase } from '@shared/TooltipBase/TooltipBase';

interface SidebarFilterItemProps {
	title: string;
	children: ReactNode;
	resetMode?: boolean;
	onReset?: (value: boolean) => void;
}

export const SidebarFilterItem: FC<SidebarFilterItemProps> = (props) => {
	const { title, children, resetMode = false, onReset } = props;
	const [isOpen, setIsOpen] = useState(true);

	const handleReset = () => {
		if (onReset) {
			onReset(false);
		}
	};

	return (
		<div className={cls.SidebarFilterItem}>
			<button
				type='button'
				onClick={() => setIsOpen(!isOpen)}
				className={classNames(cls.SidebarFilterCollapseBtn, {
					[cls.buttonClose]: !isOpen,
				})}>
				{title}
			</button>
			{resetMode && (
				<TooltipBase content='Clear'>
					<button
						type='button'
						className={cls.SidebarFilterResetBtn}
						onClick={handleReset}
						aria-label='Clear'>
						<span className='icon-cross' />
					</button>
				</TooltipBase>
			)}
			<div
				className={classNames(cls.SidebarFilterItemContentWrapper, {
					[cls.contentClose]: !isOpen,
				})}>
				<div className={cls.SidebarFilterItemContent}>{children}</div>
			</div>
		</div>
	);
};

'use client';
import React, { type ReactNode, useId, type FC } from 'react';
import { Tooltip } from 'react-tooltip';

interface TooltipBaseProps {
	children: ReactNode;
	content: string;
	displayMode?: 'flex' | 'inline-flex';
}

export const TooltipBase: FC<TooltipBaseProps> = (props) => {
	const { children, content, displayMode = 'inline-flex' } = props;
	const id = useId();

	return (
		<>
			<div
				data-tooltip-id={id}
				data-tooltip-content={content}
				style={{ display: displayMode, alignItems: 'center' }}
			>
				{children}
			</div>
			<Tooltip id={id} style={{ zIndex: 10 }} />
		</>
	);
};

TooltipBase.displayName = 'TooltipBase';

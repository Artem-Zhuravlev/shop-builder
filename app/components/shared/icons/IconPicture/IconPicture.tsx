import React, { type FC } from 'react';

export const IconPicture: FC = () => {
	return (
		// biome-ignore lint/a11y/noSvgWithoutTitle: <explanation>
		<svg
			xmlns='http://www.w3.org/2000/svg'
			width='800'
			height='800'
			viewBox='0 0 24 24'
		>
			<path
				d='M3 22h18a1 1 0 0 0 1-1V3a1 1 0 0 0-1-1H3a1 1 0 0 0-1 1v18a1 1 0 0 0 1 1Zm2.414-2L10 15.414l1.293 1.293a1 1 0 0 0 1.414 0L17 12.414l3 3V20ZM20 4v8.586l-2.293-2.293a1 1 0 0 0-1.414 0L12 14.586l-1.293-1.293a1 1 0 0 0-1.414 0L4 18.586V4ZM6 8.5A2.5 2.5 0 1 1 8.5 11 2.5 2.5 0 0 1 6 8.5Z'
				fill='currentColor'
			/>
		</svg>
	);
};

IconPicture.displayName = 'IconPicture';

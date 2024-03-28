import React, { FC, HTMLProps } from 'react';

type ObjectFit = 'fill' | 'contain' | 'cover' | 'none' | 'scale-down';

interface ImageProps extends HTMLProps<HTMLImageElement> {
	objectFit?: ObjectFit;
	objectPosition?: string;
}

const Image: FC<ImageProps> = ({
	children,
	className,
	objectFit,
	objectPosition,
	src,
	style,
	...restProps
}) => {
	return (
		<img
			className={className}
			src={src}
			style={{
				...style,
				objectFit,
				objectPosition,
			}}
			{...restProps}>
			{children}
		</img>
	);
};

export default Image;

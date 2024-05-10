import React, { ButtonHTMLAttributes, FC } from 'react';
import classNames from 'classnames';
import cls from './ButtonBase.module.scss';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
	block?: boolean;
	className?: string;
	disabled?: boolean;
	isLoading?: boolean;
	large?: boolean;
	rounded?: boolean;
	roundedLeftSide?: boolean;
	roundedRightSide?: boolean;
	small?: boolean;
	type?: 'submit' | 'button';
	variant?:
		| 'primary'
		| 'secondary'
		| 'link'
		| 'success'
		| 'danger'
		| 'warning'
		| 'info'
		| 'light'
		| 'dark'
		| 'outline';
}

export const ButtonBase: FC<ButtonProps> = (props) => {
	const {
		block,
		children,
		className,
		disabled,
		isLoading,
		large,
		onClick,
		rounded,
		roundedLeftSide = false,
		roundedRightSide = false,
		small,
		type = 'button',
		variant = 'primary',
		...rest
	} = props;

	const buttonClasses = classNames(cls.ButtonBase, cls[variant], className, {
		[cls.block]: block,
		[cls.large]: large,
		[cls.loading]: isLoading,
		[cls.rounded]: rounded,
		[cls.roundedLeftSide]: roundedLeftSide,
		[cls.roundedRightSide]: roundedRightSide,
		[cls.small]: small,
	});

	return (
		<button
			className={buttonClasses}
			type={type}
			disabled={disabled}
			onClick={onClick}
			{...rest}>
			{isLoading ? <span className='icon-spinner2' /> : null}
			{children}
		</button>
	);
};

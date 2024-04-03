import React, { ButtonHTMLAttributes, FC } from 'react';
import classNames from 'classnames';
import cls from './ButtonBase.module.scss';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
	type?: 'submit' | 'button';
	large?: boolean;
	small?: boolean;
	variant?:
		| 'primary'
		| 'secondary'
		| 'success'
		| 'danger'
		| 'warning'
		| 'info'
		| 'light'
		| 'dark'
		| 'outline';
	className?: string;
	isLoading?: boolean;
	block?: boolean;
	disabled?: boolean;
	roundedLeftSide?: boolean;
	roundedRightSide?: boolean;
	rounded?: boolean;
}

export const ButtonBase: FC<ButtonProps> = (props) => {
	const {
		children,
		large,
		small,
		variant = 'primary',
		className,
		type = 'button',
		isLoading,
		block,
		disabled,
		roundedLeftSide = false,
		roundedRightSide = false,
		rounded = false,
		onClick,
	} = props;

	const buttonClasses = classNames(cls.ButtonBase, cls[variant], className, {
		[cls.large]: large,
		[cls.small]: small,
		[cls.block]: block,
		[cls.loading]: isLoading,
		[cls.roundedLeftSide]: roundedLeftSide,
		[cls.roundedRightSide]: roundedRightSide,
		[cls.rounded]: rounded,
	});

	return (
		<button
			className={buttonClasses}
			type={type}
			disabled={disabled}
			onClick={onClick}>
			{isLoading ? <span className='icon-spinner2' /> : null}
			{children}
		</button>
	);
};

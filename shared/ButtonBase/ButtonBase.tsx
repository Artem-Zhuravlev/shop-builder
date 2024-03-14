import React, { ButtonHTMLAttributes, FC } from 'react';
import classNames from 'classnames';
import cls from './ButtonBase.module.scss';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
	type?: 'submit' | 'button';
	large?: boolean;
	small?: boolean;
	secondary?: boolean;
	outline?: boolean;
	className?: string;
	isLoading?: boolean;
	block?: boolean;
	disabled?: boolean;
}

export const ButtonBase: FC<ButtonProps> = (props) => {
	const {
		children,
		large,
		small,
		secondary,
		outline,
		className = '',
		type = 'button',
		isLoading,
		block,
		disabled,
		onClick,
	} = props;

	const buttonClasses = classNames(
		cls.ButtonBase,
		large ? cls.large : null,
		small ? cls.small : null,
		block ? cls.block : null,
		isLoading ? cls.loading : null,
		secondary ? cls.secondary : null,
		outline ? cls.outline : null,
		className
	);

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

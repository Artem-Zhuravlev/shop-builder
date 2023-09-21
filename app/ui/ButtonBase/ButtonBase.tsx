import React, { ButtonHTMLAttributes, FC } from "react";
import { classNames } from "../../utils/classNames/classNames";
import cls from './ButtonBase.module.scss';

export enum ButtonType {
  SUBMIT = 'submit',
  BUTTON = 'button'
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  buttonType?: ButtonType;
  large?: boolean;
  small?: boolean;
  additionalCls?: string;
  isLoading?: boolean;
  block?: boolean;
  disabled?: boolean;
  onClick?: () => void;
}

export const ButtonBase:FC<ButtonProps> = (props) => {
  const {
    children,
    large,
    small,
    additionalCls = '',
    buttonType = ButtonType.BUTTON,
    isLoading,
    block,
    disabled,
    onClick
  } = props;

  const mods: Record<string, boolean> = {
    [cls.large]: large || false,
    [cls.small]: small || false,
    [cls.block]: block || false,
    [cls.loading]: isLoading || false
  };

  return (
    <button
      className={classNames(cls.ButtonBase, mods, [additionalCls])}
      type={buttonType}
      disabled={disabled}
      onClick={onClick}
    >
      { isLoading ? (<span className="icon-spinner2" />) : children }      
    </button>
  )
}
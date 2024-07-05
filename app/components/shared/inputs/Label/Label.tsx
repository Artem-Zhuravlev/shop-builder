import classNames from 'classnames';
import { FC, ReactNode } from 'react';
import cls from './Label.module.scss';

interface LabelProps {
  children: ReactNode;
  className?: string;
  error?: string;
  hasError?: boolean;
  suffix?: ReactNode;
  prefix?: ReactNode;
}

export const Label: FC<LabelProps> = (props) => {
  const { children, className, error, hasError, suffix, prefix } = props;
  const labelClasses = classNames(cls.Label, className);

  return (
    <div className={labelClasses}>
      {prefix && <div className={cls.prefix}>{prefix}</div>}
      {children}
      {suffix}
      {hasError && <span className={cls.ErrorMessage}>{error}</span>}
    </div>
  );
};

Label.displayName = 'Label';

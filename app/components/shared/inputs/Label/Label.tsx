import classNames from 'classnames';
import { FC, ReactNode } from 'react';
import cls from './Label.module.scss';

interface LabelProps {
  children: ReactNode;
  className?: string;
  error?: string;
  hasError?: boolean;
  suffix?: ReactNode;
}

export const Label: FC<LabelProps> = (props) => {
  const { children, className, error, hasError, suffix } = props;
  const labelClasses = classNames(cls.Label, className);

  return (
    <div className={labelClasses}>
      {children}
      {suffix}
      {hasError && <span className={cls.ErrorMessage}>{error}</span>}
    </div>
  );
};

Label.displayName = 'Label';

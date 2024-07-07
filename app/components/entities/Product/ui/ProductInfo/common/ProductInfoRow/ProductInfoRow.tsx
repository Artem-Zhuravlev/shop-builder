import classNames from 'classnames';
import type { FC, ReactNode } from 'react';
import cls from './ProductInfoRow.module.scss';

interface ProductInfoRowProps {
  className?: string;
  children: ReactNode;
}

export const ProductInfoRow: FC<ProductInfoRowProps> = (props) => {
  const { className, children } = props;

  return (
    <div className={classNames(cls.ProductInfoRow, className)}>{children}</div>
  );
};

ProductInfoRow.displayName = 'ProductInfoRow';

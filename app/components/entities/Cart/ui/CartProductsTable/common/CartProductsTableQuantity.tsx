import { ButtonBase } from '@shared/ButtonBase';
import { InputNumber } from '@shared/inputs';
import type { FC } from 'react';
import { Form } from 'react-final-form';
import cls from '../CartProductsTable.module.scss';

interface CartProductsTableQuantityProps {
  id: string | number;
  quantity: number;
}

export const CartProductsTableQuantity: FC<CartProductsTableQuantityProps> = ({
  id,
  quantity,
}) => {
  const handleSubmit = (values: any) => {
    console.log(values, id);
  };

  return (
    <Form
      onSubmit={handleSubmit}
      initialValues={{ quantity }}
      render={({ handleSubmit }) => (
        <form onSubmit={handleSubmit} className={cls.CartProductsTableQuantity}>
          <InputNumber name='quantity' />
          <ButtonBase type='submit' variant='warning'>
            <span className='icon-loop2' />
          </ButtonBase>
          <ButtonBase variant='danger' style={{ fontSize: '10px' }}>
            <span className='icon-cross' />
          </ButtonBase>
        </form>
      )}
    />
  );
};

CartProductsTableQuantity.displayName = 'CartProductsTableQuantity';

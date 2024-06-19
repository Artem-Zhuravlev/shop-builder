import { ButtonBase } from '@shared/ButtonBase';
import { AutoSave, InputNumber } from '@shared/inputs';
import { useTranslations } from 'next-intl';
import { FC, useState } from 'react';
import { Form } from 'react-final-form';
import cls from './ProductInfoControls.module.scss';

export const ProductInfoControls: FC = () => {
  const [amount, setAmount] = useState(0);
  const t = useTranslations('product');

  const handleSubmit = (values: any) => {
    setAmount(values.amount);
  };

  const handleAddToCart = () => {
    // TODO: add to cart response
  };

  const handleBuyNow = () => {
    // TODO: buy now response it should be modal window with continue shopping or go to checkout
  };

  const handleCompare = () => {
    // TODO: compare response
  };

  return (
    <div className={cls.ProductInfoControls}>
      <Form
        onSubmit={handleSubmit}
        initialValues={{ amount }}
        render={({ handleSubmit }) => (
          <>
            <AutoSave save={handleSubmit} />
            <InputNumber name='amount' />
          </>
        )}
      />
      <ButtonBase onClick={handleAddToCart}>{t('add_to_cart')}</ButtonBase>
      <ButtonBase onClick={handleBuyNow} variant='warning'>
        {t('buy_now')}
      </ButtonBase>
      <ButtonBase
        variant='dark'
        className={cls.compare}
        onClick={handleCompare}>
        <span className='icon-loop2' />
        {t('compare_product')}
      </ButtonBase>
    </div>
  );
};

ProductInfoControls.displayName = 'ProductInfoControls';

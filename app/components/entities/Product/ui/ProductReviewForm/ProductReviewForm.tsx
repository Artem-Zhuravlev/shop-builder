'use client';
import { ButtonBase } from '@shared/ButtonBase';
import { InputRating, InputText, InputTextarea } from '@shared/inputs';
import { useTranslations } from 'next-intl';
import { FC, useState } from 'react';
import { Form } from 'react-final-form';
import cls from './ProductReviewForm.module.scss';

export const ProductReviewForm: FC = () => {
  const [rating, setRating] = useState<number>(1);
  const t = useTranslations();

  const handleRating = (value: number) => {
    setRating(value);
  };

  const sleep = (ms: number) =>
    new Promise((resolve) => setTimeout(resolve, ms));

  const onSubmit = async (values: {
    name: string;
    review: string;
  }): Promise<void> => {
    await sleep(300);
    window.alert(JSON.stringify({ ...values, rating }, null, 2));
  };

  return (
    <div className='form-wrapper'>
      <Form onSubmit={onSubmit}>
        {({ handleSubmit, submitting }) => (
          <form onSubmit={handleSubmit}>
            <h4>{t('inputs.write_review')}</h4>
            <InputRating
              initialValue={rating}
              onClick={handleRating}
              className={cls.ProductReviewFormRating}
            />
            <InputText
              name='name'
              placeholder={t('inputs.your_name')}
              required
            />
            <InputTextarea
              name='review'
              placeholder={t('inputs.review')}
              required
            />
            <ButtonBase type='submit' disabled={submitting}>
              {t('inputs.write_review')}
            </ButtonBase>
          </form>
        )}
      </Form>
    </div>
  );
};

ProductReviewForm.displayName = 'ProductReviewForm';

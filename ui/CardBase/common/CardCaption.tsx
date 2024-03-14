import React, { FC } from 'react';
import Link from 'next/link';
import { InputRating } from '@/ui/inputs/InputRating';
import { HeadingBase } from '@/ui/HeadingBase';
import cls from '../CardBase.module.scss';

interface CardCaptionProps {
  to: string;
  title: string;
  rating: number;
}

export const CardCaption:FC<CardCaptionProps> = ({ to, title, rating }) => {
  return (
    <div
      className={cls.CardCaption}
    >
      <Link
        href={to}
      >
        <HeadingBase level={5}>
          {title}
        </HeadingBase>
      </Link>
      <InputRating
        readonly
        initialValue={rating}
        size={18}
      />
    </div>
  )
}
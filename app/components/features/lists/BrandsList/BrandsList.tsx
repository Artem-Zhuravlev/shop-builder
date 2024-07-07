import { SectionBase } from '@shared/SectionBase';
import Image from 'next/image';
import Link from 'next/link';
import type { FC } from 'react';
import { v4 as uuidv4 } from 'uuid';
import cls from './BrandsList.module.scss';

interface BrandsListProps {
  items?: { image: string; name: string; to: string }[];
  title: string;
}

export const BrandsList: FC<BrandsListProps> = (props) => {
  const { items, title } = props;

  return (
    <SectionBase title={title}>
      <ul className={cls.BrandsList}>
        {items?.map((item) => (
          <li key={uuidv4()}>
            <Link href={item.to} className={cls.BrandsLink}>
              <Image
                src={item.image}
                alt={item.name}
                className={cls.BrandsImg}
              />
            </Link>
          </li>
        ))}
      </ul>
    </SectionBase>
  );
};

BrandsList.displayName = 'BrandsList';

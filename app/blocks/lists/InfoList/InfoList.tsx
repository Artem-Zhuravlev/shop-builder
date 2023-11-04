import React, { FC, useMemo } from 'react';
import cls from './InfoList.module.scss';
import Link from 'next/link';
import { InfoListItem } from './InfoListItem';

export enum Availability {
  IN_STOCK = 'In stock',
  OUT_OF_STOCK = 'Out of stock'
}

interface InfoListProps {
  item: {
    brand: {
      name: string,
      url: string
    },
    viewed: number,
    reward_points?: number,
    availability?: Availability
  }
}

export const InfoList:FC<InfoListProps> = ({ item }) => {
  const labelClass = useMemo(() => {
    if (item.availability && item.availability === Availability.IN_STOCK) {
      return cls.InStock;
    } else {
      return cls.OutOfStock;
    }
  }, [item.availability]); 

  return (
    <ul
      className={cls.InfoList}
    >
      <InfoListItem label="Brand">
        <Link
          className={cls.InfoListLink}
          href={item.brand.url}
        >
          {item.brand.name}
        </Link>
      </InfoListItem>
      <InfoListItem label="Viewed">
        {item.viewed}
      </InfoListItem>
      {
        item.reward_points && (
          <InfoListItem label="Reward Points">
            {item.reward_points}
          </InfoListItem>
        )
      }
      {
        item.availability && (
          <InfoListItem label="Availability">
            <span
              className={labelClass}
            >
              {item.availability}
            </span>
          </InfoListItem>
        )
      }
    </ul>
  )
}
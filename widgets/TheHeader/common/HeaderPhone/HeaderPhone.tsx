import React, { FC, useId } from 'react';
import cls from './HeaderPhone.module.scss';

interface HeaderPhoneProps {
  items: string[]
}

export const HeaderPhone:FC<HeaderPhoneProps> = ({ items }) => {
  const id = useId();

  return (
    <details
      className={cls.HeaderPhone}
    >
      <summary
        className={cls.HeaderPhoneSummary}
      >
        <span
          className={`icon-phone ${cls.HeaderPhoneIcon}`}
        />
        {items[0]}
      </summary>
      <ul
        className={cls.HeaderPhoneList}
      >
        { items && items.map((phone, index) => (
          <li
            className={cls.HeaderPhoneItem}
            key={`${id}-${index}`}
          >
            <a
              href={`tel:${phone}`}
            >
              {phone}
            </a>
          </li>
        )) }
      </ul>
    </details>
  )
}
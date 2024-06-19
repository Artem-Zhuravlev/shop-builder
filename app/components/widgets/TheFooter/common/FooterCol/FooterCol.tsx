import Link from 'next/link';
import { FC } from 'react';
import { v4 as uuidv4 } from 'uuid';
import cls from './FooterCol.module.scss';

interface FooterColProp {
  description?: string;
  list?: { icon?: string; to?: string; value: string }[];
  title: string;
}

export const FooterCol: FC<FooterColProp> = (props) => {
  const { description, list, title } = props;

  return (
    <div className={cls.FooterCol}>
      <h5 className={cls.FooterTitle}>{title}</h5>
      {description && <p className={cls.FooterDescription}>{description}</p>}
      {list && (
        <ul className={cls.FooterList}>
          {list.map((item) => (
            <li className={cls.FooterListItem} key={uuidv4()}>
              {item.to ? (
                <Link href={item.to} className={cls.FooterListLink}>
                  {item.value}
                </Link>
              ) : (
                <>
                  <span className={item.icon} />
                  {item.value}
                </>
              )}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

FooterCol.displayName = 'FooterCol';

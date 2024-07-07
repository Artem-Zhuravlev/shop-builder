'use client';
import classNames from 'classnames';
import Link from 'next/link';
import {
  useCallback,
  useEffect,
  useRef,
  useState,
  type FC,
  type ReactNode,
} from 'react';
import { v4 as uuidv4 } from 'uuid';
import cls from './DropdownBase.module.scss';

interface DropdownProps {
  children: ReactNode;
  isLightMode?: boolean;
  list: {
    to?: string;
    value: string;
    onClick?: () => void;
    icon?: ReactNode;
  }[];
  opened?: boolean;
  direction?: 'left' | 'right';
}

export const DropdownBase: FC<DropdownProps> = (props) => {
  const {
    children,
    isLightMode,
    list,
    opened = false,
    direction = 'left',
  } = props;
  const [isOpen, setIsOpen] = useState(opened);
  const dropdownRef = useRef<HTMLDivElement | null>(null);

  const handleClickOutside = useCallback((event: MouseEvent) => {
    if (
      dropdownRef.current &&
      !dropdownRef.current.contains(event.target as Node)
    ) {
      setIsOpen(false);
    }
  }, []);

  useEffect(() => {
    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen]);

  const dropdownBtnClasses = classNames(
    cls.DropdownBtn,
    isLightMode ? cls.DropdownBtnLight : null,
    isOpen ? cls.DropdownBtnOpen : null,
  );

  return (
    <div className={cls.DropdownBase} ref={dropdownRef}>
      <button
        type='button'
        className={dropdownBtnClasses}
        onClick={() => setIsOpen((prev: boolean) => !prev)}>
        {children}
      </button>

      {isOpen && (
        <ul className={classNames(cls.DropdownList, cls[direction])}>
          {list?.map((item) => (
            <li key={uuidv4()}>
              {item.to ? (
                <Link href={item.to}>
                  {item.icon}
                  {item.value}
                </Link>
              ) : (
                <button type='button' onClick={item.onClick}>
                  {item.icon}
                  {item.value}
                </button>
              )}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

DropdownBase.displayName = 'DropdownBase';

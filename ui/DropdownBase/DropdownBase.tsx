import React, { FC, useId, useState, useEffect, useRef, useCallback } from 'react';
import { classNames } from '@/utils/classNames';
import cls from './DropdownBase.module.scss';
import Link from 'next/link';

interface DropdownProps {
  list: Array<{ route: string; value: string;}>
  children?: string;
  opened?: boolean;
  isLightMode?: boolean
}

export const DropdownBase: FC<DropdownProps> = (props) => {
  const {
    list,
    children,
    opened = false,
    isLightMode
  } = props;

  const id = useId();
  const [isOpen, setIsOpen] = useState(opened);
  const dropdownRef = useRef<HTMLDivElement | null>(null);

  const handleClickOutside = useCallback((event: MouseEvent) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
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

  const mods: Record<string, boolean> = {
    [cls.DropdownBtnLight] : isLightMode || false,
    [cls.DropdownBtnOpen] : isOpen
  }
 
  return (
    <div
      className={cls.DropdownBase}
      ref={dropdownRef}
    >
      <button
        type="button"
        className={classNames(cls.DropdownBtn, mods)}
        onClick={() => setIsOpen((prev:boolean) => !prev)}
      >
        {children}
      </button>

      {isOpen && (
        <ul className={cls.DropdownList}>
          {
            list && list.map((item, index) => (
              <li
                key={`${id}-${index}`}
              >
                <Link
                  href={item.route}
                  
                >
                  {item.value}
                </Link>
              </li>
            ))
          }
        </ul>
      )}
    </div>
  )
}
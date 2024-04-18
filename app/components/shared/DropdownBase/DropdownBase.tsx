'use client';
import React, { FC, useState, useEffect, useRef, useCallback } from 'react';
import { v4 as uuidv4 } from 'uuid';
import classNames from 'classnames';
import cls from './DropdownBase.module.scss';
import Link from 'next/link';

interface DropdownProps {
	children?: string;
	isLightMode?: boolean;
	list: { route: string; value: string }[];
	opened?: boolean;
}

export const DropdownBase: FC<DropdownProps> = (props) => {
	const { children, isLightMode, list, opened = false } = props;
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
		isOpen ? cls.DropdownBtnOpen : null
	);

	return (
		<div
			className={cls.DropdownBase}
			ref={dropdownRef}>
			<button
				type='button'
				className={dropdownBtnClasses}
				onClick={() => setIsOpen((prev: boolean) => !prev)}>
				{children}
			</button>

			{isOpen && (
				<ul className={cls.DropdownList}>
					{list &&
						list.map((item) => (
							<li key={uuidv4()}>
								<Link href={item.route}>{item.value}</Link>
							</li>
						))}
				</ul>
			)}
		</div>
	);
};

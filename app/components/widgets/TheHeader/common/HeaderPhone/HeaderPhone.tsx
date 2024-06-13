import React, { FC } from 'react';
import { v4 as uuidv4 } from 'uuid';
import cls from './HeaderPhone.module.scss';

interface HeaderPhoneProps {
	items: string[];
}

export const HeaderPhone: FC<HeaderPhoneProps> = ({ items }) => {
	return (
		<details className={cls.HeaderPhone}>
			<summary className={cls.HeaderPhoneSummary}>
				<span className={`icon-phone ${cls.HeaderPhoneIcon}`} />
				{items[0]}
			</summary>
			<ul className={cls.HeaderPhoneList}>
				{items &&
					items.map((phone) => (
						<li
							className={cls.HeaderPhoneItem}
							key={uuidv4()}>
							<a href={`tel:${phone}`}>{phone}</a>
						</li>
					))}
			</ul>
		</details>
	);
};

HeaderPhone.displayName = 'HeaderPhone';

import Link from "next/link";
import type { FC } from "react";
import { v4 as uuidv4 } from "uuid";
import cls from "./HeaderSubmenu.module.scss";

interface HeaderSubmenuProps {
	item: {
		title?: string;
		subMenu?: Array<{
			url: string;
			name: string;
		}>;
	};
}

export const HeaderSubmenu: FC<HeaderSubmenuProps> = (props) => {
	const { item } = props;

	return (
		<div className={cls.HeaderNavCol}>
			{item.title && <h4 className={cls.HeaderNavTitle}>{item.title}</h4>}
			{item.subMenu && (
				<ul className={cls.HeaderNavSubList}>
					{item.subMenu.map((item) => (
						<li key={uuidv4()}>
							<Link href={item.url} className={cls.HeaderNavSubLink}>
								{item.name}
							</Link>
						</li>
					))}
				</ul>
			)}
		</div>
	);
};

HeaderSubmenu.displayName = "HeaderSubmenu";

"use client";
import { TooltipBase } from "@shared/TooltipBase/TooltipBase";
import classNames from "classnames";
import { useTranslations } from "next-intl";
import { type FC, type ReactNode, useRef, useState } from "react";
import cls from "./SidebarToggler.module.scss";

interface SidebarTogglerProps {
	title: string;
	children: ReactNode;
	resetMode?: boolean;
	onReset?: (value: boolean) => void;
}

export const SidebarToggler: FC<SidebarTogglerProps> = (props) => {
	const { title, children, resetMode = false, onReset } = props;
	const [isOpen, setIsOpen] = useState(true);
	const contentRef = useRef<HTMLDivElement>(null);
	const t = useTranslations("base");

	const handleReset = () => {
		if (onReset) {
			onReset(false);
		}
	};

	const handleToggle = () => {
		setIsOpen(!isOpen);
		if (contentRef.current) {
			contentRef.current.style.height = isOpen
				? "0px"
				: `${contentRef.current.scrollHeight}px`;
		}
	};

	return (
		<div className={cls.SidebarToggler}>
			<button
				type="button"
				onClick={handleToggle}
				className={classNames(cls.SidebarCollapseBtn, {
					[cls.buttonClose]: !isOpen,
				})}
			>
				{title}
			</button>
			{resetMode && (
				<TooltipBase content={t("clear")}>
					<button
						type="button"
						className={cls.SidebarResetBtn}
						onClick={handleReset}
						aria-label={t("clear")}
					>
						<span className="icon-cross" />
					</button>
				</TooltipBase>
			)}
			<div
				className={cls.SidebarContentWrapper}
				ref={contentRef}
				style={{ overflow: "hidden", transition: "height 0.3s ease" }}
			>
				<div className={cls.SidebarContent}>{children}</div>
			</div>
		</div>
	);
};

SidebarToggler.displayName = "SidebarToggler";

"use client";
import { AutoSave, InputRadio } from "@shared/inputs";
import { useTranslations } from "next-intl";
import { type FC, useCallback, useState } from "react";
import { Form } from "react-final-form";
import cls from "../../SidebarFilter.module.scss";
import { SidebarToggler } from "../SidebarToggler/SidebarToggler";

interface SidebarFilterDiscountProps {
	items: { discount: number; value: number }[];
}

export const SidebarFilterDiscount: FC<SidebarFilterDiscountProps> = (
	props,
) => {
	const { items } = props;
	const t = useTranslations("filters");
	const [resetMode, setResetMode] = useState(false);

	const handleSubmit = useCallback((values: { discount: string }) => {
		const mode = "discount" in values;
		setResetMode(mode);
	}, []);

	const handleReset = useCallback((reset: () => void) => {
		reset();
		setResetMode(false);
	}, []);

	return (
		<Form
			onSubmit={handleSubmit}
			render={({ handleSubmit, form }) => (
				<SidebarToggler
					title={t("discount")}
					onReset={() => handleReset(form.reset)}
					resetMode={resetMode}
				>
					<AutoSave debounce={0} save={handleSubmit} />
					<div className="d-flex flex-column gap-1">
						{items?.map((item) => (
							<InputRadio
								key={`discount-${item.discount}}`}
								name="discount"
								value={`${item.discount}`}
								label={`${item.discount}%`}
								suffix={<div className={cls.suffix}>{item.value}</div>}
								disabled={item.value <= 0}
							/>
						))}
					</div>
				</SidebarToggler>
			)}
		/>
	);
};

SidebarFilterDiscount.displayName = "SidebarFilterDiscount";

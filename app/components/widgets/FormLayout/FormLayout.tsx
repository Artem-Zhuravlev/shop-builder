import { ButtonBase } from '@shared/ButtonBase';
import { useTranslations } from 'next-intl';
import React, { type FC, type ReactNode } from 'react';
import cls from './FormLayout.module.scss';
import { useRouter } from 'next/navigation';

interface FormLayoutProps {
	className?: string;
	children: ReactNode;
	title: string;
	onSubmit: () => void;
	onCancel?: () => void;
	submitText?: string;
	cancelText?: string;
}

export const FormLayout: FC<FormLayoutProps> = (props) => {
	const {
		className,
		children,
		title,
		onSubmit,
		onCancel,
		submitText,
		cancelText,
	} = props;
	const t = useTranslations('base');
	const router = useRouter();

	return (
		<form onSubmit={onSubmit} className={cls.FormLayout}>
			<div className={cls.FormLayoutNav}>
				<h3 className={`h2 ${cls.FormLayoutTitle}`}>{title}</h3>
				<div className={cls.FormLayoutControls}>
					<ButtonBase type='submit'>
						{submitText ? submitText : t('save')}
					</ButtonBase>
					<ButtonBase
						variant='outline'
						onClick={() => (onCancel ? onCancel() : router.back())}
					>
						{cancelText ? cancelText : t('cancel')}
					</ButtonBase>
				</div>
			</div>
			{className ? <div className={className}>{children}</div> : children}
		</form>
	);
};

FormLayout.displayName = 'FormLayout';

import { InputSelect, InputText } from '@shared/inputs';
import { FormLayout } from '@widgets/FormLayout';
import { useTranslations } from 'next-intl';
import React, { type FC } from 'react';
import { Form } from 'react-final-form';

interface LinksForm {
	manufacturer?: string;
}

export const AdminProductsLinksForm: FC = () => {
	const t = useTranslations();
	const onSubmit = (values: LinksForm) => {
		console.log('Form Submitted:', values);
	};

	return (
		<Form onSubmit={onSubmit}>
			{({ handleSubmit }) => (
				<FormLayout
					className='row align-items-center'
					onSubmit={handleSubmit}
					title={t('base.links')}
				>
					<InputText
						className='col-md-6'
						name='manufacturer'
						placeholder={t('inputs.manufacturer')}
					/>
					<InputSelect
						className='col-md-6'
						name='categories'
						isMulti
						placeholder={t('inputs.categories')}
						options={[
							{ value: 'components', label: 'Components' },
							{ value: 'desktops_pc', label: 'Desktops  > PC' },
						]}
					/>
					<InputSelect
						className='col-md-6'
						name='filters'
						isMulti
						placeholder={t('inputs.filters')}
						options={[
							{ value: 'color_black', label: 'Color > Black' },
							{ value: 'color_white', label: 'Color > White' },
						]}
					/>
					<InputSelect
						className='col-md-6'
						name='downloads'
						isMulti
						placeholder={t('inputs.downloads')}
						options={[
							{ value: 'download_black', label: 'Download Black' },
							{ value: 'download_white', label: 'Download White' },
						]}
					/>
					<InputSelect
						className='col-md-6'
						name='related_products'
						isMulti
						placeholder={t('inputs.related_products')}
						options={[
							{ value: 'product_1', label: 'Product 1' },
							{ value: 'product_2', label: 'Product 2' },
						]}
					/>
				</FormLayout>
			)}
		</Form>
	);
};

AdminProductsLinksForm.displayName = 'AdminProductsLinksForm';

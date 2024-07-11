import { InputImage, InputText, InputTextarea } from '@shared/inputs';
import { emailValidate, phoneValidate } from '@utils/validations';
import { FormLayout } from '@widgets/FormLayout';
import { useTranslations } from 'next-intl';
import type { FC } from 'react';
import { Form } from 'react-final-form';

export const AdminSettingsImageForm: FC = () => {
	const t = useTranslations();

	const onSubmit = (values: any) => {
		console.log('Form Submitted:', values);
	};

	return (
		<>
			<Form onSubmit={onSubmit}>
				{({ handleSubmit }) => (
					<FormLayout
						className='row align-items-center'
						onSubmit={handleSubmit}
						title={t('base.image')}
					>
						<InputText
							className='col-md-6'
							type='number'
							name='category_image_size_width'
							placeholder={t('inputs.category_image_size_width')}
							required
						/>
						<InputText
							className='col-md-6'
							type='number'
							name='category_image_size_height'
							placeholder={t('inputs.category_image_size_height')}
							required
						/>
						<InputText
							className='col-md-6'
							type='number'
							name='product_image_thumb_width'
							placeholder={t('inputs.product_image_thumb_width')}
							required
						/>
						<InputText
							className='col-md-6'
							type='number'
							name='product_image_thumb_height'
							placeholder={t('inputs.product_image_thumb_height')}
							required
						/>
						<InputText
							className='col-md-6'
							type='number'
							name='product_image_popup_width'
							placeholder={t('inputs.product_image_popup_width')}
							required
						/>
						<InputText
							className='col-md-6'
							type='number'
							name='product_image_popup_height'
							placeholder={t('inputs.product_image_popup_height')}
							required
						/>
						<InputText
							className='col-md-6'
							type='number'
							name='product_image_list_width'
							placeholder={t('inputs.product_image_list_width')}
							required
						/>
						<InputText
							className='col-md-6'
							type='number'
							name='product_image_list_height'
							placeholder={t('inputs.product_image_list_height')}
							required
						/>
						<InputText
							className='col-md-6'
							type='number'
							name='additional_product_image_width'
							placeholder={t('inputs.additional_product_image_width')}
							required
						/>
						<InputText
							className='col-md-6'
							type='number'
							name='additional_product_image_height'
							placeholder={t('inputs.additional_product_image_height')}
							required
						/>
						<InputText
							className='col-md-6'
							type='number'
							name='relative_product_image_width'
							placeholder={t('inputs.relative_product_image_width')}
							required
						/>
						<InputText
							className='col-md-6'
							type='number'
							name='relative_product_image_height'
							placeholder={t('inputs.relative_product_image_height')}
							required
						/>
						<InputText
							className='col-md-6'
							type='number'
							name='compare_image_width'
							placeholder={t('inputs.compare_image_width')}
							required
						/>
						<InputText
							className='col-md-6'
							type='number'
							name='compare_image_height'
							placeholder={t('inputs.compare_image_height')}
							required
						/>
						<InputText
							className='col-md-6'
							type='number'
							name='wishlist_image_width'
							placeholder={t('inputs.wishlist_image_width')}
							required
						/>
						<InputText
							className='col-md-6'
							type='number'
							name='wishlist_image_height'
							placeholder={t('inputs.wishlist_image_height')}
							required
						/>
						<InputText
							className='col-md-6'
							type='number'
							name='cart_image_width'
							placeholder={t('inputs.cart_image_width')}
							required
						/>
						<InputText
							className='col-md-6'
							type='number'
							name='cart_image_height'
							placeholder={t('inputs.cart_image_height')}
							required
						/>
						<InputText
							className='col-md-6'
							type='number'
							name='store_image_width'
							placeholder={t('inputs.cart_image_width')}
							required
						/>
						<InputText
							className='col-md-6'
							type='number'
							name='store_image_height'
							placeholder={t('inputs.cart_image_height')}
							required
						/>
					</FormLayout>
				)}
			</Form>
		</>
	);
};

AdminSettingsImageForm.displayName = 'AdminSettingsImageForm';

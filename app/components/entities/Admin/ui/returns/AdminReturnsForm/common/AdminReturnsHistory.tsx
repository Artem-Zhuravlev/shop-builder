import { ButtonBase } from '@shared/ButtonBase';
import {
	InputCheckbox,
	InputDatePicker,
	InputReturnStatus,
	InputTextarea,
} from '@shared/inputs';
import { useTranslations } from 'next-intl';
import type { FC } from 'react';
import { FieldArray } from 'react-final-form-arrays';

interface AdminReturnsHistoryProps {
	pop: (field: string, arg?: any) => void;
	push: (field: string, arg?: any) => void;
}

export const AdminReturnsHistory: FC<AdminReturnsHistoryProps> = (props) => {
	const { pop, push } = props;
	const t = useTranslations();

	return (
		<>
			<h3 className='h4'>{t('base.history')}</h3>
			<div className='d-flex gap-1 mb-30'>
				<ButtonBase onClick={() => push('history', undefined)}>
					{t('base.add')}
				</ButtonBase>
				<ButtonBase variant='danger' onClick={() => pop('history')}>
					{t('base.remove')}
				</ButtonBase>
			</div>
			<FieldArray name='history'>
				{({ fields }) =>
					fields.map((name, index) => (
						<div
							key={name}
							style={{
								display: 'grid',
								gridTemplateColumns: '1fr 38px',
								gap: 'var(--space-medium)',
								alignItems: 'flex-start',
								marginBottom: 'var(--space-medium)',
							}}
						>
							<div>
								<InputDatePicker
									name={`${name}.date_added`}
									placeholder={t('inputs.date_added')}
								/>
								<InputReturnStatus name={`${name}.return_status`} />
								<InputCheckbox
									name={`${name}.notify_customer`}
									label={t('inputs.notify_customer')}
								/>
								<InputTextarea
									name={`${name}.comment`}
									placeholder={t('inputs.comment')}
								/>
							</div>
							<ButtonBase onClick={() => fields.remove(index)} variant='danger'>
								<span className='icon-cross' />
							</ButtonBase>
						</div>
					))
				}
			</FieldArray>
		</>
	);
};

AdminReturnsHistory.displayName = 'AdminReturnsHistory';

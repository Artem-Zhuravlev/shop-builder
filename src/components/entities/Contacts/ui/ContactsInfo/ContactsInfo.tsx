import { SectionBase } from '@/components/shared/SectionBase';
import { useTranslations } from 'next-intl';
import React, { type FC } from 'react';

import cls from './ContactsInfo.module.scss';

interface ContactsInfoProps {
	emails: string[];
	phones: string[];
	locations: string[];
}

export const ContactsInfo: FC<ContactsInfoProps> = (props) => {
	const { emails, phones, locations } = props;
	const t = useTranslations('contacts');

	return (
		<SectionBase secondary>
			<div className={cls.ContactsInfo}>
				<div className={cls.ContactsInfoItem}>
					<div className={cls.ContactsInfoItemIcon}>
						<span className='icon-phone' />
					</div>
					<h5 className='mb-0'>{t('contact_phone_number')}</h5>
					<ul className={cls.ContactsInfoList}>
						{phones.map((phone) => (
							<li key={phone} className={cls.ContactsInfoListItem}>
								<a href={`tel:${phone}`}>{phone}</a>
							</li>
						))}
					</ul>
				</div>
				<div className={cls.ContactsInfoItem}>
					<div className={cls.ContactsInfoItemIcon}>
						<span className='icon-mail4' />
					</div>
					<h5 className='mb-0'>{t('our_email_address')}</h5>
					<ul className={cls.ContactsInfoList}>
						{emails.map((email) => (
							<li key={email} className={cls.ContactsInfoListItem}>
								<a href={`mailto:${email}`}>{email}</a>
							</li>
						))}
					</ul>
				</div>
				<div className={cls.ContactsInfoItem}>
					<div className={cls.ContactsInfoItemIcon}>
						<span className='icon-location2' />
					</div>
					<h5 className='mb-0'>{t('our_location')}</h5>
					<ul className={cls.ContactsInfoList}>
						{locations.map((location) => (
							<li key={location} className={cls.ContactsInfoListItem}>
								<address>{location}</address>
							</li>
						))}
					</ul>
				</div>
			</div>
		</SectionBase>
	);
};

ContactsInfo.displayName = 'ContactsInfo';

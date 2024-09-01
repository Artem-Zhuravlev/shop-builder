import { SocialList } from '@/components/features/lists';
import { ContainerBase } from '@/components/shared/ContainerBase';
import React, { type FC } from 'react';
import cls from './TheFooter.module.scss';
import {
	FooterAboutUs,
	FooterGetInTouch,
	FooterLogo,
	FooterMyAccount,
	FooterQuickLinks,
	FooterSubscribeForm,
} from './common';

export const TheFooter: FC = () => {
	const socials = [
		{
			url: '/youtube',
			icon: 'youtube',
		},
		{
			url: '/facebook',
			icon: 'facebook',
		},
		{
			url: '/instagram',
			icon: 'instagram',
		},
	];

	return (
		<footer className={cls.Footer}>
			<ContainerBase>
				<div className={cls.FooterTop}>
					<FooterLogo />
					<FooterSubscribeForm />
					<SocialList items={socials} className={cls.FooterSocialList} />
				</div>
				<div className={cls.FooterBottom}>
					<FooterAboutUs />
					<FooterMyAccount />
					<FooterQuickLinks />
					<FooterGetInTouch />
				</div>
			</ContainerBase>
		</footer>
	);
};

TheFooter.displayName = 'TheFooter';

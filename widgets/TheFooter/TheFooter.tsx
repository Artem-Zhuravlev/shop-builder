import React, { FC } from 'react';
import cls from './TheFooter.module.scss';
import { ContainerBase } from '@/shared/ContainerBase';
import { SocialList } from '@/features/lists/SocialList';
import { FooterLogo } from './common';
import { FooterSubscribeForm } from './common/FooterSubscribeForm/FooterSubscribeForm';

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
					<SocialList
						items={socials}
						className={cls.FooterSocialList}
					/>
				</div>
				footer
			</ContainerBase>
		</footer>
	);
};

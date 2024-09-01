import React from 'react';
import { FooterCol } from '../FooterCol/FooterCol';

export const FooterQuickLinks = () => {
	const { title, routes } = {
		title: 'Quick Links',
		routes: [
			{
				to: '/about',
				value: 'About us',
			},
			{
				to: '/blog',
				value: 'Blog',
			},
			{
				to: '/contact',
				value: 'Contact us',
			},
			{
				to: '/testimonials',
				value: 'Testimonials',
			},
		],
	};

	return <FooterCol title={title} list={routes} />;
};

FooterQuickLinks.displayName = 'FooterQuickLinks';

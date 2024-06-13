import React from 'react';
import { FooterCol } from '../FooterCol/FooterCol';

export const FooterMyAccount = () => {
	const { title, routes } = {
		title: 'My account',
		routes: [
			{
				to: '/my-order',
				value: 'My order',
			},
			{
				to: '/return',
				value: 'Return',
			},
			{
				to: '/return',
				value: 'Return',
			},
			{
				to: '/support',
				value: 'Support',
			},
		],
	};

	return (
		<FooterCol
			title={title}
			list={routes}
		/>
	);
};

FooterMyAccount.displayName = 'FooterMyAccount';

export interface SidebarItem {
	to?: string;
	icon?: string;
	value: string;
	children?: SidebarItem[];
}

export const navbarList = [
	{
		to: '/admin',
		icon: 'icon-meter',
		value: 'dashboard',
	},
	{
		icon: 'icon-price-tags',
		value: 'catalog',
		children: [
			{
				to: '/admin/categories',
				value: 'categories',
			},
			{
				to: '/admin/products',
				value: 'products',
			},
			{
				to: '/admin/recurring-profiles',
				value: 'recurring_profiles',
			},
			{
				to: '/admin/filters',
				value: 'filters',
			},
			{
				value: 'attributes',
				children: [
					{
						to: '/admin/attributes',
						value: 'attributes',
					},
					{
						to: '/admin/attribute-groups',
						value: 'attribute_groups',
					},
				],
			},
			{
				to: '/admin/options',
				value: 'options',
			},
			{
				to: '/admin/manufacturers',
				value: 'manufacturers',
			},
			{
				to: '/admin/downloads',
				value: 'downloads',
			},
			{
				to: '/admin/reviews',
				value: 'reviews',
			},
			{
				to: '/admin/information',
				value: 'information',
			},
		],
	},
	{
		icon: 'icon-cart',
		value: 'sales',
		children: [
			{
				to: '/admin/orders',
				value: 'orders',
			},
			{
				to: '/admin/recurring-orders',
				value: 'recurring_orders',
			},
			{
				to: '/admin/returns',
				value: 'returns',
			},
		],
	},
	{
		icon: 'icon-share2',
		value: 'marketing',
		children: [
			{
				to: '/admin/marketing',
				value: 'marketing',
			},
			{
				to: '/admin/coupons',
				value: 'coupons',
			},
			{
				to: '/admin/mail',
				value: 'mail',
			},
		],
	},
	{
		icon: 'icon-cog',
		value: 'system',
		children: [
			{
				value: 'localization',
				children: [
					{
						to: '/admin/languages',
						value: 'languages',
					},
					{
						to: '/admin/currencies',
						value: 'currencies',
					},
					{
						to: '/admin/stock-statuses',
						value: 'stock_statuses',
					},
					{
						to: '/admin/order-statuses',
						value: 'order_statuses',
					},
					{
						to: '/admin/countries',
						value: 'countries',
					},
					{
						to: '/admin/zones',
						value: 'zones',
					},
					{
						to: '/admin/geo-zones',
						value: 'geo_zones',
					},
				],
			},
		],
	},
];

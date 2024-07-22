import { ADMIN_ROUTES } from '@constants/admin-routes.constants';

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
				to: ADMIN_ROUTES.categories,
				value: 'categories',
			},
			{
				to: ADMIN_ROUTES.products,
				value: 'products',
			},
			{
				to: ADMIN_ROUTES.recurringProfiles,
				value: 'recurring_profiles',
			},
			{
				to: ADMIN_ROUTES.filters,
				value: 'filters',
			},
			{
				value: 'attributes',
				children: [
					{
						to: ADMIN_ROUTES.attributes,
						value: 'attributes',
					},
					{
						to: ADMIN_ROUTES.attributeGroups,
						value: 'attribute_groups',
					},
				],
			},
			{
				to: ADMIN_ROUTES.options,
				value: 'options',
			},
			{
				to: ADMIN_ROUTES.manufacturers,
				value: 'manufacturers',
			},
			{
				to: ADMIN_ROUTES.downloads,
				value: 'downloads',
			},
			{
				to: ADMIN_ROUTES.reviews,
				value: 'reviews',
			},
			{
				to: ADMIN_ROUTES.information,
				value: 'information',
			},
		],
	},
	{
		icon: 'icon-cart',
		value: 'sales',
		children: [
			{
				to: ADMIN_ROUTES.orders,
				value: 'orders',
			},
			{
				to: ADMIN_ROUTES.recurringOrders,
				value: 'recurring_orders',
			},
			{
				to: ADMIN_ROUTES.returns,
				value: 'returns',
			},
		],
	},
	{
		icon: 'icon-share2',
		value: 'marketing',
		children: [
			{
				to: ADMIN_ROUTES.marketing,
				value: 'marketing',
			},
			{
				to: ADMIN_ROUTES.coupons,
				value: 'coupons',
			},
			{
				to: ADMIN_ROUTES.mail,
				value: 'mail',
			},
		],
	},
	{
		icon: 'icon-cog',
		value: 'system',
		children: [
			{
				to: ADMIN_ROUTES.settings,
				value: 'settings',
			},
			{
				value: 'localization',
				children: [
					{
						to: ADMIN_ROUTES.languages,
						value: 'languages',
					},
					{
						to: ADMIN_ROUTES.currencies,
						value: 'currencies',
					},
					{
						to: ADMIN_ROUTES.stockStatuses,
						value: 'stock_statuses',
					},
					{
						to: ADMIN_ROUTES.orderStatuses,
						value: 'order_statuses',
					},
					{
						to: ADMIN_ROUTES.countries,
						value: 'countries',
					},
					{
						to: ADMIN_ROUTES.zones,
						value: 'zones',
					},
					{
						to: ADMIN_ROUTES.geoZones,
						value: 'geo_zones',
					},
				],
			},
		],
	},
];

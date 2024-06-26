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
        to: '/admin/catalog/categories',
        value: 'categories',
      },
      {
        to: '/admin/catalog/products',
        value: 'products',
      },
      {
        to: '/admin/catalog/recurring-profiles',
        value: 'recurring_profiles',
      },
      {
        to: '/admin/catalog/filters',
        value: 'filters',
      },
      {
        value: 'attributes',
        children: [
          {
            to: '/admin/catalog/attributes',
            value: 'attributes',
          },
          {
            to: '/admin/catalog/attribute-groups',
            value: 'attribute_groups',
          },
        ],
      },
      {
        to: '/admin/catalog/options',
        value: 'options',
      },
      {
        to: '/admin/catalog/manufacturers',
        value: 'manufacturers',
      },
      {
        to: '/admin/catalog/downloads',
        value: 'downloads',
      },
      {
        to: '/admin/catalog/reviews',
        value: 'reviews',
      },
      {
        to: '/admin/catalog/information',
        value: 'information',
      },
    ],
  },
  {
    icon: 'icon-cart',
    value: 'sales',
    children: [
      {
        to: '/admin/sales/orders',
        value: 'orders',
      },
      {
        to: '/admin/sales/recurring-orders',
        value: 'recurring_orders',
      },
      {
        to: '/admin/sales/returns',
        value: 'returns',
      },
      {
        value: 'gift_vouchers',
        children: [
          {
            to: '/admin/sales/gift-vouchers',
            value: 'gift_vouchers',
          },
          {
            to: '/admin/sales/voucher-themes',
            value: 'voucher_themes',
          },
        ],
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
        to: '/admin/marketing/coupons',
        value: 'coupons',
      },
      {
        to: '/admin/marketing/mail',
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
            to: '/admin/system/localization/store-localization',
            value: 'store_localization',
          },
          {
            to: '/admin/system/localization/languages',
            value: 'languages',
          },
          {
            to: '/admin/system/localization/currencies',
            value: 'currencies',
          },
          {
            to: '/admin/system/localization/stock-statuses',
            value: 'stock_statuses',
          },
          {
            to: '/admin/system/localization/order-statuses',
            value: 'order_statuses',
          },
          {
            value: 'returns',
            children: [
              {
                to: '/admin/system/localization/return-statuses',
                value: 'return_statuses',
              },
              {
                to: '/admin/system/localization/return-actions',
                value: 'return_actions',
              },
              {
                to: '/admin/system/localization/return-reasons',
                value: 'return_reasons',
              },
            ],
          },
          {
            to: '/admin/system/localization/countries',
            value: 'countries',
          },
          {
            to: '/admin/system/localization/zones',
            value: 'zones',
          },
          {
            to: '/admin/system/localization/geo-zones',
            value: 'geo_zones',
          },
          {
            value: 'taxes',
            children: [
              {
                to: '/admin/system/localization/tax-classes',
                value: 'tax_classes',
              },
              {
                to: '/admin/system/localization/tax-rates',
                value: 'tax_rates',
              },
            ],
          },
          {
            to: '/admin/system/localization/length-classes',
            value: 'length_classes',
          },
          {
            to: '/admin/system/localization/weight-classes',
            value: 'weight_classes',
          },
        ],
      },
    ],
  },
  {
    icon: 'icon-stats-bars',
    value: 'reports',
    children: [
      {
        to: '/admin/reports',
        value: 'reports',
      },
      {
        to: '/admin/reports/whos-online',
        value: 'whos_online',
      },
      {
        to: '/admin/reports/statistics',
        value: 'statistics',
      },
    ],
  },
];

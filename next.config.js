
/** @type {import('next').NextConfig} */
const path = require('node:path');
const nextConfig = {
	reactStrictMode: true,
	sassOptions: {
		includePaths: [path.join(__dirname, 'styles')],
	},
	webpack: (config) => {
		config.resolve.alias['@'] = path.join(__dirname, 'styles');
		return config;
	},
};

const withNextIntl = require('next-intl/plugin')(
	'./i18n.ts'
);

module.exports = withNextIntl(nextConfig);

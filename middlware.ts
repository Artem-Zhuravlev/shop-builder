import createMiddleware from 'next-intl/middleware';

const middleware = createMiddleware({
	// Add locales you want in the app
	locales: ['en', 'ua'],

	// Default locale if no match
	defaultLocale: 'en',
});

export default middleware;

export const config = {
	// Match only internationalized pathnames
	matcher: ['/', '/(ua|en)/:path*'],
};

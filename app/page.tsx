'use client';
import React from 'react';
import { useTranslations } from 'next-intl';

export default function Index() {
	const t = useTranslations('base');
	return <h1>{t('local')}</h1>;
}

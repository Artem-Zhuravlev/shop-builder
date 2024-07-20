import React from 'react';
import { AdminReturnsForm } from '@entities/Admin/ui/returns';

export default function ReturnsFormPage({
	params,
}: { params: { slug: string } }) {
	// TODO: add logic if NEW - slug don't send request
	return <AdminReturnsForm />;
}

export const metadata = {
	title: 'Returns',
};

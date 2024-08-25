import React from 'react';
import { AdminAttributeGroupForm } from '@entities/Admin';

export default function AttributeGroupsFormPage({
	params,
}: { params: { slug: string } }) {
	// TODO: add logic if NEW - slug don't send request
	return <AdminAttributeGroupForm />;
}

export const metadata = {
	title: 'Attributes Groups',
};

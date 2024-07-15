import React from 'react';
import { AdminRecurringProfilesForm } from '@entities/Admin/ui/recurringProfiles';

export default function RecurringProfilesFormPage({
	params,
}: { params: { slug: string } }) {
	// TODO: add logic if NEW - slug don't send request
	return <AdminRecurringProfilesForm />;
}

export const metadata = {
	title: 'Recurring Profiles',
};

import React from 'react';
import { AdminReviewsForm } from '@entities/Admin/ui/reviews';

export default function ReviewsFormPage({
	params,
}: { params: { slug: string } }) {
	// TODO: add logic if NEW - slug don't send request
	return <AdminReviewsForm />;
}

export const metadata = {
	title: 'Reviews',
};

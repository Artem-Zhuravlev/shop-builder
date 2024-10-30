import { type NextRequest, NextResponse } from 'next/server';
import { getLanguage, updateLanguage } from 'backend/services/languages';
import type { LanguagesInterface } from '@interfaces/index';

export async function GET(
	request: Request,
	{ params }: { params: { id: string } },
) {
	try {
		const id = Number(params.id);

		if (Number.isNaN(id)) {
			return NextResponse.json(
				{ message: 'Invalid language ID' },
				{ status: 400 },
			);
		}

		const language = await getLanguage(id);

		if (!language) {
			return NextResponse.json(
				{ message: 'Language not found' },
				{ status: 404 },
			);
		}

		return NextResponse.json(language, { status: 200 });
	} catch (error) {
		const errorMessage =
			error instanceof Error ? error.message : 'Unknown error occurred';

		return NextResponse.json(
			{ message: 'Error fetching language', error: errorMessage },
			{ status: 500 },
		);
	}
}

export async function PUT(
	request: NextRequest,
	{ params }: { params: { id: string } },
) {
	try {
		const id = Number(params.id);

		if (Number.isNaN(id) || id <= 0) {
			return NextResponse.json(
				{ message: 'Invalid language ID' },
				{ status: 400 },
			);
		}

		const data: LanguagesInterface = await request.json();

		if (!data) {
			return NextResponse.json(
				{ message: 'Invalid country data' },
				{ status: 400 },
			);
		}

		const updatedCountry = await updateLanguage(id, data);

		if (!updatedCountry) {
			return NextResponse.json(
				{ message: 'Language not found or update failed' },
				{ status: 404 },
			);
		}

		return NextResponse.json(updatedCountry, { status: 200 });
	} catch (error) {
		console.error('Error updating language:', error);
		const errorMessage =
			error instanceof Error ? error.message : 'Unknown error occurred';

		return NextResponse.json(
			{ message: 'Error updating language', error: errorMessage },
			{ status: 500 },
		);
	}
}

import { getPaginationParams } from '@/utils/getPaginationParams';
import type { LanguagesInterface } from '@interfaces/index';
import {
	createLanguage,
	deleteLanguage,
	getLanguages,
} from 'backend/services/languages';
import { type NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
	try {
		const data: LanguagesInterface = await request.json();
		const createdLanguage = await createLanguage(data);

		return NextResponse.json(createdLanguage, { status: 200 });
	} catch (error) {
		console.error('Error creating language:', error);
		const errorMessage =
			error instanceof Error ? error.message : 'Unknown error occurred';
		return NextResponse.json(
			{ message: 'Error creating language', error: errorMessage },
			{ status: 500 },
		);
	}
}

export async function GET(request: NextRequest) {
	try {
		const { offset, limit } = getPaginationParams(request);

		const languages = await getLanguages(offset, limit);

		return NextResponse.json(languages, { status: 200 });
	} catch (error) {
		const errorMessage =
			error instanceof Error ? error.message : 'Unknown error occurred';
		return NextResponse.json(
			{ message: 'Error fetching languages', error: errorMessage },
			{ status: 500 },
		);
	}
}

export async function DELETE(request: NextRequest) {
	try {
		const ids: number[] = await request.json();

		if (!Array.isArray(ids) || ids.length === 0) {
			return NextResponse.json(
				{ message: 'Invalid input: Please provide an array of language IDs.' },
				{ status: 400 },
			);
		}

		const deletedLanguages = await deleteLanguage(ids);

		return NextResponse.json(deletedLanguages, { status: 200 });
	} catch (error) {
		console.error('Error deleting language:', error);
		const errorMessage =
			error instanceof Error ? error.message : 'Unknown error occurred';

		return NextResponse.json(
			{ message: 'Error deleting language', error: errorMessage },
			{ status: 500 },
		);
	}
}

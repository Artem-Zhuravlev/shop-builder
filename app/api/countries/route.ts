import { getPaginationParams } from '@/utils/getPaginationParams';
import type { CountriesInterface } from '@interfaces/index';
import {
	createCountry,
	deleteCountry,
	getCountries,
} from 'backend/services/countries';
import { type NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
	try {
		const data: CountriesInterface = await request.json();
		const createdCountry = await createCountry(data);

		return NextResponse.json(createdCountry, { status: 200 });
	} catch (error) {
		console.error('Error creating country:', error);
		const errorMessage =
			error instanceof Error ? error.message : 'Unknown error occurred';
		return NextResponse.json(
			{ message: 'Error creating country', error: errorMessage },
			{ status: 500 },
		);
	}
}

export async function GET(request: NextRequest) {
	try {
		const { offset, limit } = getPaginationParams(request);

		const countries = await getCountries(offset, limit);

		return NextResponse.json(countries, { status: 200 });
	} catch (error) {
		const errorMessage =
			error instanceof Error ? error.message : 'Unknown error occurred';
		return NextResponse.json(
			{ message: 'Error fetching countries', error: errorMessage },
			{ status: 500 },
		);
	}
}

export async function DELETE(request: NextRequest) {
	try {
		const ids: number[] = await request.json();

		if (!Array.isArray(ids) || ids.length === 0) {
			return NextResponse.json(
				{ message: 'Invalid input: Please provide an array of country IDs.' },
				{ status: 400 },
			);
		}

		const deletedCountries = await deleteCountry(ids);

		return NextResponse.json(deletedCountries, { status: 200 });
	} catch (error) {
		console.error('Error deleting country:', error);
		const errorMessage =
			error instanceof Error ? error.message : 'Unknown error occurred';

		return NextResponse.json(
			{ message: 'Error deleting country', error: errorMessage },
			{ status: 500 },
		);
	}
}

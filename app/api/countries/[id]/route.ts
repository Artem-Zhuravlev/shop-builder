import { type NextRequest, NextResponse } from 'next/server';
import { getCountry, updateCountry } from 'backend/services/countries';
import type { CountriesInterface } from '@interfaces/index';

export async function GET(
	request: Request,
	{ params }: { params: { id: string } },
) {
	try {
		const id = Number(params.id);

		if (Number.isNaN(id)) {
			return NextResponse.json(
				{ message: 'Invalid country ID' },
				{ status: 400 },
			);
		}

		const country = await getCountry(id);

		if (!country) {
			return NextResponse.json(
				{ message: 'Country not found' },
				{ status: 404 },
			);
		}

		return NextResponse.json(country, { status: 200 });
	} catch (error) {
		const errorMessage =
			error instanceof Error ? error.message : 'Unknown error occurred';

		return NextResponse.json(
			{ message: 'Error fetching country', error: errorMessage },
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
				{ message: 'Invalid country ID' },
				{ status: 400 },
			);
		}

		const data: CountriesInterface = await request.json();

		if (!data) {
			return NextResponse.json(
				{ message: 'Invalid country data' },
				{ status: 400 },
			);
		}

		const updatedCountry = await updateCountry(id, data);

		if (!updatedCountry) {
			return NextResponse.json(
				{ message: 'Country not found or update failed' },
				{ status: 404 },
			);
		}

		return NextResponse.json(updatedCountry, { status: 200 });
	} catch (error) {
		console.error('Error updating country:', error);
		const errorMessage =
			error instanceof Error ? error.message : 'Unknown error occurred';

		return NextResponse.json(
			{ message: 'Error updating country', error: errorMessage },
			{ status: 500 },
		);
	}
}

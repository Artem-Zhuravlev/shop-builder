import type { CountriesInterface } from '@interfaces/index';
import { createCountry } from 'backend/services/countries';
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
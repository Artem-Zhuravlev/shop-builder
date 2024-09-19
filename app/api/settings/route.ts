import { getSettings, updateSettings } from 'backend/services/settings';
import type { SettingsInterface } from '@interfaces/settings';
import { type NextRequest, NextResponse } from 'next/server';

export async function GET() {
	try {
		const settings = await getSettings();

		return NextResponse.json(settings, { status: 200 });
	} catch (error) {
		const errorMessage =
			error instanceof Error ? error.message : 'Unknown error occurred';
		return NextResponse.json(
			{ message: 'Error fetching settings', error: errorMessage },
			{ status: 500 },
		);
	}
}

export async function PUT(request: NextRequest) {
	try {
		const data: SettingsInterface = await request.json();
		const createdSettings = await updateSettings(data);

		return NextResponse.json(createdSettings, { status: 200 });
	} catch (error) {
		console.error('Error creating settings:', error);
		const errorMessage =
			error instanceof Error ? error.message : 'Unknown error occurred';
		return NextResponse.json(
			{ message: 'Error creating settings', error: errorMessage },
			{ status: 500 },
		);
	}
}

import { getSettings } from 'backend/services/settings/getSettings';
import type { SettingsInterface } from 'backend/services/settings/interfaces/settings.interface';
import { updateSettings } from 'backend/services/settings/updateSettings';
import { type NextRequest, NextResponse } from 'next/server';

export async function PUT(req: NextRequest) {
	try {
		const settingsInput = await req.json();
		const updatedSettings = await updateSettings(settingsInput);

		if (!updatedSettings) {
			return NextResponse.json(
				{ message: 'Settings not found' },
				{ status: 404 },
			);
		}

		return NextResponse.json(updatedSettings, { status: 200 });
	} catch (error) {
		const errorMessage =
			error instanceof Error ? error.message : 'Unknown error occurred';
		return NextResponse.json(
			{ message: 'Error updating settings', error: errorMessage },
			{ status: 500 },
		);
	}
}

export async function GET(req: NextRequest) {
	try {
		const url = new URL(req.url);
		const idParam = url.searchParams.get('id');

		let settingsInput: SettingsInterface | undefined;

		if (idParam) {
			const id = Number.parseInt(idParam, 10);

			if (Number.isNaN(id)) {
				return NextResponse.json(
					{ message: 'Invalid Settings ID' },
					{ status: 400 },
				);
			}

			settingsInput = { id };
		}

		const settings = await getSettings(settingsInput);

		if (settings.length === 0) {
			return NextResponse.json(
				{ message: 'Settings not found' },
				{ status: 404 },
			);
		}

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

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

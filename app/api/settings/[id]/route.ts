import type { SettingsInterface } from 'backend/services/settings/interfaces/settings.interface';
import { updateSettings } from 'backend/services/settings/updateSettings';
import type { NextApiRequest } from 'next';
import { type NextRequest, NextResponse } from 'next/server';

export async function PUT(request: NextRequest, context: any) {
	try {
		const { params } = context;
		const id: number = Number(params.id);
		const data: SettingsInterface = await request.json();

		const updatedSettings = await updateSettings(id, data);

		return NextResponse.json(updatedSettings, { status: 200 });
	} catch (error) {
		console.error('Error updating settings:', error);
		const errorMessage =
			error instanceof Error ? error.message : 'Unknown error occurred';
		return NextResponse.json(
			{ message: 'Error updating settings', error: errorMessage },
			{ status: 500 },
		);
	}
}
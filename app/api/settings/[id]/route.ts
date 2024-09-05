import type { SettingsInterface } from '@interfaces/settings';
import { getByIdSettings, updateSettings } from 'backend/services/settings';
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

export async function GET(_: any, context: { params: { id: number } }) {
	try {
		const { params } = context;
		const id: number = Number(params.id);

		const settings = await getByIdSettings(id);

		return NextResponse.json(settings, { status: 200 });
	} catch (error) {
		console.error('Error updating settings:', error);
		const errorMessage =
			error instanceof Error ? error.message : 'Unknown error occurred';
		return NextResponse.json(
			{ message: 'Error getting settings', error: errorMessage },
			{ status: 500 },
		);
	}
}

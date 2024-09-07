import type { NextRequest } from 'next/server';

export interface ThunkExtraArg {
	fetch: (input: RequestInfo | URL, init?: RequestInit) => Promise<Response>;
	req: NextRequest;
}

export interface ThunkConfig<T> {
	rejectValue: T;
	extra: ThunkExtraArg;
	state?: unknown;
}

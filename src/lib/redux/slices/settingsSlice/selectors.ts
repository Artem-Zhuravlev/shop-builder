/* Instruments */
import type { ReduxState } from '@/lib/redux';

export const selectSettings = (state: ReduxState) => state.settings.data;

/* Instruments */
import type { ReduxState } from '@/lib/redux';

export const selectCurrency = (state: ReduxState) => state.product.currency;
export const selectCompare = (state: ReduxState) => state.product.compare;

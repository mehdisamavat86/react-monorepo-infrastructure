import { createStore } from '@myapp/shared/store';
import { BillingStoreData } from './types';

// TODO replace with new version
const usePriceAndPlanStore = createStore<BillingStoreData>(
  'price-plan-store',
  (set) => ({
    yearly: false,
    setYearly: (yearly) => set(() => ({ yearly })),
    toggleYearly: () => set((s) => ({ yearly: !s.yearly })),
  })
);

export default usePriceAndPlanStore;

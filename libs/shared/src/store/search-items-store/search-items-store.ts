import { createStore } from '../store-creator';
import type { SearchItemsStoreData as StoreData } from './types';
// TODO remove query-params-store when QueryContext is tested ok
const useSearchItemsStore = createStore<StoreData>('search-items', (set) => ({
  searchItems: [],
  setSearchItems: (searchItems) => set({ searchItems }),
}));

export default useSearchItemsStore;

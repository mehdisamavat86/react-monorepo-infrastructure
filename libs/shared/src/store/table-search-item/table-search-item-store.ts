import { createStore } from '@myapp/shared/store';
import { TableSearchItemStoreData as StoreData } from './types';

const useTableSearchItemStore = createStore<StoreData>(
  'table-search-item', // TODO use useSearchFiltersStore
  (set) => ({
    searchedItem: {},
    setItem(item) {
      set({ searchedItem: item });
    },
  })
);

export default useTableSearchItemStore;

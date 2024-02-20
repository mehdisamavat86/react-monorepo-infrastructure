import { createStore } from '../store-creator';
import type { QueryParamsStoreData as StoreData } from './types';
// TODO remove query-params-store when QueryContext is tested ok
const useQueryParamsStore = createStore<StoreData>('query-params', (set) => ({
  params: {},
  setParam: (key, value) =>
    set(({ params }) => ({
      params: { ...params, [key]: value },
    })),
  removeParam: (key) =>
    set(({ params }) => ({
      params: { ...params, [key]: undefined },
    })),
  setParams: (params) => set({ params }),
}));

export default useQueryParamsStore;

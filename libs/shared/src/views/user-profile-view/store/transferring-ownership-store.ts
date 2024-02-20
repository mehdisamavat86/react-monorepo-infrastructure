import { createStore } from '@myapp/shared/store';
import { TransferringOwnershipStoreData as StoreData } from './types';

const useTransferringOwnershipStore = createStore<StoreData>(
  'transferring-ownership',
  (set) => ({
    isPending: false,
    toggle: () =>
      set((state) => ({
        isPending: !state.isPending,
      })),
  })
);

export default useTransferringOwnershipStore;

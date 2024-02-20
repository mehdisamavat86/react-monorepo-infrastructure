import { createSelectorHooks } from 'auto-zustand-selectors-hook';
import { enableMapSet } from 'immer';
import { StateCreator, StoreApi, UseBoundStore, create } from 'zustand';
import { DevtoolsOptions, devtools } from 'zustand/middleware';
import { immer } from 'zustand/middleware/immer';

enableMapSet();

export function createStore<T extends object>(
  name: string,
  initializer: StateCreator<T, [['zustand/immer', never]], []>,
  options?: { devtools: Omit<DevtoolsOptions, 'name'> }
) {
  const withImmer = immer<T>(initializer);
  const withDevtool = devtools(withImmer, { name, ...options?.devtools });
  const createdStore = create(withDevtool);
  const withSelectors = createSelectorHooks(
    createdStore as UseBoundStore<StoreApi<T>>
  );
  // TODO add presistor
  return withSelectors;
}

import { useEffect } from 'react';
import { useDebounceFn } from './use-debounce-fn';

export const useDebounceEffect = <T extends (...args: any[]) => any>(
  fn: T,
  delay: number = 1,
  effects: any[] = []
) => {
  const func = useDebounceFn<T>(fn, delay);

  useEffect(() => {
    (func as any)();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, effects);
};

export default useDebounceFn;

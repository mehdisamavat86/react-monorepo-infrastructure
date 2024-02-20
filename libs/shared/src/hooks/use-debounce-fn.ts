import { useCallback, useRef } from 'react';

export const useDebounceFn = <T extends (...args: any[]) => any>(
  fn: T,
  delay: number = 1
): ((...args: Parameters<T>) => void) => {
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  return useCallback(
    (...args: Parameters<T>) => {
      if (timeoutRef.current !== null) {
        clearTimeout(timeoutRef.current);
      }

      timeoutRef.current = setTimeout(() => {
        fn(...args);
        timeoutRef.current = null;
      }, delay);
    },
    [delay, fn]
  );
};

export default useDebounceFn;

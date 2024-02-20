import { useEffect, useRef } from 'react';

export function usePreviousValue<T = any>(value: T) {
  const previousValueRef = useRef<T>(null);
  useEffect(() => {
    (previousValueRef as any).current = value;
  }, [value]);
  return previousValueRef.current;
}

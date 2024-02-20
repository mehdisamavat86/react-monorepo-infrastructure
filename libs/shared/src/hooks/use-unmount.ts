import { useEffect } from 'react';

export function useUnMount(callback: () => void) {
  useEffect(
    () => () => callback(),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    []
  );
}

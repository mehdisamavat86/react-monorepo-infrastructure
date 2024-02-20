import { useEffect, useRef } from 'react';

export function useIsFirstLoad() {
  const ref = useRef<boolean>(false);

  useEffect(() => {
    ref.current = true;
  }, []);

  return !ref.current;
}

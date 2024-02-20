import { useEffect, useState } from 'react';

export function useLazyLoadBoolean(delay = 1000) {
  const [isTrue, setIsTrue] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setIsTrue(true);
    }, delay);

    return () => {
      clearTimeout(timeout);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return isTrue;
}

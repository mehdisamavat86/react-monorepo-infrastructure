import { useEffect, useState } from 'react';

export function useDebounce(
  value: any,
  delay = 500,
  defaultValue = value
): typeof value {
  const [debouncedValue, setDebouncedValue] = useState(defaultValue);

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);

    return () => {
      clearTimeout(handler);
    };
  }, [value, delay]);

  return debouncedValue;
}

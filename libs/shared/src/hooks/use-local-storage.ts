import { useEffect, useState } from 'react';
import { localStorageGet, localStorageSet } from '../utils/storage';

export function useLocalStorage<ValueType>(key: string, defaultValue: ValueType) {
  const [value, setValue] = useState<ValueType>(() => {
    const storedValue = localStorageGet(key);
    return (storedValue ?? defaultValue) as ValueType;
  });

  useEffect(() => {
    const listener = (e: StorageEvent) => {
      if (e.storageArea === localStorage && e.key === key) {
        setValue(e.newValue ? JSON.parse(e.newValue) : e.newValue);
      }
    };
    window.addEventListener('storage', listener);

    return () => {
      window.removeEventListener('storage', listener);
    };
  }, [key, defaultValue]);

  const setValueInLocalStorage = (newValue: ValueType) => {
    setValue((currentValue: ValueType) => {
      const result = typeof newValue === 'function' ? newValue(currentValue) : newValue;
      localStorageSet(key, result);
      return result;
    });
  };

  return [value, setValueInLocalStorage] as [typeof value, typeof setValue];
}

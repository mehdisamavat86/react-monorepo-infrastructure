import { useSearchParams as useBasePrams } from 'react-router-dom';

export function useSearchParams<
  T extends Record<string, any> = Record<string, any>
>() {
  const [params] = useBasePrams();
  return (!params ? {} : Object.fromEntries(params)) as T;
}

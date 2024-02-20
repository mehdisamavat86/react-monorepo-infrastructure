import { useState } from 'react';
import { useDebounce } from './use-debounce';

export function useStateDebounce<S = any>(
  initialState: S | (() => S),
  delay = 500
) {
  const [realValue, setValue] = useState(initialState);
  const debounceValue = useDebounce(realValue, delay);

  return [debounceValue, setValue, realValue];
}

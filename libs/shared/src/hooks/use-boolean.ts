import { useCallback, useState } from 'react';

export interface UseBoolean {
  value: boolean;
  onTrue: () => void;
  onFalse: () => void;
  onToggle: () => void;
  setValue: (value: boolean) => void;
}

export function useBoolean(
  defaultValue?: boolean,
  onValueChange?: (v: boolean) => void
): UseBoolean {
  const [value, _setValue] = useState(!!defaultValue);

  const setValue = (v: boolean | 'toggle') => {
    const val = v === 'toggle' ? !value : v;
    _setValue(val);
    onValueChange?.(val);
  };

  const onTrue = useCallback(() => {
    setValue(true);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const onFalse = useCallback(() => {
    setValue(false);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const onToggle = useCallback(() => {
    setValue('toggle');
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return {
    value,
    onTrue,
    onFalse,
    onToggle,
    setValue,
  };
}

'use client';
import { useCallback, useMemo, useState } from 'react';

// eslint-disable-next-line no-unused-vars
export function useInput<T>(initialValue: T): [T, (value: T) => void] {
  const [value, setValue] = useState<T>(initialValue);

  const handleChangeValue = useCallback((value: T) => {
    setValue(value);
  }, []);

  return useMemo(() => [value, handleChangeValue], [value, handleChangeValue]);
}

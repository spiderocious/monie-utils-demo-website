import { useState, useCallback } from 'react';
import type { InputValues } from '../types';
import { defaultInputs } from '../data/defaultInputs';
import { useDebounce } from './useDebounce';

export const useInputs = () => {
  const [inputs, setInputs] = useState<InputValues>(defaultInputs);
  const debouncedInputs = useDebounce(inputs, 100);

  const updateInput = useCallback((functionName: string, field: string, value: number | string) => {
    let parsedValue: number | string | number[] | object = value;

    // Try to parse JSON for array/object fields
    if (typeof value === 'string' && (value.startsWith('[') || value.startsWith('{'))) {
      try {
        parsedValue = JSON.parse(value);
      } catch {
        // Keep as string if parsing fails
        parsedValue = value;
      }
    }

    setInputs((prev) => ({
      ...prev,
      [functionName]: {
        ...prev[functionName],
        [field]: parsedValue,
      },
    }));
  }, []);

  return {
    inputs,
    debouncedInputs,
    updateInput,
  };
};

import { useCallback } from 'react';
import { getLiveResult } from '../utils/liveResult';
import type { InputValues } from '../types';

export const useLiveDemo = (debouncedInputs: InputValues) => {
  const getLiveDemoResult = useCallback(
    (functionName: string) => {
      return getLiveResult(functionName, debouncedInputs);
    },
    [debouncedInputs]
  );

  return { getLiveDemoResult };
};

import { DependencyList, useEffect, useRef } from 'react';

// avoid running effect on mount
const useSecondRunEffect = (
  callback: () => void,
  deps: DependencyList | undefined
) => {
  const isFirstRun = useRef(true);

  useEffect(() => {
    if (isFirstRun.current) {
      isFirstRun.current = false;
      return;
    }
    callback();
  }, deps);
};

export default useSecondRunEffect;

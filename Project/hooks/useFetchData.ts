import { useState, useEffect, useCallback } from "react";

export interface AsyncState<T> {
  data: T | null;
  loading: boolean;
  error: string | null;
}

const useFetchData = <T>(asyncFunction: () => Promise<T>, immediate = true) => {
  const [state, setState] = useState<AsyncState<T>>({
    data: null,
    loading: false,
    error: null,
  });
  // useCallback ensures that executeFn is memoized and only changes if asyncFunction changes.
  const executeFn = useCallback(async () => {
    setState({ data: null, loading: true, error: null });
    // setState((_) => ({ ..._, loading: true }));

    try {
      const data = await asyncFunction();
      setState({ data, loading: false, error: null });
    } catch (error) {
      setState({ data: null, loading: false, error: error?.message  });
    } 
    // finally {
    //   setState((_) => ({ ..._, loading: false }));
    // }
  }, [asyncFunction]);

  useEffect(() => {
    if (immediate) {
      executeFn();
    }
  }, [executeFn, immediate]);

  return { ...state, executeFn };
};

export default useFetchData;

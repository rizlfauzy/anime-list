"use client";

import { useRef, useLayoutEffect, useCallback, useReducer } from "react";

interface IState {
  data: null | Object;
  status: "idle" | "pending" | "resolved" | "rejected";
  error: null | Object;
}

const default_state: IState = {
  data: null, status: "idle", error: null
}

function useSafeDispatch(dispatch: Function) {
  const mounted = useRef(false);
  useLayoutEffect(() => {
    mounted.current = true;
    return () => {
      mounted.current = false;
    };
  }, []);
  return useCallback((...args: any) => (mounted.current ? dispatch(...args) : void 0), [dispatch]);
}

export default function useAsync(initial_state:IState = default_state) {
  const [state, unsafeDispatch]: [state: IState, unsafeDispatch:Function] = useReducer((state: IState, action: any) => ({ ...state, ...action }), { ...default_state, ...initial_state });
  const dispatch = useSafeDispatch(unsafeDispatch);

  const run = useCallback(
    async (promise: Promise<any>) => {
      dispatch({ status: "pending" });
      try {
        const data = await promise;
        dispatch({ data, status: "resolved" });
        return data;
      } catch (error) {
        dispatch({ status: "rejected", error });
        return Promise.reject(error);
      }
    },
    [dispatch]
  );

  const reset = useCallback(() => dispatch(default_state), [dispatch]);

  return { ...state, run, reset, is_loading: state.status == "idle" || state.status == "pending" };
}
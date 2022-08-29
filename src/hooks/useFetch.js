import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

const useFetch = (action, selector) => {
  const dispatch = useDispatch();
  const {
    [selector]: data,
    loading,
    error,
  } = useSelector((state) => state[selector]);
  useEffect(() => {
    dispatch(action());
  }, [action, dispatch]);
  return { data, loading, error };
};

export default useFetch;

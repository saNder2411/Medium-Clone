import {useState, useEffect, useCallback} from 'react';


const useRequest = (request) => {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  const updateState = ({loading = true, data = null, error = null} = {}) => {
    setLoading(loading);
    setData(data);
    setError(error);
  };

  const doRequest = useCallback(() => updateState(), []);

  useEffect(() => {
    let cancelled = false;

    if (loading) {
      request()
        .then(({data}) => !cancelled && updateState({loading: false, data, error: null}))
        .catch(({response}) => !cancelled && updateState({loading: false, data: null, error: response}));
    }

    return () => {
      cancelled = true;
    };
  }, [loading, request]);

  return [{loading, data, error}, doRequest];
};

export default useRequest;
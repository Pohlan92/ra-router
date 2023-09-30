import { useEffect, useState } from 'react';

export const useJsonFetch = (url, opts) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const sendRequest = async () => {
    setLoading(true);
    try {
      const response = await fetch(url, opts);
      const data = await response.json();
      setData(data);
    } catch (e) {
      setError(e);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    sendRequest(url, opts);
  }, []);

  return { data, loading, error, resendRequest: sendRequest };
};

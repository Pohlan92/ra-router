import { useState } from 'react';

export const useDeleteFetch = (url) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const requestDelete = async () => {
    setLoading(true);
    try {
      const data = await fetch(url, {
        method: 'DELETE',
      });
      setData(data);
    } catch (e) {
      setError(e);
    } finally {
      setLoading(false);
    }
  };

  return { data, loading, error, requestDelete };
};

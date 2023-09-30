import { useState } from 'react';

export const usePostData = (url) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const postData = async (body) => {
    setLoading(true);
    try {
      const data = await fetch(url, {
        method: 'POST',
        body: JSON.stringify(body),
      });
      setData(data);
    } catch (e) {
      setError(e);
    } finally {
      setLoading(false);
    }
  };

  return { data, loading, error, postData };
};

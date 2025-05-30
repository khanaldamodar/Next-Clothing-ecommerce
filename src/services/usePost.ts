// hooks/usePost.js
import { useState } from 'react';
import axios from 'axios';

const usePost = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [response, setResponse] = useState(null);

  const postData = async (url: string, payload: Record<string, any>) => {
    setLoading(true);
    setError(null);

    try {
      const res = await axios.post(url, payload);
      setResponse(res.data);
    } catch (err: string | any) {
      setError(err.response?.data?.message || err.message || 'Something went wrong');
    } finally {
      setLoading(false);
    }
  };

  return { postData, response, loading, error };
};

export default usePost;

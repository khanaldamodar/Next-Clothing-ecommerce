// hooks/useDelete.js
import { useState } from 'react';
import axios from 'axios';

const useDelete = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [response, setResponse] = useState(null);

  const deleteData = async (url:string) => {
    setLoading(true);
    setError(null);

    try {
      const res = await axios.delete(url);
      setResponse(res.data);
    } catch (err: string | any) {
      setError(err.response?.data?.message || err.message || 'Delete failed');
    } finally {
      setLoading(false);
    }
  };

  return { deleteData, response, loading, error };
};

export default useDelete;

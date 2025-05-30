// hooks/useUpdate.js
import { useState } from 'react';
import axios from 'axios';

const useUpdate = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [response, setResponse] = useState(null);

  const updateData = async (url: string, updatedData: Record<string, any>, method = 'put') => {
    setLoading(true);
    setError(null);

    try {
      const res = method === 'put'
        ? await axios.put(url, updatedData)
        : await axios.patch(url, updatedData); // method can be 'put' or 'patch'
      setResponse(res.data);
    } catch (err: string | any) {
      setError(err.response?.data?.message || err.message || 'Update failed');
    } finally {
      setLoading(false);
    }
  };

  return { updateData, response, loading, error };
};

export default useUpdate;

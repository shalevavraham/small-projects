import React, { useEffect, useState } from "react";

const UseFetch = (url, option = {}) => {
  const [data, setData] = useState(null);
  const [pending, setPending] = useState(false);
  const [error, setError] = useState(null);

  const fetchData = async () => {
    setPending(true);
    try {
      const response = await fetch(url, { ...option });
      if (!response.ok) throw new Error(response.statusText);

      const result = await response.json();
      setData(result);
      setError(null);
      setPending(false);
    } catch (error) {
      setError(`${error}. Some Error Occured`);
      setPending(false);
    }
  };
  useEffect(() => {
    fetchData();
  }, url);

  return {data, error, pending}
};

export default UseFetch;

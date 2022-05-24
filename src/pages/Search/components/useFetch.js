import axios from "axios";
import { useState, useEffect } from "react";
const useFetch = (url, paramName, paramValue) => {
  const [data, setData] = useState();
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState();

  useEffect(() => {
    const doFetch = async () => {
      try {
        const response = await axios.get(url, {
          params: { [paramName]: paramValue },
        });
        setData(response.data);
      } catch (err) {
        setError(err);
      } finally {
        setIsLoading(false);
      }
    };
    doFetch();
  }, [url, paramName, paramValue, setData]);
  return { data, isLoading, error };
};
export default useFetch;

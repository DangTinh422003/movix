import { useState, useEffect } from "react";
import { fetchDataFromApi } from "../utils/api";

function useFetch(url) {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    setData(null);
    setError(false);

    fetchDataFromApi(url)
      .then((res) => {
        setData(res);
      })
      .catch((err) => {
        setError("Something went wrong!");
      })
      .finally(() => {
        setLoading(false);
      });
  }, [url]);

  return { data, error, loading };
}

export default useFetch;

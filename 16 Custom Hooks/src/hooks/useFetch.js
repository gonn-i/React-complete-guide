import { useEffect, useState } from 'react';

export function useFetch(fetchFn, initalValue) {
  const [fetchedData, setFetchedData] = useState(initalValue);
  const [isFetching, setIsFetching] = useState(false);
  const [error, setError] = useState();

  useEffect(() => {
    async function fetchData() {
      setIsFetching(true);
      try {
        const places = await fetchFn();
        setFetchedData(places);
      } catch (error) {
        setError({ message: error.message || 'Failed to fetch places.' });
      }

      setIsFetching(false);
    }

    fetchData();
  }, []);
  return {
    fetchedData,
    setFetchedData,
    isFetching,
    error,
  };
}

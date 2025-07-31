import { useState, useEffect } from "react";

function useFetch(url) {
  const [data, setData] = useState(null);
  const [isPending, setIsPending] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getData = async () => {
      try {
        setIsPending(true);
        const req = await fetch(url);
        if (!req.ok) throw new Error(req.statusText);
        const data = await req.json();
        setData(data);
        // console.log(data);
        setIsPending(false);
      } catch (err) {
        setError(err);
        console.log(err.message);
        setIsPending(false);
      }
    };
    getData();
  }, [url]);
  return { data, isPending, error };
}

export { useFetch };

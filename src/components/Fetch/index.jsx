import { useEffect, useState } from "react";

export const API_KEY = import.meta.env.VITE_TMDB_API_KEY;

const useFetch = (endpoint) => {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [singleData,setSingle] = useState(null)

    useEffect(() => {
      
        const fetchData = async () => { 
            try {
                const response = await fetch(`https://api.themoviedb.org/3/${endpoint}?api_key=${API_KEY}&language=tr-TR`);
                
                if (!response.ok) {
                    throw new Error("Server xətası baş verdi.");
                }

                const result = await response.json();
                setData(result);
            } catch (err) {
                setError(err);
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, [endpoint]);

    return { data, loading, error };
    
};

export default useFetch;

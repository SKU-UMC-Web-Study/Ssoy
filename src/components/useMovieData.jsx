import { useEffect, useState } from 'react';
import axios from 'axios';

const useMovieData = (url, params, headers) => {
  const [movies, setMovies] = useState({ results: [] });
  const [isLoading, setIsLoading] =useState(true);

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const response = await axios.get(url, { params },{headers});
        setMovies(response.data);
        setIsLoading(false);
      } catch (error) {
        console.error(error);
        setIsLoading(false);
      }
    };

    fetchMovies();
  }, [url, params,headers]);

  return {results: movies.results, isLoading};
};

export default useMovieData;

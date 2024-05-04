import { useEffect, useState } from 'react';
import axios from 'axios';

const useMovieData = (url) => {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchMovies = async () => {
      setIsLoading(true);
      try {
        const response = await axios.get(url);
        setMovies(response.data.results);
      } catch (e) {
        console.log(e);
      }
      setIsLoading(false);
    };

    fetchMovies();
  }, []);

  return { results: movies, isLoading };
};

export default useMovieData;

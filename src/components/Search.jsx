import { useEffect, useState } from 'react';
import axios from 'axios';

const useSearch = (search) => {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchMovies = async () => {
      setIsLoading(true);
      try {
        const response = await axios.get(`https://api.themoviedb.org/3/search/movie?api_key=${import.meta.env.VITE_API_KEY}&query=${search}`);
        setMovies(response.data.results);
        console.log(response.data.results);
      } catch (e) {
        console.log(e);
      }
      setIsLoading(false);
    };

    fetchMovies();
  }, [search]);

  return { movies, isLoading};
};

export default useSearch;

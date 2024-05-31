import { useEffect, useState } from 'react';
import axios from 'axios';

const useMovieData = (url) => {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [detail, setDetail]=useState(null);


  useEffect(() => {
    const fetchMovies = async () => {
      setIsLoading(true);
      try {
        const response = await axios.get(url);
        setMovies(response.data.results);
        setDetail(response.data);
        console.log(response.data);
      } catch (e) {
        console.log(e);
      }
      setIsLoading(false);
    };

    fetchMovies();
  }, [url]);

  return { result:movies, isLoading ,detail};
};

export default useMovieData;

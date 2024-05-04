import Movie from './Movie';
import styled from 'styled-components'
import { createGlobalStyle } from 'styled-components';
import useMovieData from './useMovieData';
import Loading from './Loading';




const AppContainer = styled.div`
display : flex;
flex-wrap: wrap;
justify-content: center;
`;
const GlobalStyle = createGlobalStyle`
body{
  background-color: #262952;
}
`;

const Nowplaying = () =>{
  const url = `https://api.themoviedb.org/3/movie/now_playing?api_key=${import.meta.env.VITE_API_KEY}`;
  const { results: movies, isLoading } = useMovieData(url);

  return (
    <div>
      <GlobalStyle />
      <div>
        {isLoading ? (
          <Loading /> 
        ) : (
          <AppContainer>
            {movies.map((item) => (
              <Movie
                key={item.id}
                title={item.title}
                poster_path={item.poster_path}
                vote_average={item.vote_average}
                overview={item.overview}
              />
            ))}
          </AppContainer>
        )}
      </div>
    </div>
  );
};
  
  

export default Nowplaying;
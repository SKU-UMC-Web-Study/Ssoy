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

const Toprated = () =>{
  const url = 'https://api.themoviedb.org/3/movie/top_rated';
  const params = { language: 'en-US', page: '1' };
  const headers = {
    accept: 'application/json',
    Authorization: import.meta.env.VITE_API_TOKEN
  }
  const { results: movies, isLoading } = useMovieData(url, params, headers);

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
  
  

export default Toprated;
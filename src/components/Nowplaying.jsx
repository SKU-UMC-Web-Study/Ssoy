import styled from 'styled-components'
import { createGlobalStyle } from 'styled-components';
import useMovieData from '../hooks/useMovieData';
import Loading from './Loading';
import { Link } from 'react-router-dom';

const MovieContainer = styled.div`
position: relative;
width: 250px;
height: fit-content; 
margin: 16px;
background-color: #373b69;
color: white;
border-radius: 5px;
box-shadow: 3px 3px 5px rgba(0, 0, 0, 0.1);
overflow: hidden;
&:hover {
    opacity: 0.5;
  }
`;

const OverviewCon = styled.div `
position: absolute;
top: 0;
left: 0;
width: 100%;
height: 100%; 
background-color: rgba(0, 0, 0, 0.8);
color: white;
padding: 20px;
box-sizing: border-box;
opacity: 0;
text-align: left;
${MovieContainer}:hover & {
    opacity: 1;
  }
`;

const MovieInfo =styled.div `
display: flex;
padding: 20px;
justify-content: space-between;
align-items: center;
`;

const MovieTitle= styled.h4`
margin: 0;
`;

const MovieImg= styled.img `
max-width: 100%;
`;
const VoteSpan =styled.span`
margin-left: 3px;
`;


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
  const {result: movies, isLoading , detail} = useMovieData(url);

  return (
    <div>
      <GlobalStyle />
      <div>
      {isLoading ? (
  <Loading /> 
) : (
  <AppContainer>
   {movies.map(movie => (
       <Link key={movie.id} to={`/movies/${movie.id}`}>
      <MovieContainer>
        <MovieImg src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} alt="영화포스터" />
        <OverviewCon>
          <MovieTitle>{movie.title}</MovieTitle>
          <p>{movie.overview}</p>
        </OverviewCon>

        <MovieInfo>
          <MovieTitle>{movie.title}</MovieTitle>
          <VoteSpan>{movie.vote_average}</VoteSpan>
 
        </MovieInfo>
      </MovieContainer>
      </Link>
    ))}
  </AppContainer>
)}
      </div>
    </div>
  );
};
  
  

export default Nowplaying;
import styled from 'styled-components';
import useMovieData from './useMovieData';
import Loading from './Loading';
import { useParams } from 'react-router-dom';
import { createGlobalStyle } from 'styled-components';
import useCredit from './useCredit';

const GlobalStyle = createGlobalStyle`
  html, body {
    margin: 0;
    padding: 0;
    height: 100%;
    overflow: hidden;
  }

  body {
    background-image: linear-gradient(to bottom, rgba(38, 41, 82, 0.5), rgba(38, 41, 82, 0.5)), url(${props => props.backgroundImage});
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    overflow-y: auto;
  }
`;


const MovieContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  padding: 50px;
  color: white;
  position: relative;
  z-index: 1;
  
`;

const MovieImageCon = styled.div`
  flex-basis: 50%;
  max-width: 50%;
  justify-content: center;
  align-items: center;
`;

const MovieImg = styled.img`
  max-width: 80%;
  height: auto;
`;

const MovieOverview = styled.div`
  flex-basis: 50%;
  padding: 100px 20px;
  span {
    color: yellow;
  }
`;

const CreditCon = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin-top: 20px;
  max-height: 400px;
`;

const CreditItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 10px;
`;

const CreditImg = styled.img`
  width: 100px;
  height: 100px;
  margin: 10px;
  object-fit: cover;
  border-radius: 50%;
`;

const CreditName = styled.div`
  text-align: center;
  color: white;
`;
const DEFAULT='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSz7ztleRwzXhFdiwBYqZ8cib9RvEsukVVUS3niN1YQ&s'
const Moviedetail = () => {
  const { id } = useParams();
  const url = `https://api.themoviedb.org/3/movie/${id}?api_key=${import.meta.env.VITE_API_KEY}&language=ko`;
  const url2 = `https://api.themoviedb.org/3/movie/${id}/credits?api_key=${import.meta.env.VITE_API_KEY}&language=ko`;
  const { result: movies, isLoading, detail } = useMovieData(url);
  const { credits } = useCredit(url2);

  if (isLoading) {
    return <Loading />;
  }

  const Stars = ({ rating }) => {
    let Starcount = Math.round(rating);
    let stars = '';
    for (let i = 0; i < 10; i++) {
      stars += i < Starcount ? '★' : '';
    }
    return <span>{stars}</span>;
  };

  return (
    <div>
      <GlobalStyle backgroundImage={`https://image.tmdb.org/t/p/w500/${detail.backdrop_path}`} />
      <MovieContainer>
        <MovieImageCon>
          <MovieImg src={`https://image.tmdb.org/t/p/w500/${detail.poster_path}`} alt="영화포스터" />
        </MovieImageCon>
        <MovieOverview>
          <h2>{detail.title}</h2>
          <h3>평점: <Stars rating={detail.vote_average} /></h3>
          <h3>개봉일: {detail.release_date}</h3>
          {detail.overview ? (<p>{detail.overview}</p>) : (<p>tmdb에서 제공하는 API의 상세정보가 없습니다.</p>)}
        </MovieOverview>
      </MovieContainer>
      <CreditCon>
        {credits.map((credit) => (
          <CreditItem key={credit.id}>
            <CreditName>{credit.name}</CreditName>
            <CreditImg
              src={credit.profile_path?`https://image.tmdb.org/t/p/w500/${credit.profile_path}`:DEFAULT}
              alt={credit.name}
            />
          </CreditItem>
        ))}
      </CreditCon>
    </div>
  );
};

export default Moviedetail;

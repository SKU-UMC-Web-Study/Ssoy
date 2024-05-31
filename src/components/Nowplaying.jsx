import React, { useState, useEffect } from 'react';
import styled, { createGlobalStyle } from 'styled-components';
import useMovieData from '../hooks/useMovieData';
import Loading from './Loading';
import { Link } from 'react-router-dom';
import InfiniteScroll from 'react-infinite-scroll-component';

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

const OverviewCon = styled.div`
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

const MovieInfo = styled.div`
  display: flex;
  padding: 20px;
  justify-content: space-between;
  align-items: center;
`;

const MovieTitle = styled.h4`
  margin: 0;
`;

const MovieImg = styled.img`
  max-width: 100%;
`;

const VoteSpan = styled.span`
  margin-left: 3px;
`;

const AppContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

const GlobalStyle = createGlobalStyle`
  body {
    background-color: #262952;
  }
`;

const Nowplaying = () => {
  const [page, setPage] = useState(1);
  const [movies, setMovies] = useState([]);
  const [hasMore, setHasMore] = useState(true);
  const url = `https://api.themoviedb.org/3/movie/now_playing?api_key=${import.meta.env.VITE_API_KEY}&page=${page}`;
  const { result, isLoading } = useMovieData(url);

  useEffect(() => {
    if (result && result.length > 0) {
      setMovies(prevMovies => [...prevMovies, ...result]);
    }
  }, [result]);

  const fetchMoreData = () => {
    setPage(prevPage => prevPage + 1);
  };

  return (
    <div>
      <GlobalStyle />
      <div>
        {isLoading && page === 1 ? (
          <Loading />
        ) : (
          <>
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
            <InfiniteScroll
              dataLength={movies.length} // 반복되는 컴포넌트의 개수
              next={fetchMoreData} // 스크롤이 바닥에 닿으면 데이터를 더 불러오는 함수
              hasMore={hasMore} // 추가 데이터 유무
              loader={<Loading />} // 로딩스피너
            />
          </>
        )}
      </div>
    </div>
  );
};

export default Nowplaying;

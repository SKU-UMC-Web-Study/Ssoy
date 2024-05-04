import styled from 'styled-components';
import useMovieData from './useMovieData';
import Loading from './Loading';
import { useParams } from 'react-router-dom'; // useParams만 여기서 가져오기
import { useState } from 'react'; 

const MovieContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start; 
  background-color: rgba(10, 10, 92, 0.7);
`;

const MovieImage = styled.div`
  flex-basis: 50%; 
  max-width: 50%; 
  justify-content: center;
  align-items: center;
`;

const MovieImg = styled.img`
  padding: 50px;
  max-width: 80%;
  height: auto; 
`;

const MovieOverview = styled.div`
  flex-basis: 50%; 
  padding: 100px 20px;
  color: white; 
`;

const Moviedetail = () => {
    const { id } = useParams();  
    const url = `https://api.themoviedb.org/3/movie/${id}?api_key=${import.meta.env.VITE_API_KEY}&language=ko`;
    const { result: movies, isLoading, detail } = useMovieData(url);
    
    if (isLoading) {
        return <Loading />;
    }

    return (
        <MovieContainer>
            <MovieImage>
                <MovieImg src={`https://image.tmdb.org/t/p/w500/${detail.poster_path}`} alt="영화포스터" />
            </MovieImage>
            <MovieOverview>
                <h2>{detail.title}</h2>
                <h3>평점: {detail.vote_average}</h3>
                <h3>개봉일: {detail.release_date}</h3>
                {detail.overview ? (<p>{detail.overview}</p>) : (<p>tmdb에서 제공하는 API의 상세정보가 없습니다.</p>)}
            </MovieOverview>
        </MovieContainer>
    );
};

export default Moviedetail;

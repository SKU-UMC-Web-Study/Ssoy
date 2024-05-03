
import styled from 'styled-components'


const IMG_BASE_URL = "https://image.tmdb.org/t/p/w1280/";
function Movie (props) {
    const { title, poster_path, vote_average, id, overview,  } = props;
  return (
    
    
    <MovieContainer>
        <MovieImg src={IMG_BASE_URL + poster_path} alt = "영화포스터"/>
        <OverviewCon>
            <MovieTitle>{title}</MovieTitle>
            <p>{overview}</p>
        </OverviewCon>

        <MovieInfo>
            <MovieTitle>{title}</MovieTitle>
            <VoteSpan>{vote_average}</VoteSpan>
            <p>
                {id}
            </p>
            
        </MovieInfo>
        
    </MovieContainer>
    
  )
}

export default Movie;

import styled from 'styled-components'

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

const IMG_BASE_URL = "https://image.tmdb.org/t/p/w1280/";
function Movie (props) {
    const { title, poster_path, vote_average, id, overview } = props;
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
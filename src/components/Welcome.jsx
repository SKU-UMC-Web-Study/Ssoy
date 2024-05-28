import styled from 'styled-components';
import { createGlobalStyle } from 'styled-components';
import { useState, useEffect } from 'react'; 
import useSearch from '../hooks/useSearch';
import Loading from './Loading';
import useDebounce from '../hooks/useDebounce';
import {Link} from 'react-router-dom';
import useGetUser from '../hooks/useGetuser';

const Container = styled.div`
  width: 100%;
  height: 400px;
  background-color: #d070fb;
  display: flex;
  justify-content: center;
  align-items: center;
  p {
    font-size: 50px;
    font-weight: bold;
  }
`;

const SearchContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column; 
  justify-content: center;
  align-items: center;
  
  h2 {
    text-align: center;
  }
`;

const Inputcon = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const GlobalStyle = createGlobalStyle`
  body {
    background-color: #262952;
    
  }
`;

const Input = styled.input`
  width: 100%;
  padding: 12px 20px;
  margin: 8px 0;
  display: inline-block;
  border: none;
  border-radius: 20px;
  box-sizing: border-box;
  font-size: 16px;
`;

const Button = styled.button`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background-color: yellow;
  color: black;
  padding: 10px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 10px;
  margin: 4px 2px;
  cursor: pointer;
  border: none;
`;

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
  background-color: rgba(0, 0, 0, 0.5); 
  padding: 20px; 
  overflow-y: auto;
  max-height: calc(100vh - 400px);
  width: 100vw;
  &::-webkit-scrollbar {
    width: 12px;
  }

  &::-webkit-scrollbar-thumb {
    background: #edbb32; 
    border-radius: 10px; 
  }

  &::-webkit-scrollbar-track {
    background: #05052e; 
  }
`;
const Modal = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: white;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  z-index: 1000;
`;
const ModalContent = styled.div`
  background-color: white;
  padding: 20px;
  border-radius: 10px;
  text-align: center;
`;

const ModalButton = styled.button`
  margin-top: 20px;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  background-color: #d070fb;
  color: white;
  font-size: 16px;
  cursor: pointer;
`;

const Welcome = () => {
  const [inputValue, setInputValue] = useState('');
  const [show, setShow] =useState(false);
  const debouncedText = useDebounce(inputValue, 200);
  const [modalVisible, setModalVisible] = useState(true);
  const {movies, isLoading } = useSearch(debouncedText);
  const { loading, username } = useGetUser();
  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };
  useEffect(() => {
    setShow(inputValue.trim() !== ''); 
  }, [inputValue]);
  const handleCloseModal = () => {
    setModalVisible(false);
  };
  return (
    <div>
      <GlobalStyle />
      <div>
        {modalVisible && (
          <Modal>
            <ModalContent>
              {loading ? (
                <p>로딩 중...</p>
              ) : (
                <p>{username ? `${username}님 환영합니다` : '환영합니다'}</p>
              )}
              <ModalButton onClick={handleCloseModal}>확인</ModalButton>
            </ModalContent>
          </Modal>
        )}
        <Container>
          <p>환영합니다</p>
        </Container>
        <SearchContainer>
          <h2>Find your movies!</h2>
          <Inputcon>
            <Input type="text" value={inputValue} onChange={handleInputChange} />
            <Button onClick={handleInputChange}>검색</Button> 
          </Inputcon>
        </SearchContainer>
        <div>
          {isLoading ? 
          '데이터를 받아오는 중입니다.': 
            show && (         
            <AppContainer>
              {movies.map((movie) => (
                <Link key={movie.id} to={`/movies/${movie.id}`}>
                <MovieContainer key={movie.id}>
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
    </div>
  );
};

export default Welcome;

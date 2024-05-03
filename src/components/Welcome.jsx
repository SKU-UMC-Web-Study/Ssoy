import styled from 'styled-components';
import { createGlobalStyle } from 'styled-components';
const Container = styled.div`
  width: 100%;
  height: 400px;
  background-color:  #d070fb;
  display: flex;
  justify-content: center;
  align-items: center;
  p{
    font-size: 50px;
    font-weight: bold;
  }
`;

const SearchContainer = styled.div`
  width:50%
  display: flex;
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
 
input {
    width: 50%;
  padding: 12px 20px;
  margin: 8px 0;
  display: inline-block;
  border: none;
  border-radius: 20px;
  box-sizing: border-box;
  font-size: 16px;
  }
  button {
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
  }
`
const GlobalStyle = createGlobalStyle`
body{
  background-color: #262952;
}
`;
const Welcome = () => {
    return (
      <div>
        <GlobalStyle/>
        <div>
        <Container>
          <p>환영합니다</p>
        </Container>
        <SearchContainer>
        <h2>Find your movies!</h2>
            <Inputcon>
          
          <input type="text" />
          <button>검색</button>
          </Inputcon>
        </SearchContainer>
        </div>
      </div>
    );
  };
  
  export default Welcome;

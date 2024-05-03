import styled from 'styled-components';
import { createGlobalStyle } from 'styled-components';
import { Link } from 'react-router-dom';


const GlobalStyle = createGlobalStyle`
body{
  background-color: #262952;
}
`;

const Container0 = styled.div`
color: white;
padding:300px;
  h1, h3, p, h2{
    color: white;
  }
 
`;

const Container1 =styled.div`
display: flex;
  justify-content: center;
  align-items: center;
`
const Container2 =styled.div`
display: flex;
  justify-content: center;
  align-items: center;
`
const Container3 =styled.div`
display: flex;
  justify-content: center;
  align-items: center;
`
const Container4 =styled.div`
display: flex;
  justify-content: center;
  align-items: center;
`
const NotFound = () => {
 
    return (
      <div>
        <GlobalStyle/>
        
          <Container0>
            <Container1><h1>Oops!</h1></Container1>
            <Container2><h3>예상치 못한 에러가 발생했습니다ㅠㅠㅠㅠ</h3></Container2>
            <Container3><p>Not Found</p></Container3>
            <Container4><Link to="/"><h2>메인으로 이동하기</h2></Link></Container4>
            
          </Container0>
          
      </div>
    );
  };
  
  export default NotFound;

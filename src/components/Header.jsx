import { Link, useLocation , useNavigate} from 'react-router-dom';
import styled from 'styled-components';
import { useState, useEffect } from 'react';

const Navcontainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 20px;
  background-color: black;
`;

const LogoLink = styled(Link)`
  color: white;
  text-decoration: none;
  font-size: 30px;
  flex-grow: 0;
`;

const NavMenu = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
`;

const NavLink = styled(Link)`
  color: ${props => props.isClicked ? 'yellow' : 'white'};
  text-decoration: none;
  font-size: 16px;
  padding: 10px;

  &:hover {
    font-weight: bold;
    color: yellow; 
  }
`;
const LogoutButton = styled.button`
  color: white;
  background: none;
  border: none;
  font-size: 16px;
  padding: 10px;
  cursor: pointer;

  &:hover {
    font-weight: bold;
    color: yellow; 
  }
`;


const Header = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const location = useLocation();
  const pathname = location.pathname; 
  const navigate = useNavigate();

  
  useEffect(() => {
    const token = localStorage.getItem('token');
    if(token){
      setIsLoggedIn(true);
    }
    else{
      setIsLoggedIn(false);
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('token');
    setIsLoggedIn(false);
    navigate('/');
  };

  
  return (
    <nav>
      <Navcontainer>
        <LogoLink to="/">Ssoy Movie</LogoLink>
        <NavMenu>
          <NavLink to="/popular" isClicked={pathname === '/popular'}>Popular</NavLink>
          <NavLink to="/nowplaying" isClicked={pathname === '/nowplaying'}>Now Playing</NavLink>
          <NavLink to="/toprated" isClicked={pathname === '/toprated'}>TopRated</NavLink>
          <NavLink to="/upcoming" isClicked={pathname === '/upcoming'}>Upcoming</NavLink>
          {isLoggedIn ? (
            <LogoutButton onClick={handleLogout}>로그아웃</LogoutButton>
          ) : (
            <>
              <NavLink to="/signup" isClicked={pathname === '/signup'}>회원가입</NavLink>
              <NavLink to="/login" isClicked={pathname === '/login'}>로그인</NavLink>
            </>
          )}
        </NavMenu>
      </Navcontainer>
    </nav>
  );
};

export default Header;

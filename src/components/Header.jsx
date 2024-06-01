import { Link, useLocation , useNavigate} from 'react-router-dom';
import styled from 'styled-components';
import { useState, useEffect } from 'react';
import { useMediaQuery } from 'react-responsive';
import { RiMenuLine } from 'react-icons/ri';

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

const SideBarCon = styled.div`
position: fixed;
top: 0;
right: ${props => props.isOpen ? '0' : '-100%'};
width: 100%;
height: 100vh;
background-color: #262952;
transition: right 0.3s ease-in-out;

  
`;

const SideBarMenu = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px;
`;

const SideBarLink = styled(Link)`
  color: white;
  text-decoration: none;
  font-size: 16px;
  padding: 10px;

  &:hover {
    font-weight: bold;
    color: yellow; 
  }
`;
const StyledMenuIcon = styled(RiMenuLine)`
  color: white;
  font-size: 30px;
  cursor: pointer;
`;
const Header = () => {
  const isBigScreen = useMediaQuery({minWidth: 769});
  const isSmallScreen = useMediaQuery({maxWidth: 768});
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
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
      {isBigScreen && (
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
      )}

      {isSmallScreen && (
        <>
        <Navcontainer>
          <LogoLink to="/">Ssoy Movie</LogoLink>
          <StyledMenuIcon onClick={() => setIsOpen(!isOpen)} />
          </Navcontainer>
          <SideBarCon isOpen={!isOpen}>
            <Navcontainer>
          <LogoLink to="/">Ssoy Movie</LogoLink>
          <StyledMenuIcon onClick={() => setIsOpen(!isOpen)} />
          </Navcontainer>
            <SideBarMenu>
              <SideBarLink to="/popular" onClick={() => setIsOpen(!isOpen)} isClicked={pathname === '/popular'}>Popular</SideBarLink>
              <SideBarLink to="/nowplaying" onClick={() => setIsOpen(!isOpen)} isClicked={pathname === '/nowplaying'}>Now Playing</SideBarLink>
              <SideBarLink to="/toprated" onClick={() => setIsOpen(!isOpen)} isClicked={pathname === '/toprated'}>TopRated</SideBarLink>
              <SideBarLink to="/upcoming" onClick={() => setIsOpen(!isOpen)} isClicked={pathname === '/upcoming'}>Upcoming</SideBarLink>
              {isLoggedIn ? (
                <LogoutButton onClick={handleLogout}>로그아웃</LogoutButton>
              ) : (
                <>
                  <SideBarLink to="/signup" onClick={() => setIsOpen(!isOpen)} isClicked={pathname === '/signup'}>회원가입</SideBarLink>
                  <SideBarLink to="/login" onClick={() => setIsOpen(!isOpen)} isClicked={pathname === '/login'}>로그인</SideBarLink>
                </>
              )}
            </SideBarMenu>
          </SideBarCon>
        </>
      )}
    </nav>
  );
};

export default Header;

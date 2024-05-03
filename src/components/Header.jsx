import { Link, useLocation } from 'react-router-dom';
import styled from 'styled-components';
import { useState } from 'react';

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

const Header = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const handleClick = () => {
    setIsLoggedIn(true);
  };

  const location = useLocation();
  const pathname = location.pathname; 

  return (
    <nav>
      <Navcontainer>
        <LogoLink to="/">Ssoy Movie</LogoLink>
        <NavMenu>
          <NavLink to="/popular" isClicked={pathname === '/popular'}>Popular</NavLink>
          <NavLink to="/nowplaying" isClicked={pathname === '/nowplaying'}>Now Playing</NavLink>
          <NavLink to="/toprated" isClicked={pathname === '/toprated'}>TopRated</NavLink>
          <NavLink to="/upcoming" isClicked={pathname === '/upcoming'}>Upcoming</NavLink>
          <NavLink to="/login" onClick={handleClick}>{isLoggedIn ? "로그아웃" : "로그인"}</NavLink>
        </NavMenu>
      </Navcontainer>
    </nav>
  );
};

export default Header;

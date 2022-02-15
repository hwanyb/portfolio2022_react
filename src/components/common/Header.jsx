import React from 'react';
import styled from '@emotion/styled';

const Base = styled.header`
  position: fixed;
  width: 100%;
  height: 86px;
  display: flex;
  justify-content: space-between;
  padding: 28px 29px;
  box-sizing: border-box;
  font-family: 'Gotham', sans-serif;
  font-weight: 400;
  font-size: 15px;
  z-index: 99;
`;

const LogoWrapper = styled.div`
  width: 24px;
  height: 30px;
`;

const LogoImg = styled.img`
  
`;

const HeaderNav = styled.ul`
  display: flex;
  list-style: none;
  justify-content: flex-end;
  text-align: right;
  margin: 0;
  padding: 0;
  /* height: 50px; */
`;

const NavItem = styled.li`
  margin: 0;
  margin-left: 90px;
  /* line-height: 50px; */
`;

const StyledLink = styled.a`
  text-decoration: none;
  color:#000000;
`;

// const ActiveMenu = styled(Link)``;


const Header = () => {
  return (
    <Base>
      <LogoWrapper>
        <LogoImg src='/images/headerlogogrey.png' alt="logo" />
      </LogoWrapper>
      <HeaderNav>
        <NavItem>
          <StyledLink>HOME</StyledLink>
        </NavItem>
        <NavItem>
          <StyledLink>ABOUT</StyledLink>
        </NavItem>
        <NavItem>
          <StyledLink>WORK</StyledLink>
        </NavItem>
        <NavItem>
          <StyledLink>FAQ</StyledLink>
        </NavItem>
        <NavItem>
          <StyledLink>CONTACT</StyledLink>
        </NavItem>
      </HeaderNav>
    </Base>
  )
}

export default Header;
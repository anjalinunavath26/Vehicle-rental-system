import React from 'react';
import styled from 'styled-components';

const NavbarContainer = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px 40px;
  background-color: #fff;
  border-bottom: 1px solid #eaeaea;
`;

const Logo = styled.h1`
  font-size: 24px;
  color: #ff4a00;
  margin: 0;
`;

const LogoSpan = styled.span`
  color: #000;
`;

const NavLinks = styled.ul`
  display: flex;
  list-style: none;
  margin: 0;
  padding: 0;
`;

const NavLink = styled.li`
  margin: 0 15px;
  font-size: 16px;

  & > a {
    color: #000;
    text-decoration: none;
    &:hover {
      text-decoration: underline;
    }
  }
`;

const ProfileButton = styled.div`
  display: flex;
  align-items: center;
  background-color: #ff4a00;
  color: #fff;
  padding: 10px 20px;
  border-radius: 50px;
  cursor: pointer;
  font-size: 16px;
`;

const ProfileIcon = styled.div`
  margin-left: 10px;
  font-size: 18px;
`;

const Navbar = () => {

  return (
    <NavbarContainer>
      <Logo>
        RIDE<LogoSpan>QUEST</LogoSpan>
      </Logo>
      <NavLinks>
        <NavLink><a href="/">Home</a></NavLink>
        <NavLink><a href="/about-us">About Us</a></NavLink>
        <NavLink><a href="/vehicles">Vehicles</a></NavLink>
        <NavLink><a href="/contact">Contact Us</a></NavLink>
      </NavLinks>
      <ProfileButton>
        Profile
        <ProfileIcon>👤</ProfileIcon>
      </ProfileButton>
    </NavbarContainer>
  );
};

export default Navbar;

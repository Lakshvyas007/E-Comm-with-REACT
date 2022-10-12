import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import Nav from "./Nav";

const Header = () => {
  return (
    <MainHeader>
      <NavLink to="/">
        <img className="logo" src="./images/logo.png" alt="my logo img" />
      </NavLink>
      <Dname>
        Dharmendra Enterprises
      </Dname>
      <Nav />
    </MainHeader>
  );
};

const MainHeader = styled.header`
  padding: 0 4.8rem;
  height: 10rem;
  background-color: ${({ theme }) => theme.colors.bg};
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;

  .logo {
    height: 7rem;
  }
`;

const Dname = styled.h2`
font-size: 2.5rem;
font-weight: bolder;
text-shadow: 2px 2px 5px rgba(0, 0, 0, 0.283);


@media (max-width:1000px) {
    font-size:2rem;
}
@media (max-width:920px) {
    display:none;
  }
  @media (max-width:768px) {
    font-size:3rem;
    display:block;
  }
  @media (max-width:470px){
  display:none;
    
}
`;

export default Header;
import React from "react";
import styled from "styled-components/macro";
import logo from "../../assets/icons/main_logo.png";
import { devices } from "../../Media Queries/Queries";
const Nav = styled.nav`
  padding: 1em 0;
  background-color: white;
`;
const Logo = styled.img`
  padding-left: 2em;
  @media ${devices.tablet} {
    padding-left: 5.5em;
  }
`;

function Navbar() {
  return (
    <Nav>
      <Logo src={logo} alt="" />
    </Nav>
  );
}

export default Navbar;

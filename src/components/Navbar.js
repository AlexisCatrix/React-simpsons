import React from "react";
import styled from "styled-components";

const NavBar = styled.div`
  background: #554478;
  padding: 1em 2em;
  
  *{
    color: white;
  }
`;

function Navbar() {
  return (
    <NavBar className="Navbar">
      <a href="https://fr.wikipedia.org/wiki/Les_Simpson">Simpsons Quotes</a>
    </NavBar>
  );
}

export default Navbar;

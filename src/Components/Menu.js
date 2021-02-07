import React from 'react';
import styled from 'styled-components';
import { Link } from "react-router-dom";
import { bool } from 'prop-types'; //Check, what is this?

const StyledMenu = styled.nav`
background-color:white;
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 100vh;
  width:30%;
  text-align: left;
  padding: 2rem;
  position: absolute;
  top: 0;
  left: 0;
  transition: transform 0.3s ease-in-out;
  transform: ${({ open }) => open ? 'translateX(0)' : 'translateX(-100%)'};
  z-index:10;
   
  @media (max-width: ${({ theme }) => theme.mobile}) {
    width: 100%;
  }

ul {
  background-color:white;
}
li{
  background-color:white;
}
  a {
    font-size: 40px;
    text-transform: uppercase;
    padding: 2rem 0;
    font-weight: 800;
    letter-spacing: 0.5rem;
    color: black;
    text-decoration: none;
    transition: color 0.3s linear;
    line-height:100px;
background-color:white;
    
    @media (max-width: ${({ theme }) => theme.mobile}) {
      font-size: 1rem;
      text-align: center;
    }

    &:hover {
      color: #96c5b0;
      font-family: 'Monoton';
      font-size:50px;
      letter-spacing: 0.7rem;
    }
  }
`;
const Menu = ({open}) => {
    return (
          <StyledMenu open={open}>
            <ul>
                <li>
                    <Link to='/'>Home</Link>
                </li>
                <li>
                    <Link to='/about'>About</Link>
                </li>
                <li>
                    <Link to='/projects'>Projects</Link>
                </li>
                <li>
                    <Link to='/contact'>Contact</Link>
                </li>
            </ul>
        </StyledMenu>
    )
}
Menu.propTypes = {
  open: bool.isRequired,
}
export default Menu;
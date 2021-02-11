import React from 'react';
import styled from 'styled-components';
import { Link } from "react-router-dom";
import { bool } from 'prop-types';

const StyledMenu = styled.nav`
background-color:white;
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 100%;
  min-width:20%;
  text-align: left;
  padding: 2rem;
  position: absolute;
  top: 0;
  left: 0;
  transition: transform 0.3s ease-in-out;
  transform: ${({ open }) => open ? 'translateX(0)' : 'translateX(-100%)'};
  z-index:10;
   overflow:hidden;
  @media (max-width: ${({ theme }) => theme.mobile}) {
    width: 50%;
  }
  @media (max-width: ${({ theme }) => theme.smallScreen}) {
    width: 60%;

  }

ul {
  background-color:white;
}
li{
  background-color:white;
  list-style:none;
}
  a {
    font-size: 15px;
    text-transform: uppercase;
    padding: 2rem 0;
    font-weight: 800;
    letter-spacing: 0.5rem;
    color: black;
    text-decoration: none;
    transition: color 0.3s linear;
    line-height:100px;
  background-color:white;
    
    @media (max-width: ${({ theme }) => theme.smallScreen}) {
      font-size: 0.5rem;
      text-align: center;

    }

    &:hover {
      color: ${({ theme }) => theme.primaryGreen};
      font-family: 'Monoton';
      letter-spacing: 0.7rem;
    }
  }
`;

const Menu = ({open, setOpen}) => {
    return (
      <StyledMenu onClick={() => setOpen(!open)} open={open} setOpen={setOpen} >
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
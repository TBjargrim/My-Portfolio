import React from 'react';
import styled from 'styled-components';
import { bool, func } from 'prop-types';

const StyledBurger = styled.button`

  position: absolute;
  top: 45%;
  left: 3%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: 2rem;
  height: 2rem;
  background: transparent;
  border: none;
  cursor: pointer;
  padding: 0;
  z-index: 4;
  /* transform: matrix(1, 2, -1, 1, 80, 80); */
 
  &:focus {
    outline: none;
    background-color:white;
  }

  div {
    width: 2rem;
    height: 0.25rem;
    
    border-radius: 10px;
    transition: all 0.3s linear;
    position: relative;
    transform-origin: 1px;
    background-color:white;
  }
`;

function Burger({open, setOpen}) {
    return (
        <StyledBurger onClick={() => setOpen(!open)} open={open} setOpen={setOpen}>
            <div />
            <div />
            <div />
        </StyledBurger>
    );
}
Burger.propTypes={
  open: bool.isRequired,
  setOpen: func.isRequired,
}

export default Burger;
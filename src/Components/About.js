import styled from 'styled-components';
import me from './Images/me.png'
import { motion } from 'framer-motion';
import { pageVariants, pageTransition } from '../Styles/FMStyles';


const StyledDiv = styled.div`
    background-color:black;
    height: 100vh;
    width:100%;
    
h2{
    font-family: 'Roboto', sans-serif;
    color:white;
    position:absolute;
    top:15%;
    left:18%;
    font-size:130px;
    margin-bottom:40px;
    letter-spacing:4px;
    text-transform:uppercase;
    z-index:2;
    background-color:rgba(0, 0, 0, 0.5);
    
    @media (max-width: ${({ theme }) => theme.mobile}) {
    left:5%;
  }
  @media (max-width: ${({ theme }) => theme.smallScreen}) {
      font-size:80px;
      
  }
}
`
const StyledSection = styled.section`
    position:absolute;
    letter-spacing: 1px;
    color:white;
    left:18%;
    top:40%;
    max-width:600px;
    line-height:50px;
    z-index:1;
    background-color:rgba(0, 0, 0, 0.0);
h4{
    font-size:48px;
    letter-spacing:6px;
    font-family: 'Roboto', sans-serif;
    margin-bottom:20px;
    background-color:rgba(0, 0, 0, 0.0);
}
h5 {
    font-size:22px;
    letter-spacing:5px;
    margin-top:60px;
    margin-bottom:20px;
    font-family: 'Roboto', sans-serif;
    letter-spacing: 1px;
    font-weight:200;
    background-color:rgba(0, 0, 0, 0.0);
}
    @media (max-width: ${({ theme }) => theme.mobile}) {
    left:5%;
  }
`
const DivOne = styled.div `
position:absolute;
    border-top:5px solid #553555;
    width:45%;
    border-radius:20px;
    `

const DivTwo = styled.div`
position:absolute;
    margin-top:15px;
    border-top:5px solid #553555;
    width:45%;
    border-radius:20px;
    left:25%;
    `
const ImageContainer =styled.div`
position:absolute;
top:30%;
right:10%;
height:1000px;
width:600px;
img {
    width:100%;
    height:auto;
}
  @media (max-width: ${({ theme }) => theme.mobile}) {
    height:800px;
    width:450px;
    right:1%;
    top:20%;
  }
  @media (max-width: ${({ theme }) => theme.smallScreen}){
      display:none;
  }
`


function About() {

    return (
        <StyledDiv>
            <motion.h2
                initial="out"
                animate="in"
                exit="out"
                variants={pageVariants}
                transition={pageTransition}>About</motion.h2>
            <StyledSection>
                <h4>Front End</h4>
                <DivOne></DivOne>
                <DivTwo></DivTwo>
                <h5>I´m currently studing Front-End Development at KYH in Stockholm,
            and my goal is to work with a variety of clients and on many diverse projects.</h5>
            </StyledSection>
            <ImageContainer>
                <img src={me} alt="Therese"></img>
            </ImageContainer>
        </StyledDiv>
    )
}
export default About;
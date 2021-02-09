
import github from './Images/github.png'
import linkedin from './Images/linkedin.jpg'
import email from './Images/email.png'
// import { motion } from "framer-motion";

import styled from 'styled-components';



const StyledDiv = styled.div`
background-color:black;
width:100%;
height:100vh;
color:white;
position:relative;

h2{
    font-family: 'Roboto', sans-serif;
    color:white;
    position:absolute;
    top:15%;
    left:16%;
    font-size:130px;
    margin-bottom:40px;
    letter-spacing:4px;
    text-transform:uppercase;
    display:flex;
    flex-wrap:wrap;

    @media (max-width: ${({ theme }) => theme.mobile}) {
    left:5%;
    font-size:90px;
  }
  @media (max-width: ${({ theme }) => theme.smallScreen}) {
      font-size:70px;
      
  }
  }

`
const ContactText = styled.div`
position:absolute;
top:50%;
left:15%;

    @media (max-width: ${({ theme }) => theme.mobile}) {
    left:2%;
    margin:0;
    }
    @media (max-width: ${({ theme }) => theme.smallScreen}) {
    left:0%;
    margin:0;
  }

`
const StyledSection = styled.section`
  display:flex;
   left:14%;
   z-index:1;


h5{
    font-size: 25px;
    letter-spacing: 3px;
    line-height: 40px;
    margin-top:10px;
    @media (max-width: ${({ theme }) => theme.smallScreen}) {
font-size:15px;
  }
}
a{
    margin-left:25px;

    color:white;
    text-decoration: none;
}
section{
    width:50px;
    height:50px;
  }

img {
    /* position:absolute; */
    width:100%;
    height:auto;
}

`
const LinesDiv=styled.div`
    position:relative;
    top:40%;
    left:16%;
    width:45%;
        @media (max-width: ${({ theme }) => theme.mobile}) {
    left:5%;
  }
  @media (max-width: ${({ theme }) => theme.smallScreen}) {
    left:2%;
  }
    `
const DivOne = styled.div`
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
function Contact() {

    return (
        <div>
            <StyledDiv>
                <h2>Get in touch</h2>
                <LinesDiv>
                <DivOne></DivOne>
                <DivTwo></DivTwo>
                </LinesDiv>
                <ContactText>
                    <StyledSection>
                        <section><img src={email} alt="image of an envelope" /></section>
                        <h5><a href="mailto:t.bjargrim@gmail.com" target="_blank">t.bjargrim@gmail.com</a> </h5>
                    </StyledSection>
                    <StyledSection>
                        <section><img src={github} alt="github logo" /></section>
                        <h5><a href="https://github.com/tbjargrim" target="_blank">View my github</a></h5>
                    </StyledSection>
                    <StyledSection>
                        <section><img src={linkedin} alt="linkedins logo" /></section>
                        <h5><a href="http://www.linkedin.com/in/tbjargrim" target="_blank">LinkedIn</a></h5>
                    </StyledSection>
                </ContactText>
            </StyledDiv>

        </div>
    )
}
export default Contact;
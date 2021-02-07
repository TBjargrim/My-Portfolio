import styled from 'styled-components';
import { ContainerDiv, BubblesDiv, BorderDiv} from '../Styles/Background';

// ${ ({ Background }) => Background.mobile }


const StyledDiv = styled.div`
    background-color:black;
    height: 100vh;
    width:100%;

    h3 {
    position:absolute;
    width:100%;
    top:10%;
    left:10%;
    color:white;
    border-top:1px solid white;
    padding-top:10px;
    text-transform:uppercase;
    letter-spacing:1px;
    z-index:1;
}
`
const StyledSection = styled.section`
    position:absolute;
    letter-spacing: 1px;
    color:white;
    left:10%;
    top:35%;
    max-width:600px;
    line-height:70px;
    z-index:1;
h4{
    font-size:48px;
    text-transform:uppercase;
    letter-spacing:6px;
    margin-bottom:20px;
}
h5 {
    font-size:32px;
    text-transform:lowercase;
    letter-spacing:5px;
    margin-top:60px;
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


function About() {

    return (
        <StyledDiv>
            <h3>about</h3>
            <StyledSection>
                <h4>Front End</h4>
                <DivOne></DivOne>
                <DivTwo></DivTwo>
                <h5> HTML / CSS / JAVASCRIPT / REACT </h5>
            </StyledSection>

            <ContainerDiv>
                <BubblesDiv></BubblesDiv>
                <BubblesDiv></BubblesDiv>
                <BubblesDiv></BubblesDiv>
                <BubblesDiv></BubblesDiv>
                <BubblesDiv></BubblesDiv>
                <BubblesDiv></BubblesDiv>
                <BubblesDiv></BubblesDiv>
                <BubblesDiv></BubblesDiv>
                <BubblesDiv></BubblesDiv>
                <BubblesDiv></BubblesDiv>
                <BubblesDiv></BubblesDiv>
                <BubblesDiv></BubblesDiv>
                <BubblesDiv></BubblesDiv>
                <BubblesDiv></BubblesDiv>
                <BubblesDiv></BubblesDiv>

                <BorderDiv></BorderDiv>
                <BorderDiv></BorderDiv>

                {/* https://www.youtube.com/watch?v=AKPNKn4Co2A */}
            </ContainerDiv>
        </StyledDiv>
    )
}
export default About;
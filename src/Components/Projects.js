import dino1 from './Images/dinoGame1.png'
import dino2 from './Images/dinoGame2.png'

import NoteApp1 from './Images/NoteApp1.png'
import NoteApp2 from './Images/NoteApp2.png'

import QuizApp1 from './Images/QuizApp1.png'
import QuizApp2 from './Images/QuizApp2.png'

import ToDoList1 from './Images/ToDoList1.png'
import ToDoList2 from './Images/ToDoList2.png'

import game2 from './Images/game2.png'
import game5 from './Images/game5.png'

import myFirstPage1 from './Images/myFirstPage1.png'
import myFirstPage2 from './Images/myFirstPage2.png'


import WeatherAPI from './WeatherAPI'
import styled from 'styled-components';
import {Grid, Row, Col} from '../Styles/Grid'

const HeadDiv = styled.div`
margin:0;
width:100%;
height:100%;

h2{
    display:flex;
    flex-wrap:wrap;
    font-family: 'Roboto', sans-serif;
    color:white;
    position:absolute;
    top:15%;
    left:15%;
    font-size:130px;
    margin-bottom:40px;
    letter-spacing:4px;
    text-transform:uppercase;
    @media (max-width: ${({ theme }) => theme.mobile}) {
    left:17%;
    font-size:90px;
    top:10%;
  }
    @media (max-width: ${({ theme }) => theme.smallScreen}) {
    font-size:60px;
      
  }
}
`
const ImageSection = styled.section`
position:relative;

img{
    width:100%;
    height:100%;
}

`

function Projects() {


    return (
        <HeadDiv>
            <h2>Projects</h2>
            <Grid>

                <Row>
                    <Col size={1}>
                        <ImageSection>
                            <img src={dino1}
                                onMouseOver={e => e.currentTarget.src=dino2}
                                onMouseOut={e => e.currentTarget.src=dino1}
                            ></img>
                        </ImageSection>
                        <Col size={1}>
                            <ImageSection>
                                <img src={QuizApp1}
                                    onMouseOver={e => e.currentTarget.src = QuizApp2}
                                    onMouseOut={e => e.currentTarget.src = QuizApp1}
                                ></img>
                            </ImageSection>
                        </Col>
                    </Col>
                    <Col size={2}>
                        <ImageSection>
                            <img src={NoteApp1}
                                onMouseOver={e => e.currentTarget.src =NoteApp2 }
                                onMouseOut={e => e.currentTarget.src = NoteApp1}
                            ></img>
                        </ImageSection>
                    </Col>
                </Row>
                <Row>
                    <Col size={1}>
                        <ImageSection>
                            <img src={ToDoList1}
                                onMouseOver={e => e.currentTarget.src = ToDoList2}
                                onMouseOut={e => e.currentTarget.src = ToDoList1}
                            ></img>
                        </ImageSection>
                    </Col>
                    <Col size={1}>
                        <ImageSection>
                            <img src={game2}
                                onMouseOver={e => e.currentTarget.src = game5}
                                onMouseOut={e => e.currentTarget.src = game2}
                            ></img>
                        </ImageSection>
                    </Col>
                    <Col size={1}>
                        <ImageSection>
                            <img src={myFirstPage1}
                                onMouseOver={e => e.currentTarget.src =myFirstPage2}
                                onMouseOut={e => e.currentTarget.src = myFirstPage1}
                            ></img>
                        </ImageSection>
                    </Col>
                </Row>
                <WeatherAPI />
            </Grid>
           
            </HeadDiv>
    )
}
export default Projects
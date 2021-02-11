import dino1 from './Images/dinoGame1.png'
import dino2 from './Images/dinoGame2.png'

import NoteApp1 from './Images/NoteApp1.png'
import NoteApp2 from './Images/NoteApp2.png'

import ToDoList1 from './Images/ToDoList1.png'
import ToDoList2 from './Images/ToDoList2.png'

import game2 from './Images/game2.png'
import game5 from './Images/game5.png'

import myFirstPage1 from './Images/myFirstPage1.png'
import myFirstPage2 from './Images/myFirstPage2.png'


import WeatherAPI from './WeatherAPI'
import styled from 'styled-components';
import {Grid, Row, Col} from '../Styles/Grid'
import { motion } from 'framer-motion';
import { pageVariants, pageTransition } from '../Styles/FMStyles';

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
    left:5%;
    font-size:70px;
    top:10%;
  }
    @media (max-width: ${({ theme }) => theme.smallScreen}) {
    font-size:40px;
      
  }
}
`

const ImageSection = styled(motion.section)`

img{
    width:100%;
    height:100%;
}
p{
    text-transform:uppercase;
    text-align:center;
    color:white;
    font-weight:100;
}

`

function Projects() {

    return (
        <HeadDiv>
            <motion.h2
                initial="out"
                animate="in"
                exit="out"
                variants={pageVariants}
                transition={pageTransition}
            >Projects</motion.h2>
            <Grid>
                <Row>
                    <Col size={2}>
                        <ImageSection>
                            <img src={dino1}
                                alt="showing a game"
                                onMouseOver={e => e.currentTarget.src=dino2}
                                onMouseOut={e => e.currentTarget.src=dino1}
                            ></img>
                            <p>Dinosaur Game</p>
                        </ImageSection>
                    </Col>
                    <Col size={2}>
                        <ImageSection>
                            <img src={NoteApp1}
                                alt="showing a NoteApp"
                                onMouseOver={e => e.currentTarget.src =NoteApp2 }
                                onMouseOut={e => e.currentTarget.src = NoteApp1}
                            ></img>
                            <p>Note-taking App</p>
                        </ImageSection>
                  
                    </Col>
                </Row>
                <Row>
                    <Col size={1}>
                        <ImageSection>
                            <img src={ToDoList1}
                                alt="showing a Todolist made in React"
                                onMouseOver={e => e.currentTarget.src = ToDoList2}
                                onMouseOut={e => e.currentTarget.src = ToDoList1}
                            ></img>
                            <p>Todo-list in React</p>
                        </ImageSection>
                    </Col>
                    <Col size={1}>
                        <ImageSection>
                            <img src={game2}
                                alt="showing a buttongame"
                                onMouseOver={e => e.currentTarget.src = game5}
                                onMouseOut={e => e.currentTarget.src = game2}
                            ></img>
                            <p>Game -find the Buttons</p>
                        </ImageSection>
                    </Col>
                    <Col size={1}>
                        <ImageSection>
                            <img src={myFirstPage1}
                                alt="showing Therese very first webpage"
                                onMouseOver={e => e.currentTarget.src =myFirstPage2}
                                onMouseOut={e => e.currentTarget.src = myFirstPage1}
                            ></img>
                            <p>My first website, HTML and CSS</p>
                        </ImageSection>
                    </Col>
                </Row>
                <WeatherAPI />
            </Grid>
           
            </HeadDiv>
    )
}
export default Projects
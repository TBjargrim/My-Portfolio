import styled from 'styled-components';
import { ContainerDiv, BubblesDiv, BorderDiv } from '../Styles/Background';

const StyledDiv = styled.div`

background-color:black;
min-height:100vh;
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
    /* z-index:1; */
}

`
const AllProjects =styled.div `
display:flex;
flex-direction:column;

align-items:center;
position:absolute;
top:25%;
right:20%;
`
const ProjectsDiv =styled.div `
display:flex;

&:nth-child(odd){
flex-direction:row-reverse;
}

h5 {
    color:white;
    z-index:2;

}
p{
    color:white;
}

`
const IMGSection = styled.section`
height:400px;
width:300px;
/* z-index:2;  */
img {
    width: 100%;
    height: auto;
    animation: fadeIn ease 10s;
    z-index:2;
}
@keyframes fadeIn {
0% {opacity:0;}
100% {opacity:1;}
}
`


function Projects (){
    return (

            <StyledDiv>
                <h3>projects</h3>
            <AllProjects>
                <ProjectsDiv>
                    <IMGSection>
                        <img src="https://images.unsplash.com/photo-1526572195979-0f8a7ea44489?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80"></img>
                    </IMGSection>
                    <h5>My very first website </h5>
                    <p>Created with HTML, CSS and a slice of JAVASCRIPT</p>
                </ProjectsDiv>
                <ProjectsDiv>
                    <IMGSection>
                        <img src="https://images.unsplash.com/photo-1526572195979-0f8a7ea44489?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80"></img>
                    </IMGSection>
                    <h5>My very first website </h5>
                    <p>Created with HTML, CSS and a slice of JAVASCRIPT</p>
                </ProjectsDiv>
                <ProjectsDiv>
                    <IMGSection>
                        <img src="https://images.unsplash.com/photo-1526572195979-0f8a7ea44489?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80"></img>
                    </IMGSection>
                    <h5>My very first website </h5>
                    <p>Created with HTML, CSS and a slice of JAVASCRIPT</p>
                </ProjectsDiv>
                <ProjectsDiv>
                    <IMGSection>
                        <img src="https://images.unsplash.com/photo-1526572195979-0f8a7ea44489?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80"></img>
                    </IMGSection>
                    <h5>My very first website </h5>
                    <p>Created with HTML, CSS and a slice of JAVASCRIPT</p>
                </ProjectsDiv>
               
            </AllProjects>
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

export default Projects;
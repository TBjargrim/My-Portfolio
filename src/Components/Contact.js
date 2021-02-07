import styled from 'styled-components';
import { ContainerDiv, BubblesDiv, BorderDiv } from '../Styles/Background';

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



function Contact (props){

    // function handleSubmit(e) {
    //     e.preventDefault();
        
    //     props.setName('');
    // }
    return (
        
        <StyledDiv>
        {/* <form onSubmit={handleSubmit}>
            <h1>Contact</h1>
                <label>Your Name:</label>
            <input 
            type="text"
            value={props.name}
                    onChange={e => props.setName(e.target.value)}
            ></input>
            
            <input type ="submit" value="Submit"></input>
        </form> */}
            <h3>contact</h3>

            <div>

                <h5>Get in touch</h5>
                <p>therese.bjargrim@student.kyh.se</p>
                <p>Stockholm, Sweden</p>
            </div>
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
export default Contact;
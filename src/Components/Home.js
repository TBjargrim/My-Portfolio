import styled from 'styled-components';
import { ContainerDiv, BubblesDiv, BorderDiv } from '../Styles/Background';

const StyledDiv = styled.div`
      /* background-image:url('https://images.unsplash.com/photo-1516797045820-6edca89b2830?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80');
      background-repeat: no-repeat;
      background-size: cover; */
    background-color:black;
    height: 100vh;
    width:100%;
`
const BoxDiv = styled.div`
    width:700px;
    height:250px;
    flex-direction:column;
    position: relative;
    display: flex;
    top:35%;
    left:10%;
    z-index:1;
    `
// const ImgDiv = styled.div`
// height:400px;
// width:300px;
// position:absolute;
// top:30%;
// right:15%;
// img {
//     width: 100%;
//     height: auto;
//     animation: fadeIn ease 10s;
// }
// @keyframes fadeIn {
// 0% {opacity:0;}
// 100% {opacity:1;}
// }
// `


const NameDiv = styled.div`
      width: 100%;
      /* position: relative; */
      display: flex;
      align-items: center;
      height: 50px;

h4 {
        /* font-family: 'Poppins'; */
        color: #fff;
        font-size: 28px;
        animation: mainFadeIn 2s forwards;
        animation-delay: 1.6s;
        opacity: 0;
        display: flex;
        padding-right:15px;
        position: relative;
        letter-spacing:2px;
}
@keyframes mainFadeIn {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}
`
const FirstSpan = styled.span`
        width: 0%;
        height: inherit;
        background: #221336;
        position: absolute;
        animation: mainBlock 2s cubic-bezier(.74, .06, .4, .92) forwards;
        display: flex;

@keyframes mainBlock {
  0% {
    width: 0%;
    left: 0;

  }
  50% {
    width: 100%;
    left: 0;

  }
  100% {
    width: 0;
    left: 100%;
  }
}
`
const SecondSpan = styled.span`
          width:0px;
          height: 0px;
          border-radius: 50%;

          background: #553555;
          animation: popIn 0.8s cubic-bezier(.74, .06, .4, .92) forwards;
          animation-delay: 2s;
          /* margin-left: 5px; */
          margin-top: -10px;
          position: absolute;
          bottom: 13px;
          right: -12px;

@keyframes popIn {
  0% {
    width: 0px;
    height: 0px;
    background: #553555;
    border: 0px solid #ddd;
    opacity: 0;
  }
  50% {
    width: 10px;
    height: 10px;
    background: #553555;
    opacity: 1;
    bottom: 45px;
  }
   65% {
      width: 7px;
    height: 7px;
      bottom: 0px;
      width: 15px
   }
   80% {
      width: 10px;
    height: 10px;
      bottom: 20px
   }
  100% {
    width: 7px;
    height: 7px;
    background: #553555;
    border: 0px solid #222;
    bottom: 13px;

  }
}
`

const TitleDiv = styled.div`
      width: 100%;
      position: relative;
      display: flex;
      height: 150px;
      margin-top: -10px;
        flex-direction:column;

div {
        width: 0%;
        height: inherit;
        background: #755b69;
        position: absolute;
        animation: secBlock 2s cubic-bezier(.74, .06, .4, .92) forwards;
        animation-delay: 2s;
        display: flex;
       
}
      h1 {
        animation: secFadeIn 2s forwards;
        animation-delay: 3.2s;
        opacity: 0;
        font-weight: 800;
        color: #fff;
        /* color: #ffffff; */
        font-size: 38px;
        text-transform: uppercase;
        margin-top:20px;
        letter-spacing: 5px;
      }
            h4 {
        animation: secFadeIn 2s forwards;
        animation-delay: 3.2s;
        opacity: 0;
         font-weight: 600;
        /* font-family: 'Lato'; */
        /* color: #ffffff; */
        color:#96C5B0;
        font-size: 12px;
        text-transform: uppercase;
        margin-top:30px;
        letter-spacing: 5px;
      }
@keyframes secBlock {
  0% {
    width: 0%;
    left: 0;

  }
  50% {
    width: 100%;
    left: 0;

  }
  100% {
    width: 0;
    left: 100%;
  }
}

@keyframes secFadeIn {
  0% {
    opacity: 0;
  }
  100% {
    /* opacity: 0.5; */
    opacity: 1;
  }
}
`

function Home() {
    return (
        <StyledDiv>
            <BoxDiv>
                <NameDiv>
                    <FirstSpan></FirstSpan>
                    <h4>Hi, Im Tess </h4>
                </NameDiv>
                <TitleDiv>
                    <div></div>
                    <h1>Front-End Developer</h1>
                    <h4>Student @ KYH, Stockholm, Sweden</h4>
                </TitleDiv>
            </BoxDiv>
{/* https://codepen.io/KaioRocha/pen/YoEVvZ */}



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
            {/* <ImgDiv>
                <img src="https://images.unsplash.com/photo-1541519481457-763224276691?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80"></img>
            </ImgDiv> */}
        </StyledDiv>

    )
}



export default Home;
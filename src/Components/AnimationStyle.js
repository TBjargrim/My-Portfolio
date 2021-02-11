import styled, { keyframes } from 'styled-components';



function AnimationStyle() {
    var KeyFrames = keyframes`
    0% { transform: scale(0.8); }
    50% { transform: scale(1.2); }
    100% { transform: scale(0.8); }
`

const CircelBackground = styled.div`
  position: relative;
  border-radius: 50%;
  background: white;
  animation: ${KeyFrames} 15s infinite;
  box-shadow: 0px 0px 1px 0px #508fb9;
  top:90%;
`
const CircelXXL = styled.div`
  position: absolute;
  border-radius: 50%;
  background: white;
  animation: ${KeyFrames} 15s infinite;
  box-shadow: 0px 0px 1px 0px #508fb9;
width: 1000px;
  height: 1000px;
  left: -400px;
  bottom: -500px;
    opacity: 0.01;
`
const CircelXL = styled.div`
  position: absolute;
  border-radius: 50%;
  background: ${({ theme }) => theme.primaryPurple};
  animation: ${KeyFrames} 15s infinite;
  box-shadow: 0px 0px 1px 0px #508fb9;
    width: 800px;
  height: 800px;
  left: -300px;
  bottom: -400px;
    opacity: 0.03;
`
const CircelL = styled.div`
  position: absolute;
  border-radius: 50%;
  background: ${({ theme }) => theme.primaryLightPurple};
  animation: ${KeyFrames} 15s infinite;
  box-shadow: 0px 0px 1px 0px #508fb9;
    width: 600px;
  height: 600px;
  left: -200px;
  bottom: -300px;
  opacity: 0.04;
`
const CircelM = styled.div`
  position: absolute;
  border-radius: 50%;
  background: ${({ theme }) => theme.primaryGreen};
  animation: ${KeyFrames} 15s infinite;
  box-shadow: 0px 0px 1px 0px #508fb9;
width: 400px;
  height: 400px;
  left: -100px;
  bottom: -200px;
  opacity: 0.06;
`
const CircelS = styled.div`
  position: absolute;
  border-radius: 50%;
  background: ${({ theme }) => theme.primaryLightGreen};
  animation: ${KeyFrames} 15s infinite;
  box-shadow: 0px 0px 1px 0px #508fb9;
    width: 200px;
  height: 200px;
  left: 0px;
  bottom: -100px;
    opacity: 0.08;
`
return(
    <CircelBackground>
        <CircelXXL></CircelXXL>
        <CircelXL></CircelXL>
        <CircelL></CircelL>
        <CircelM></CircelM>
        <CircelS></CircelS>
    </CircelBackground>
)
};

export default AnimationStyle;

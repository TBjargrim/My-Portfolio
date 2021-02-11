import styled from 'styled-components';
import { motion } from 'framer-motion';
import { pageVariants, pageTransition } from '../Styles/FMStyles';

const StyledDiv = styled(motion.div)`
    background-color:black;
    height: 100vh;
    width:100%;
    overflow:hidden;

`
const BoxDiv = styled.div`
    width:900px;
    height:200px;
    flex-direction:column;
    position: relative;
    display: flex;
    top:35%;
    left:10%;
    z-index:1;
    background-color:rgba(0, 0, 0, 0.5);
                    @media (max-width: ${({ theme }) => theme.mobile}) {
      top:15%;
                }
    `
const NameDiv = styled.div`
      width: 100%;
      display: flex;
      align-items: center;
      height: 50px;
      background-color:rgba(0, 0, 0, 0.5);

h4 {
        color: ${({ theme })=>theme.primaryLightPurple};
        font-size: 28px;
        display: flex;
        padding-right:15px;
        position: relative;
        letter-spacing:2px;
        background-color:rgba(0, 0, 0, 0.5);
}
`
const TitleDiv = styled.div`

      width:100%;
      position: relative;
      display: flex;
      height: 150px;
      margin-top: -10px;
      flex-direction:column;
      background-color:rgba(0, 0, 0, 0.5);
   
      h1 {
        font-weight: 800;
        color: #fff;
        font-size: 60px;
        text-transform: uppercase;
        margin-top:20px;
        letter-spacing: 5px;
        background-color:rgba(0, 0, 0, 0.5);
                @media (max-width: ${({ theme }) => theme.mobile}) {
                    max-width:100px;
                    font-size:40px;
                }
      }
      h4 {
         font-weight: 600;
         color:${({ theme }) => theme.primaryGreen};
        font-size: 16px;
        text-transform: uppercase;
        margin-top:30px;
        letter-spacing: 5px;
        background-color:rgba(0, 0, 0, 0.5);
                @media (max-width: ${({ theme }) => theme.mobile}) {
                    max-width:100px;
                    font-size:12px;
                    line-height:25px;
                }
      }


      `
const Circels =styled.div`
display:flex;
justify-content:center;
align-items:center;
padding:2rem;
position:relative;
width:50%;
left:50%;
            @media (max-width: ${({ theme }) => theme.mobile}) {
                padding:0;
                top:5%;
                }
`
const CircelOne=styled(motion.div)`
position:absolute;
height:160px;
width:160px;
background-color:${({ theme }) => theme.primaryPurple};
border-radius:60%;
top:10px;
left:10px;
`
const CircelTwo = styled(motion.div)`
position:absolute;
height:150px;
width:150px;
background-color:${({ theme }) => theme.primaryLightPurple};
border-radius:50%;
top:170px;
nav-right:10px;
`
const CircelThree=styled(motion.div)`
position:absolute;
height:170px;
width:170px;
background-color:${({ theme }) => theme.primaryLightGreen};
border-radius:50%;
top:350px;
left:50px;`

const CircelFour=styled(motion.div)`
position:absolute;
height:130px;
width:130px;
background-color:${({ theme }) => theme.primaryGreen};
border-radius:50%;
bottom:100px;
right:75px;`

function Home() {
    return (

        <StyledDiv  
        initial="out"
        animate="in"
        exit="out"
        variants={pageVariants}
        transition={pageTransition}>
            <BoxDiv>
                <NameDiv>
                    <h4>Hi, I´m Tess</h4>
                </NameDiv>
                <TitleDiv>
                    <h1>Front-End Developer</h1>
                    <h4>Student @ KYH, Stockholm, Sweden</h4>
                </TitleDiv>
            </BoxDiv>
        
            <Circels>
                <CircelOne
                whileTap={{scale:0.9}}
                drag={true}
                dragConstraints={{left:0, right:250,top:0,bottom:50}}
                initial={{opacity:0, y:-100}}
                animate={{opacity:1, y:0, transition:{duration:1}}}
                ></CircelOne>
                <CircelTwo
                whileTap={{scale:0.6}}
                drag={true}
                dragConstraints={{left:50, right:0,top:0,bottom:50}}
                    initial={{ opacity: 0, x: 100 }}
                    animate={{ opacity: 1, x: 0, transition: { duration: 1 } }}
                ></CircelTwo>
                <CircelThree
                whileTap={{scale:0.8}}
                drag={true}
                dragConstraints={{left:0, right:250,top:0,bottom:50}}
                    initial={{ opacity: 0, x: -100 }}
                    animate={{ opacity: 1, x: 0, transition: { duration: 1 } }}
                ></CircelThree>
                <CircelFour
                whileTap={{scale:0.9}}
                drag={true}
                dragConstraints={{left:0, right:0,top:0,bottom:50}}
                    initial={{ opacity: 0, x: -100 }}
                    animate={{ opacity: 1, x: 0, transition: { duration: 1 } }}
                ></CircelFour>
            </Circels>
      
            </StyledDiv>
    )
}



export default Home;
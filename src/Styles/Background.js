import styled from 'styled-components';
export const ContainerDiv = styled.div`
  width:100%;
  height:100%;
  overflow:hidden;
  /* position:relative; */
  top:0;
  filter:blur(10px) contrast(80);
  background: black;
`
export const BubblesDiv = styled.div`
margin-left:300px;
width:100px;
height:100px;
top:-20%;
background-color:white;
position:absolute;
border-radius:50%;
animation: fall 15s infinite;

/* backdrop-filter: blur(10px); */


&:nth-of-type(2n){
  width:60px;
  height:60px;
}
&:nth-of-type(3n){
  width:120px;
  height:120px;
}
&:nth-of-type(1){
left:30%;
animation-delay:0.5s;
}
&:nth-of-type(2){
left:60%;
animation-delay:2s;
}
&:nth-of-type(3){
left:25%;
animation-delay:3s;
}
&:nth-of-type(4){
left:75%;
animation-delay:4s;
}
&:nth-of-type(5){
left:35%;
animation-delay:5s;
}
&:nth-of-type(6){
left:50%;
animation-delay:6s;
}
&:nth-of-type(7){
left:65%;
animation-delay:7s;
}
&:nth-of-type(8){
left:35%;
animation-delay:8s;
}
&:nth-of-type(9){
left:55%;
animation-delay:9s;
}
&:nth-of-type(10){
left:85%;
animation-delay:10s;
}
&:nth-of-type(11){
left:35%;
animation-delay:11s;
}
&:nth-of-type(12){
left:50%;
animation-delay:12s;
}
&:nth-of-type(13){
left:65%;
animation-delay:13s;
}
&:nth-of-type(14){
left:40%;
animation-delay:14s;
}
&:nth-of-type(15){
left:30%;
animation-delay:15s;
}

@keyframes fall {
  0% {top:-20%;}
  20% {top: 0%;}
  80% {top:85%;}
  100% {top:100%;}
}
`
export const BorderDiv = styled.div`
position:absolute;
background-color:white;
width:100%;
height:7%;

&:nth-last-of-type(1){
  top:0;
  left:0;
}
&:nth-last-of-type(2){
  bottom:0;
  left:0;
}
`
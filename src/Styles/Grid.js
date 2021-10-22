import styled from 'styled-components';

export const Grid=styled.div `
/* z-index:2;
color:white; */
margin:40px;
position:absolute;
top:30%;
left:12%;

    @media (max-width: ${({ theme }) => theme.mobile}) {
top:20%;
left:2%;
margin:0;
 
  }
    @media (max-width: ${({ theme }) => theme.smallScreen}) {
left:0%;
margin-left:0;

  }
}
`;

export const Row =styled.div`
display:flex;

/* border:1px solid red; */
margin:40px;
    @media (max-width: ${({ theme }) => theme.mobile}) {
    flex-direction:column;
    max-width:50%;
    margin-bottom:20px;
 
  }
`;

export const Col =styled.div`
flex: ${(props) => props.size};
margin-right:10px;
    @media (max-width: ${({ theme }) => theme.mobile}) {
    margin:20px;
 
  }

`;
// https://medium.com/swlh/create-a-responsive-grid-with-react-flexbox-styled-components-f7a55f607480
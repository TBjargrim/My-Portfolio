
import React, { Component } from "react";
import styled from 'styled-components'
const APIDaylie = 'https://api.openweathermap.org/data/2.5/onecall?lat=59.334591&lon=18.063240&appid=1a2363f2dc8b80e9b8b8781b3756e20e&units=metric';

const WeatherDiv=styled.div`
display:flex;
flex-direction:column;
align-items:center;
margin-top:40px;
margin-bottom:40px;
padding:20px 0px;
border-top:1px solid white;
border-bottom:1px solid white;
h5{
    color:white;
    font-size:25px;
}
h6{
    color:white;
    margin-top:10px;
}
    @media (max-width: ${({ theme }) => theme.mobile}) {
    align-items:flex-start;
  }


`
const SectionDay=styled.div`
display:flex;
display:relative;

margin:50px 0px;
    @media (max-width: ${({ theme }) => theme.mobile}) {
    left:0;
    flex-wrap:wrap;
  }
`
const StyledDiv =styled.div`
display:flex;
flex-direction:column;
margin-left:25px;
text-align:center;
flex-wrap:wrap;

img{
width: 60px;
align-self:center;
}

h3{
     color:white;
    font-size:10px;
}
h5{
    color:white;
    font-size:10px;

}
    @media (max-width: ${({ theme }) => theme.smallScreen}) {
    margin-left:0;
    padding-right:15px;
    margin-top:15px;

  }
`

class WeatherAPI extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: null
        };
    }

    componentDidMount() {
        fetch(APIDaylie)
            .then(response => response.json())
            .then(json => this.setState({ data: json }));
    }
    render() {

        const weekdays = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
        const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec'];

        const myArr = [];
        for (let i = 0; i <= 6; i++) {
            var currentDay = new Date(this.state.data ? this.state.data.daily[i].dt * 1000 : '?');
            var minTemp = this.state.data ? this.state.data.daily[i].temp.min.toFixed(0) : '?';
            var maxTemp = this.state.data ? this.state.data.daily[i].temp.max.toFixed(0) : '?';
            var icon = this.state.data ? this.state.data.daily[i].weather[0].icon : '?';

            // var img = `http://openweathermap.org/img/w/${this.state.data.daily[0].weather[0].icon}.png`;
            var day = currentDay.getDay();
            var date = currentDay.getDate();
            var month = currentDay.getMonth();

            myArr.push(
                <StyledDiv key={i}>
                    <h3>{date} {months[month]}</h3>
                    <img alt="icon of the weather"src={`http://openweathermap.org/img/w/${icon}.png`} />
                    <h3>{weekdays[day]}</h3>
                    <h5>{minTemp} / {maxTemp}</h5>
                </StyledDiv>)
        }

        return (
            <WeatherDiv>
            <h5>7 day forecast</h5>
            <h6>Stockholm, Sweden</h6>
            <SectionDay>
                {myArr}
            </SectionDay>
            </WeatherDiv>
        )
    }
}
export default WeatherAPI;
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Alert } from "react-native"; 
import Loading from "./Loading"; 
import * as Location from 'expo-location';
import axios from "axios";
import Weather from "./Weather"; 
window.React = React; 

const API_KEY = "d56feb616171776806cd8490598401c7"; 



export default class extends React.Component {
  state = {
    isLoading: true
  }

  getWeather = async(latitude, longitude) => {
    const { 
      data: {
      main : {temp},
      weather
    } } = await axios.get(
      `http://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${API_KEY}&units=metric`
      );
  //console.log(data);
    this.setState({
      isLoading:false, 
      condition: weather[0].main, 
      temp,
    }); 
  }

  getLocation = async() => {
    try {
    const response = await Location.requestPermissionsAsync(); 
    const {coords: {latitude, longitude}} = await Location.getCurrentPositionAsync(); 
    this.getWeather(latitude, longitude); 
    //this.setState({ isLoading: false }); 
    //console.log(response); 
    //console.log( {coords: {latitude, longitude}}); 
    }
    catch(error) {
    Alert.alert("Can't find you","So sad"); 
    }
  }
  componentDidMount() {
    this.getLocation(); 
  }
  render() {
    const { isLoading, temp, condition } = this.state; 
    return isLoading ? <Loading /> : <Weather temp={Math.round(temp)} condition={condition} />; 
  }  
}
// export default function App() {
//   return <Loading />; 
// }


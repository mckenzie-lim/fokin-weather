import react from "react"; 
import { View, Text, StyleSheet, StatusBar } from "react-native"; 
import PropTypes from "prop-types"; 
import { MaterialCommunityIcons } from '@expo/vector-icons'; 
import { LinearGradient } from 'expo-linear-gradient';

const weatherOptions = {
    Haze: {
        iconName: "weather-hail"
    }
}

export default function Weather({temp, condition}) {
    return ( 
        <LinearGradient
        // Button Linear Gradient
        colors={['#4c669f', '#3b5998', '#192f6a']}
        style={styles.container}>
            <StatusBar barStyle="light-content"/>
            <View style={styles.halfcontainer}>
            <MaterialCommunityIcons 
            name={weatherOptions[condition].iconName} 
            size={96} 
            color="white" />
            <Text style={styles.temp}>{temp}°</Text>
            </View>
            <View style={styles.halfcontainer} />
        </LinearGradient>
    
    );
}

Weather.propTypes = {
    temp:PropTypes.number.isRequired, 
    condition: PropTypes.oneOf([
        "Thunderstorm", 
        "Drizzle", 
        "Rain", 
        "Snow", 
        "Atmosphere", 
        "Clear", 
        "Clouds", 
        "Haze", 
        "Mist", 
        "Smoke", 
        "Dust",
        "Fog", 
        "Sand", 
        "Ash", 
        "Squall", 
        "Tornado"
    ]).isRequired
}; 

const styles = StyleSheet.create({
    container: {
        flex:1, 
        justifyContent: "center",
        alignItems: "center"
    }, 
    temp: {
        fontSize: 42, 
        color: "white"
    }, 
    halfcontainer: {
        flex:1, 
        justifyContent: "center",
        alignItems: "center"
    }
})
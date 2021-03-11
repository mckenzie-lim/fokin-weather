import react from "react"; 
import { View, Text, StyleSheet, StatusBar } from "react-native"; 
import PropTypes from "prop-types"; 
import { Ionicons } from '@expo/vector-icons'; 
import { LinearGradient } from 'expo-linear-gradient';

const weatherOptions = {
    Thunderstorm: { 
        iconName: "thunderstorm-outline", 
        gradient:["#8E0E00","#1F1C18" ], 
        title:"Thunderstorm", 
        subtitle: "Stay Home"
    },  
    Drizzle: {
        iconName: "rainy-outline", 
        gradient:["#004FF9","#FFF94C" ], 
        title:"Drizzle", 
        subtitle: "Your hair will be curly"
    }, 
    Rain: {
        iconName: "rainy", 
        gradient:["#136a8a","#2678718" ], 
        title:"Rain", 
        subtitle: "Singing in the rain"
    }, 
    Snow: {
        iconName: "snow", 
        gradient:["#8e9eab","#eef2f3" ], 
        title:"Snow", 
        subtitle: "Let it snow Let it snow"
    }, 
    Atmosphere: {
        iconName: "cloud-outline", 
        gradient:["#8e9eab","#eef2f3" ], 
        title:"Atmosphere", 
        subtitle: "Myterious"
    }, 
    Clear: {
        iconName: "cloud-offline-outline", 
        gradient:["#fe8c00","#f83600" ], 
        title:"Clear", 
        subtitle: "BBQ or Picnic"
    }, 
    Clouds: {
        iconName: "cloud-outline", 
        gradient:["#AAFFA9","#11FFBD" ], 
        title:"Clouds", 
        subtitle: "Look at the sky"
    },
    Haze : {
        iconName: "partly-sunny-outline", 
        gradient:["#4DA0B0","#D39D38" ], 
        title:"Haze", 
        subtitle: "Rainboots"
    }, 
    Mist: {
        iconName: "cloud-sharp", 
        gradient:["#00c6ff","#0072ff" ], 
        title:"Mist", 
        subtitle: "Moisture"
    }, 
    Smoke: {
        iconName: "cloud-upload-outline", 
        gradient:["#616161","#9bc5c3" ], 
        title:"Smoke", 
        subtitle: "Don't got outside"
    }, 
    Dust: {
        iconName: "md-thunderstorm", 
        gradient:["#000000","#e74c3c" ], 
        title:"Dust", 
        subtitle: "Read a book"
    }, 
    Fog: {
        iconName: "cloud-download-outline", 
        gradient:["#D3959B","#BFE6BA" ], 
        title:"Fog", 
        subtitle: "Foggy"
    },  
    Sand: {
        iconName: "thunderstorm-outline", 
        gradient:["#d53369","#cbad6d" ], 
        title:"Sand", 
        subtitle: "Home sweet home"
    },  
    Ash: {
        iconName: "cloud", 
        gradient:["#606c88","#3f4c6b" ], 
        title:"Ash", 
        subtitle: "Ashhhhhhhhhh"
    },  
    Squall: {
        iconName: "thunderstorm-outline", 
        gradient:["#C04848","#480048" ], 
        title:"Squall", 
        subtitle: "Family time"
    },  
    Tornado: {
        iconName: "thunderstorm-outline", 
        gradient:["#DC2424","#4A569D" ], 
        title:"Tornado", 
        subtitle: "Home sweet Home"
    },
    Sunny: {
        iconName: "md-sunny", 
        gradient:["#FF512F","#F09819" ], 
        title:"Sunny", 
        subtitle: "Beautiful day"
    }
}

export default function Weather({temp, condition}) {
    return ( 
        <LinearGradient
        // Button Linear Gradient // On fait ... pour utiliser tous ses styles 
        colors={weatherOptions[condition].gradient}
        style={styles.container}>
            <StatusBar barStyle="light-content"/>
            <View style={styles.container}>  
            <Ionicons 
            name={weatherOptions[condition].iconName} 
            size={96} 
            color="white" />
            <Text style={styles.temp}>{temp}°</Text>
            </View>
            <View style={{...styles.halfcontainer, ...styles.textContainer}}>
                <Text style={styles.title}>{weatherOptions[condition].title}</Text>
                <Text style={styles.subtitle}>{weatherOptions[condition].subtitle}</Text>
            </View>
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
        "Tornado", 
        "Sunny"
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
    }, 
    title: {
        color:"white", 
        fontSize:44, 
        fontWeight:"300", 
        marginBottom: 10
    }, 
    subtitle: {
        color:"white",
        fontWeight: "600",
        fontSize:24
    }, 
    textContainer: {
        paddingHorizontal: 20,
        alignItems: "flex-start",  
    }, 

})
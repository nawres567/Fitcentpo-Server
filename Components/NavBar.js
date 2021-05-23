import React from 'react'
import { View, Text, TouchableOpacity, Image, StyleSheet, Dimensions } from 'react-native'

const NavBar = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <TouchableOpacity onPress={()=>{
                navigation.navigate("Home");
            }}>
                <Image 
                    source={require("../assets/images/logo.png")}
                    style={styles.logo} 
                    
                />
            </TouchableOpacity>
            
            <TouchableOpacity onPress={()=>{
                navigation.navigate("About");
            }}>
                <Image 
                    source={require("../assets/images/toggle.png")}
                    style={styles.toggle} 
                />
            </TouchableOpacity>

          
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        height:50,
        width:"100%",
        backgroundColor:"#03164c",
        
    },
    logo:{
        height:50,
        width:200,
        position:"absolute",
        left:0,
        resizeMode:"center",
        display:"flex"
    },
    toggle:{
        height:50,
        width:100,
        resizeMode:"center",
        display:"flex",
        zIndex:10,
        position:"absolute",
        right:0

    }



})

export default NavBar

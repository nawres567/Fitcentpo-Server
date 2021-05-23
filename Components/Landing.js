import React from 'react'
import { View, Text, ImageBackground, StyleSheet, Dimensions, ScrollView, Image } from 'react-native'

const Landing = () => {
    return (
        <View style={styles.container}>
            <ImageBackground 
                source={require("../assets/images/banner-bg.png")}
                style={styles.image}
            >
                <ScrollView horizontal={true} style={{marginTop:250}} >
                    <View style={styles.carrouselItem}>
                        <Text style={styles.title}>Title</Text>
                        <Text style={styles.description}>Description</Text>
                        <Image
                            source={require("../assets/images/arrow.png")}
                            style={{width:50,height:50,right:0,bottom:0,position:"absolute"}}
                        />
                    </View>
                    <View style={styles.carrouselItem}>
                    <Image
                            source={require("../assets/images/arrow-left.png")}
                            style={{width:50,height:50,left:0,position:"absolute",bottom:0}}
                        />
                        <Text style={styles.title}>Title</Text>
                        <Text style={styles.description}>Description</Text>
                        <Image
                            source={require("../assets/images/arrow.png")}
                            style={{width:50,height:50,right:0,position:"absolute",bottom:0}}
                        />
                    </View>
                    <View style={styles.carrouselItem}>
                    <Image
                            source={require("../assets/images/arrow-left.png")}
                            style={{width:50,height:50,left:0,position:"absolute",bottom:0}}
                        />
                        <Text style={styles.title}>Title</Text>
                        <Text style={styles.description}>Description</Text>
                    </View>
                </ScrollView>
            </ImageBackground>
        </View>
    )
}


const styles = StyleSheet.create({
    container:{
        width:"100%",

    },
    image:{
       width:"100%",
       height:Dimensions.get("screen").height,
       resizeMode:"center"
   },
   carrouselItem:{
       height:150,
       width:Dimensions.get("screen").width*0.8,
       marginLeft:"5%",
       marginRight:"5%",
       backgroundColor:"#6c757d",
       borderRadius:20,
       padding:30
   },
   title:{
       color:"#fff",
       fontSize:20
   },
   description:{
    color:"#03164c",
    fontSize:17
   }

})
export default Landing

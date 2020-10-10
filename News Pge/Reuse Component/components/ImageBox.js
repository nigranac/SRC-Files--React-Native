import React from 'react';
import {
  SafeAreaView,
  Image,
  StyleSheet,
  View,
  Text,
} from 'react-native';
const ImageBox = (props) => {
    return (
            <View style={styles.container}>
                <Image style={styles.imageContainer} source={props.img} />
                <Text style={styles.text}>{props.text} </Text>
                <Text style={styles.name}>{props.author} </Text>
            </View>
    );
  };
export default ImageBox;
const styles= StyleSheet.create({
    container:{
      borderWidth:2,
      borderColor:"#3d3833",
      borderRadius:10,
      padding:10,
      margin:7,
      alignItems:"center",
      backgroundColor:"#f7e6d4",
      flex:1
    },
    imageContainer:{
      width:370,
      height:220,
      borderRadius:10
    },
    text:{
      marginTop:7,
      fontWeight:"600",
      fontSize:17,
      textAlign:"center"
    },
    name:{
      fontStyle:"italic",
      alignSelf:"flex-end",
      marginTop:10,
      fontSize:15
    }
  });
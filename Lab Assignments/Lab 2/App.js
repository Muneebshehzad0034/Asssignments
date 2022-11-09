import React from "react";
import {StyleSheet ,   View ,  Text } from "react-native";
export default function App(){
  return(

    <View style = {styles.container} >

    <View style={styles.box1}>
   <View >
    <Text style = {{fontSize:25  , color:"black" , fontweight : "bold"}}>login</Text>
   </View>
    <View style={styles.inputstyle}>
      <Text style = {styles.label}> User name</Text>
    </View>
    <View style={styles.inputstyle2}>
      <Text style = {styles.label }> Password</Text>
    </View>
    <View style={styles.inputstyle3}>
      <Text style = {styles.label} > Sign in</Text>
    </View>
    
   <View style = {styles.style1}>
    <Text style = {{ fontSize:15  , color:"blue" , fontweight : "bold"}}>
      Don't have an account? Register
    </Text>
   </View>
   </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container:{
    backgroundColor : "off white",
    flex : 1,
    flexDirection:"column",
    justifyContent :"center",
    alignItems : "center",
    textAlign:"Center",
    textDecorationColor:"blue",
    
  },
  box1 : {
    backgroundColor:"#F9F6EE",
    width : 450,
    height : 350,

  },
 
  
  label:{
    fontSize:18,
    color:"#7d7d7d",
    marginTop:10,
    marginBottom:5,
    lineHeight:25,
    
  },
  inputstyle:{
    backgroundColor:"white",
    marginTop:30,
    borderWidth:1,
    borderColor : "black",
    paddingHorizontal: 30,
    paddingVertical:1,
    borderRadius:2,
   

  },
  inputstyle2:{
    backgroundColor:"white",
    marginTop:20,
    borderWidth:1,
    borderColor : "black",
    paddingHorizontal:30,
    paddingVertical:1,
    borderRadius:1,
    
  },
  inputstyle3:{
    backgroundColor:"#E3242B",
    marginTop:30,
    borderWidth:1,
    borderColor : "black",
    paddingHorizontal:100,
    paddingVertical:1,
    borderRadius:1,
    
  },
  style1:{
textDecorationLine : "underline",
textDecorationColor:"blue",
marginTop:50

  }
})

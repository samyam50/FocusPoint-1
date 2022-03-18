import * as React from 'react';

import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';



export default function Signin(props) {

  return (
    <View style={Signinstyles.container}>

      <Text  style={Signinstyles.PageTitle}>Sign in with your account</Text>
      <Text  style={Signinstyles.textTitle}>Email</Text>
      <TextInput 
      style={Signinstyles.input} 
      onChangeText={(val) => HandleEmail(val)}
      />
      <Text style={Signinstyles.textTitle}>Password</Text>
      <TextInput 
      style={Signinstyles.input} 
      secureTextEntry={true}
      onChangeText={(val) => HandlePassword(val)}
      />
      <TouchableOpacity style={Signinstyles.signinButton}>
        <Text> Sign In</Text>
      </TouchableOpacity>
      <Text style={Signinstyles.textSignup}>Don't have an account yet? </Text>
      <TouchableOpacity style={Signinstyles.signinButton}>
        <Text> Sign Up</Text>
      </TouchableOpacity>


    </View>
  );
}

const Signinstyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#023F5F',
    alignItems: 'center',
    justifyContent: 'center',

  },
  PageTitle:{
      color:'#84C8EB',
      fontSize:22,
      paddingBottom:40,

  },
  textTitle:{
    color:'#84C8EB',
    fontSize:18,
    paddingBottom:20,

  },
  signinButton:{
    backgroundColor:'#84C8EB',
    color:'#023F5F',
    fontSize:18,
    padding:20,
    paddingBottom:20,
    fontSize:18,
    alignContent:'center'
  },
  input:{
    fontSize:18,
    borderColor:'#84C8EB',
    color:'#84C8EB',
    borderWidth:2,
    width:300,
    padding:10,
    marginBottom:20,
  },
  textSignup:{
    color:'#84C8EB',
    fontSize:15,
    paddingBottom:10,
    paddingTop:20
  }
});
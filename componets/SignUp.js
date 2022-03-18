import * as React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';



export default function SignUp() {
  return (
    <View style={SignuUpStyles.container}>

      <Text  style={SignuUpStyles.PageTitle}>Sign up to a new account</Text>
      <Text  style={SignuUpStyles.textTitle}>Name</Text>
      <TextInput style={SignuUpStyles.input}/>
      <Text  style={SignuUpStyles.textTitle}>Email</Text>
      <TextInput style={SignuUpStyles.input}/>
      <Text style={SignuUpStyles.textTitle}>Password</Text>
      <TextInput style={SignuUpStyles.input} secureTextEntry={true}/>
      <TouchableOpacity style={SignuUpStyles.signupButton}>
        <Text> Sign Up</Text>
      </TouchableOpacity>
      <TouchableOpacity style={SignuUpStyles.signupButton}>
        <Text> Cancel</Text>
      </TouchableOpacity>


    </View>
  );
}

const SignuUpStyles = StyleSheet.create({
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
  signupButton:{
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
import * as React from 'react';
import { StatusBar } from 'expo-status-bar';

//components
import Home from "./componets/Home";


//styled components
import {Container, container} from "./styles/appStyles";


export default function App() {
  return (
    <Container>
      <Home/>
      <StatusBar style="light" />
    </Container>
  );
}



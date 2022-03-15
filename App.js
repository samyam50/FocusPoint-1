import * as React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

import home from './components/home';
import focus from './components/focus';
import todo from './components/todo';
import work from './components/work';
import goals from './components/goals';


export default function App() {
  return (
    <View style={styles.container}>
      <Text>hi mate</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',

  },
});

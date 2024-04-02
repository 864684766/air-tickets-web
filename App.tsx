import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Alert, Pressable, StyleSheet, Text, View } from 'react-native';

export default function App() {
  const onPressFunction = ()=>{
    Alert.alert('heheha')
  }
  return (
    <View style={styles.container}>
      <Text>Open up App.tsx to start working on your app!</Text>
      <StatusBar style="auto" />
      <Pressable onPress={onPressFunction}>
        <Text>I'm pressable!!</Text>
      </Pressable>
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

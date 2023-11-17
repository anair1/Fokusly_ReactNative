import { Button, StyleSheet, Text, TextInput, View } from 'react-native';
import * as React from 'react';
import { WebView } from 'react-native-webview';
import SignInButton from './SignInButton';
import SignInLogic from './SignInLogic';

export default function App() {
  return (
    <View style={styles.container}>
      <Text
        style={{
          marginBottom: 10
        }}
      >fokusly</Text>
      <Text
        style={{
          marginBottom: 30
        }}
      >Bringing Focus to Social Media</Text>
      <SignInLogic/>
      <SignInButton/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

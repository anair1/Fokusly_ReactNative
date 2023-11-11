import { StyleSheet, Text, View } from 'react-native';
import * as React from 'react';
import { WebView } from 'react-native-webview';

export default function App() {
  return (
    <WebView
    style={styles.container}
    source={{ uri: 'https://www.fokusly.com' }}
    />
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#076',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

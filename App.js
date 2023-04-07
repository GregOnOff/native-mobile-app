import { StatusBar } from 'expo-status-bar';
import {Button, StyleSheet, Text, View} from 'react-native';
import {useState} from "react";

export default function App() {

    const [count, setCount] = useState(0)

  return (


    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
      <Text>This is a manually created textfield in iOS</Text>
        <Text>{count}</Text>
        <Button title={'counter'} onPress={() => setCount(count +1)}>Plus 1</Button>
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

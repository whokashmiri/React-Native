import React from "react";
import {
  Button,
  View , Text, SafeAreaView
} from 'react-native';

function App(){
  return(
    <SafeAreaView>
    <View>
      <Text>
        Hello World!
      </Text>
      <Button
        color="#f194ff"
        title="Click Me"
        />
    </View>
  </SafeAreaView>
  )
}

export default App
import { StatusBar } from 'expo-status-bar';
import { ImageBackground, StyleSheet, Text, View } from 'react-native';
import StartGameScreen from './screens/StartGameScreen';
import { LinearGradient } from 'expo-linear-gradient';
import { useState } from 'react';
import GameScreen from './screens/GameScreen';

export default function App() {
  const [userNumber, setUserNumber] = useState(null)

  function pickedNumberHandler(pickedNumber) {
    setUserNumber(pickedNumber)
  }

  let screen = <StartGameScreen onPickNumber={pickedNumberHandler} />
  if (userNumber) {
    screen = <GameScreen />
  }
  return (
    <LinearGradient colors={["#4e0329", "#ddb52f"]} style={styles.rootScreen}>
      <ImageBackground 
        style={styles.rootScreen} 
        resizeMode="cover" 
        source={require("./assets/background.png")}
        imageStyle={styles.backgroundImage}
      >
        {screen}
      </ImageBackground>
      <StatusBar style="light" />
    </LinearGradient>
  )
}

const styles = StyleSheet.create({
  rootScreen: {
    flex:1,
  },
  backgroundImage: {
    opacity:0.5
  }
});

import { StatusBar } from 'expo-status-bar';
import { ImageBackground, StyleSheet, Text, View } from 'react-native';
import StartGameScreen from './screens/StartGameScreen';
import GameOverScreen from './screens/GameOverScreen';
import { LinearGradient } from 'expo-linear-gradient';
import { useState } from 'react';
import GameScreen from './screens/GameScreen';
import Colors from './constants/colors';

export default function App() {
  const [userNumber, setUserNumber] = useState(null)
  const [gameIsOver, setGameIsOver] = useState(true)

  function pickedNumberHandler(pickedNumber) {
    setUserNumber(pickedNumber)
    setGameIsOver(false)
  }

  function gameOverHandler(){
    setGameIsOver(true)
  }
  let screen = <StartGameScreen onPickNumber={pickedNumberHandler} />
  if (userNumber) {
    screen = <GameScreen userNumber={userNumber} onGameOver ={gameOverHandler}/>
  }

  if (gameIsOver && userNumber) {
    screen = <GameOverScreen />
  }


  return (
    <LinearGradient colors={[Colors.primary800, Colors.accent500]} style={styles.rootScreen}>
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

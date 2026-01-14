import { StatusBar } from 'expo-status-bar';
import { ImageBackground, StyleSheet, Text, View } from 'react-native';
import StartGameScreen from './screens/StartGameScreen';
import GameOverScreen from './screens/GameOverScreen';
import { LinearGradient } from 'expo-linear-gradient';
import { useState } from 'react';
import GameScreen from './screens/GameScreen';
import Colors from './constants/colors';
import { useFonts } from 'expo-font';
import AppLoading from 'expo-app-loading';

export default function App() {
  const [userNumber, setUserNumber] = useState(null)
  const [gameIsOver, setGameIsOver] = useState(true)
  const [guessRounds, setGuessRounds] = useState(0)

  const [fontsLoaded] = useFonts({
    "open-sans": require("./assets/fonts/OpenSans-Regular.ttf"),
    "open-sans-bold": require("./assets/fonts/OpenSans-Bold.ttf")
  })

  if (!fontsLoaded) {
    return <AppLoading />
  }

  function startNewGameHandler () {
    setUserNumber(null)
    setGuessRounds(0)
  }

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
    screen = <GameOverScreen rounds={guessRounds} userNumber={userNumber} onRestart={startNewGameHandler}/>
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

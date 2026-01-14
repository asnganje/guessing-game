import { Alert, Button, FlatList, StyleSheet, Text, View } from "react-native";
import Title from "../components/ui/Title";
import { useEffect, useState } from "react";
import NumberContainer from "../components/game/NumberContainer";
import PrimaryButton from "../components/ui/PrimaryButton";
import Card from "../components/ui/Card";
import InstructionText from "../components/ui/InstructionText";
import {Ionicons} from "@expo/vector-icons"
import GuessLog from "../components/game/GuessLog";

function generateRandomBetween(min, max, exclude) {
  const rndNum = Math.floor(Math.random() * (max - min)) + min;

  if (rndNum === exclude) {
    return generateRandomBetween(min, max, exclude);
  } else {
    return rndNum;
  }
}

let minBoundary = 1;
let maxBoundary =100;
function GameScreen({ userNumber, onGameOver }) {
  const initialGuess = generateRandomBetween(1, 100, userNumber);
  const [currentGuess, setCurrentGuess] = useState(initialGuess);
  const [guessRounds, setGuessRounds] = useState([initialGuess])

  useEffect(()=> {
    if (currentGuess === userNumber) {
      onGameOver(guessRounds.length)
    }
  }, [currentGuess, userNumber, onGameOver])

  useEffect(()=>{
    minBoundary=1;
    maxBoundary=100;
  },[])

  function nextGuessHandler(direction) {        
    if (
      (direction === "lower" && currentGuess < userNumber) ||
      (direction === "higher" && currentGuess > userNumber)
    ) {
      Alert.alert("Dont lie", "You know this is wrong...!",[{
        text: "Sorry",
        style: "cancel",

      }])
      return
    }
    if (direction=="lower") {
      maxBoundary = currentGuess
    } else{
      minBoundary= currentGuess+1
    }
    const newRndNumber = generateRandomBetween(minBoundary, maxBoundary, currentGuess)
    setCurrentGuess(newRndNumber)   
    setGuessRounds(prev=>[...prev, newRndNumber])   
  }
  return (
    <View style={styles.screen}>
      <Title>Opponent's Guess</Title>
      <NumberContainer>{currentGuess}</NumberContainer>
      <Card>
        <InstructionText style={styles.instructionText}>Higher or lower?</InstructionText>
        <View style={styles.buttonsContainer}>
          <View style={styles.button}>
            <PrimaryButton onPress={nextGuessHandler.bind(this, "lower")}>
              <Ionicons name="remove"/>
            </PrimaryButton>
          </View>
          <View style={styles.button}>
            <PrimaryButton onPress={nextGuessHandler.bind(this, "higher")}>
              <Ionicons name="add"/>
            </PrimaryButton>
          </View>
        </View>
      </Card>
      <View>
          <FlatList 
            data={guessRounds} 
            renderItem={(itemData)=> <GuessLog roundNumber={itemData.index+1} guess={itemData.item} />}
            keyExtractor={(item)=>item}
          />
      </View>
    </View>
  );
}

export default GameScreen;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 50,
  },
  buttonsContainer:{
    flexDirection:"row",
    gap:10
  },
  button:{
    flex:1
  },
  instructionText: {
    marginBottom:10
  }
});

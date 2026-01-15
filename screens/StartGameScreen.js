import { Alert, StyleSheet, Text, TextInput, useWindowDimensions, View } from "react-native";
import PrimaryButton from "../components/ui/PrimaryButton";
import { useState } from "react";
import Colors from "../constants/colors";
import Title from "../components/ui/Title";
import Card from "../components/ui/Card";
import InstructionText from "../components/ui/InstructionText";

function StartGameScreen({onPickNumber}) {
  const [enteredNumber, setEnteredNumber] = useState("")
  const { width, height } = useWindowDimensions()

  function resetInputHandler() {
    setEnteredNumber("")
  }
  
  function numberInputHandler (enteredText) {
    setEnteredNumber(enteredText)
  }

  function confirmInputHandler () {
    const chosenNumber = parseInt(enteredNumber)
    if (isNaN(chosenNumber) || chosenNumber <= 0 || chosenNumber > 99) {
      Alert.alert("Invalid number!",
                  "Number has to be between 1 and 99",
                  [{text:"Okay", style:"cancel", onPress: resetInputHandler}]
      )
      return;      
    }
    onPickNumber(chosenNumber)
  }

  const marginTopDistance = height <width ? 60 : 250;
  return (
    <View style={[styles.rootContainer, {marginTop: marginTopDistance}]}>
      <Title>Guess my Number</Title>
      <Card>
        <InstructionText>Enter a number</InstructionText>
        <View style={styles.textInputContainer}>
          <TextInput 
            style={styles.numberInput} 
            maxLength={2} 
            keyboardType="number-pad"
            value={enteredNumber}
            onChangeText={numberInputHandler}
          />
        </View>
        <View style={styles.buttonsContainer}>
          <View style={styles.buttonHolder}>
            <PrimaryButton
              onPress={resetInputHandler}
            >
              Reset
            </PrimaryButton>
          </View>
          <View style={styles.buttonHolder}>
            <PrimaryButton
              onPress={confirmInputHandler}
            >
              Confirm
            </PrimaryButton>
          </View>
        </View>
      </Card>
    </View>
  )
}

export default StartGameScreen;

const styles = StyleSheet.create({
  rootContainer: {
    flex:1,
    alignItems:"center",
    marginHorizontal:20
  },
  numberInput: {
    height:50,
    width:50,
    fontSize:25,
    borderBottomColor:Colors.accent500,
    borderBottomWidth:2,
    color:Colors.accent500,
    marginVertical:8,
    fontWeight:"bold",
    textAlign:"center"
  },
  textInputContainer:{
    flexDirection:"row",
    justifyContent:"center",
    alignItems:"center"
  },
  buttonsContainer:{
    flexDirection:"row",
    justifyContent:"center",
    alignItems:"center",
    gap:30
  },
  buttonHolder:{
    flex:1
  }
})
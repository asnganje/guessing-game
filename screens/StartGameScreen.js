import { Alert, StyleSheet, TextInput, View } from "react-native";
import PrimaryButton from "../components/PrimaryButton";
import { useState } from "react";

function StartGameScreen({onPickNumber}) {
  const [enteredNumber, setEnteredNumber] = useState("")

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

  return (
    <View style={styles.inputContainer}>
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
        <PrimaryButton
          onPress={resetInputHandler}
        >
          Reset
        </PrimaryButton>
        <PrimaryButton
          onPress={confirmInputHandler}
        >
          Confirm
        </PrimaryButton>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  inputContainer: {
    padding:16,
    marginTop:100,
    marginHorizontal:24,
    borderRadius:8,
    backgroundColor:"#4e0329",
    elevation:8
  },
  numberInput: {
    height:50,
    width:50,
    fontSize:25,
    borderBottomColor:"#ddb52f",
    borderBottomWidth:2,
    color:"#ddb52f",
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
  }
})
export default StartGameScreen;
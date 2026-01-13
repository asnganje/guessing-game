import { StyleSheet, TextInput, View } from "react-native";
import PrimaryButton from "../components/PrimaryButton";

function StartGameScreen() {
  return (
    <View style={styles.inputContainer}>
      <View style={styles.textInputContainer}>
        <TextInput style={styles.numberInput} maxLength={2} keyboardType="number-pad" />
      </View>
      <View style={styles.buttonsContainer}>
        <PrimaryButton>Reset</PrimaryButton>
        <PrimaryButton>Confirm</PrimaryButton>
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
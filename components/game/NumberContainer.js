import { Dimensions, StyleSheet, Text, View } from "react-native";
import Colors from "../../constants/colors";

function NumberContainer({children}) {
  return(
    <View style={styles.container}>
      <Text style={styles.numberText}>{children}</Text>
    </View>
  )
}

export default NumberContainer;

const deviceWidth = Dimensions.get("window").width

const styles = StyleSheet.create({
  container:{
    borderWidth:4,
    borderColor:Colors.accent500,
    alignItems:"center",
    justifyContent:"center",
    padding: deviceWidth < 380 ? 12:24,
    marginTop:deviceWidth < 380 ? 12: 24,
    borderRadius:8,
  },
  numberText: {
    color:Colors.accent500,
    fontSize:36,
    fontFamily:"open-sans-bold"
  }
})
import { StyleSheet, View } from "react-native";
import Colors from "../../constants/colors";

function Card({children}) {
  return(
    <View style={styles.card}>{children}</View>
  )
}

export default Card;

const styles = StyleSheet.create({
  card: {
    padding:16,
    marginVertical:30,
    minHeight:"15%",
    width:300,
    borderRadius:8,
    backgroundColor: Colors.primary800,
    elevation:8
  },
})
import { Dimensions, Image, StyleSheet, Text, useWindowDimensions, View } from "react-native";
import Title from "../components/ui/Title"
import Colors from "../constants/colors";
import PrimaryButton from "../components/ui/PrimaryButton"

function GameOverScreen({rounds, userNumber, onRestart }) {
  const { width, height } = useWindowDimensions()
  return(
        <View style={styles.rootContainer}>
          <Title>Game Over!</Title>
          <View 
            style={[styles.imageContainer,
              {width: height < width ? 150 : 300,
              height: height < width ? 150 : 300,
              margin: height < width ? 10 : 36
            }]}
          >
            <Image style={styles.image} source={require("../assets/success.png")}/>
          </View>
          <Text style={styles.summaryText}>Your phone needed <Text style={styles.highlight}>{rounds}</Text> rounds to guess the number <Text style={styles.highlight}>{userNumber}</Text>.</Text>
          <PrimaryButton onPress={onRestart}>Start a new game!</PrimaryButton>
        </View>
  ) 
}

export default GameOverScreen;

const deviceWidth = Dimensions.get("window").width;

const styles = StyleSheet.create({
  rootContainer:{
    flex:1,
    justifyContent:"center",
    alignItems:"center"
  },
  imageContainer:{
    borderRadius:deviceWidth < 380 ? 75 : 150,
    borderWidth:3,
    borderColor:Colors.primary800,
    overflow:"hidden",
  },
  image:{
    width:"100%",
    height:"100%"
  },
  summaryText:{
    fontFamily:"open-sans",
    fontSize:18,
    padding:10,
    textAlign:"center",
  },
  highlight:{
    fontFamily:"open-sans-bold",
    color: Colors.primary500
  }
})
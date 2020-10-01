import React, {Component} from "react"
import {
  View,
  StyleSheet,
  Image,
  Text,
  StatusBar,
  Dimensions,
} from "react-native"
import Screen from "../component/shared/Screen"
import Swiper from "react-native-swiper"
import colors from "../config/colors"

const {width, height} = Dimensions.get("window")
class OnboardingScreen extends Component {
  render() {
    return (
      <Screen>
        <Swiper autoplay={true}>
          <View style={styles.slide}>
            <Image
              source={require("../assets/img2.jpg")}
              style={styles.image}
            />
          </View>
          <View style={styles.slide}>
            <Image
              source={require("../assets/img1.jpg")}
              style={styles.image}
            />
          </View>
          <View style={styles.slide}>
            <Image
              source={require("../assets/img3.jpg")}
              style={styles.image}
            />
          </View>
        </Swiper>

        <View style={styles.textContainer}>
          <View style={styles.titleContainer}>
            <Text style={styles.title}>My Diary</Text>
          </View>

          <View style={styles.subTitleContainer}>
            <Text style={styles.subtitle}>Memories last forever</Text>
          </View>
        </View>
      </Screen>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  slide: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  image: {
    width: width,
    height: height,
  },
  textContainer: {
    position: "absolute",
    top: 250,
    width: "100%",
    height: 120,
    alignItems: "center",
    justifyContent: "center",
  },
  titleContainer: {
    width: 200,
    height: 60,
    backgroundColor: colors.primary,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 6,
    opacity: 0.7,
  },
  title: {
    fontSize: 40,
    color: colors.white,
  },
  subTitleContainer: {
    width: 200,
    height: 50,
    backgroundColor: colors.white,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 6,
    // alignSelf: "flex-end",
    opacity: 0.8,
  },
  subtitle: {
    fontSize: 20,
    color: colors.primary,
  },
})

export default OnboardingScreen

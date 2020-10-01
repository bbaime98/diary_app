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
import AppButton from "../component/shared/AppButton"

const {width, height} = Dimensions.get("window")
class OnboardingScreen extends Component {
  render() {
    const {navigation} = this.props
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

        <View style={styles.buttonsContainer}>
          <View style={styles.sinupContainer}>
            <AppButton title="SIGNUP" backgroundColor="white" color="primary" />
          </View>
          <View style={styles.loginContainer}>
            <AppButton
              title="LOGIN"
              backgroundColor="primary"
              color="white"
              onPress={() => navigation.navigate("Login")}
            />
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
  buttonsContainer: {
    position: "absolute",
    flexDirection: "row",
    width: 370,
    // left: 10,
    bottom: 40,
    justifyContent: "space-evenly",
    alignItems: "center",
  },
  sinupContainer: {
    width: 150,
    alignItems: "center",
  },
  loginContainer: {
    width: 150,
    alignItems: "center",
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
    opacity: 0.9,
  },
  title: {
    fontSize: 40,
    color: colors.white,
  },
  subTitleContainer: {
    width: 200,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 6,
    // alignSelf: "flex-end",
  },
  subtitle: {
    fontSize: 20,
    color: colors.white,
    fontWeight: "bold",
  },
})

export default OnboardingScreen

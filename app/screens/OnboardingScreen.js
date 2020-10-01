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

const {width, height} = Dimensions.get("window")
class OnboardingScreen extends Component {
  render() {
    return (
      <Screen>
        <Swiper autoplay={true}>
          <View style={styles.slide}>
            <Image
              source={require("../assets/light.jpg")}
              style={styles.image}
            />
          </View>
          <View style={styles.slide}>
            <Image
              source={require("../assets/view.jpg")}
              style={styles.image}
            />
          </View>
        </Swiper>
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
})

export default OnboardingScreen

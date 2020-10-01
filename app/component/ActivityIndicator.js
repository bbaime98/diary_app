import React from "react"
import LottieView from "lottie-react-native"
import {View, StyleSheet} from "react-native"
// import {floor} from "react-native-reanimated"

const ActivityIndicator = ({visible = false}) => {
  if (!visible) return null
  return (
    <View style={styles.overlay}>
      <LottieView
        autoPlay
        loop
        source={require("../assets/animations/loader1.json")}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  overlay: {
    backgroundColor: "#021249",
    height: "100%",
    width: "100%",
    opacity: 1,
    position: "absolute",
    zIndex: 1,
    // marginTop: 30,
  },
})

export default ActivityIndicator

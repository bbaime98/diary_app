import React from "react"
import {StyleSheet, View, StatusBar} from "react-native"
// import Constants from "expo-constants"
// import colors from "../../config/colors"

export default function Screen({children, style}) {
  return (
    <View style={[styles.screen, style]}>
      <StatusBar hidden={true} />
      <View style={[styles.view, style]}>{children}</View>
    </View>
  )
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
  view: {
    flex: 1,
  },
})

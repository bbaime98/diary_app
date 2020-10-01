import React from "react"
import {StyleSheet, SafeAreaView, View} from "react-native"
import Constants from "expo-constants"
import colors from "../../config/colors"

export default function Screen({children, style}) {
  return (
    <SafeAreaView style={[styles.screen, style]}>
      <View style={[styles.view, style]}>{children}</View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  screen: {
    paddingTop: Constants.statusBarHeight,
    flex: 1,
    backgroundColor: colors.white,
  },
  view: {
    flex: 1,
  },
})

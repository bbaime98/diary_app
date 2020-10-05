import React from "react"
import {View, StyleSheet, Image, Text} from "react-native"
import colors from "../config/colors"

const ActivityIndicator = ({visible}) => {
  if (!visible) return null
  return (
    <View style={styles.loader}>
      <Image source={require("../assets/og.gif")} />
      <Text style={styles.loading}>Loading...</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  loader: {
    backgroundColor: colors.white,
    height: "100%",
    width: "100%",
    zIndex: 10,
    alignItems: "center",
    justifyContent: "center",
  },
  loading: {
    color: colors.secondary,
  },
})

export default ActivityIndicator

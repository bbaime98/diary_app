import React from "react"
import {TouchableOpacity, StyleSheet, Text} from "react-native"
import colors from "../../config/colors"

const AppButton = ({title, onPress, color = "primary", backgroundColor}) => {
  return (
    <TouchableOpacity
      style={[styles.button, {backgroundColor: colors[backgroundColor]}]}
      onPress={onPress}
    >
      <Text style={[styles.text, {color: colors[color]}]}>{title}</Text>
    </TouchableOpacity>
  )
}

export default AppButton

const styles = StyleSheet.create({
  button: {
    borderRadius: 3,
    justifyContent: "center",
    alignItems: "center",
    padding: 15,
    width: "100%",
    marginVertical: 10,
  },
  text: {
    fontSize: 18,
    textTransform: "uppercase",
    fontWeight: "bold",
  },
})

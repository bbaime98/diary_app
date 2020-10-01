import React from "react"
import {View, StyleSheet, TextInput} from "react-native"
import {MaterialCommunityIcons} from "@expo/vector-icons"
import colors from "../../config/colors"
import defaultStyles from "../../config/styles"

function AppTextInput({icon, ...otherProps}) {
  return (
    <View style={styles.container}>
      {icon && (
        <MaterialCommunityIcons
          name={icon}
          style={styles.icon}
          size={25}
          color={colors.primary}
        />
      )}
      <TextInput style={defaultStyles.text} {...otherProps} />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    // backgroundColor: colors.secondary,
    borderRadius: 5,
    flexDirection: "row",
    width: "100%",
    marginVertical: 10,
    padding: 10,
    borderColor: colors.light,
    borderWidth: 1,
  },
  textInput: {
    fontSize: 18,
    color: colors.black,
  },
  icon: {
    marginRight: 5,
  },
})

export default AppTextInput

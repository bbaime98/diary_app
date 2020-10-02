import React from "react"
import {StyleSheet, View, TouchableWithoutFeedback} from "react-native"
import colors from "../config/colors"
// import {MaterialCommunityIcons} from "@expo/vector-icons"
import {Entypo} from "@expo/vector-icons"

export default function ListItemDeleteAction({deleteHandler, editHandler}) {
  return (
    <>
      <TouchableWithoutFeedback onPress={deleteHandler}>
        <View style={styles.container}>
          <Entypo name="trash" size={24} color={colors.danger} />
        </View>
      </TouchableWithoutFeedback>
      <TouchableWithoutFeedback onPress={editHandler}>
        <View style={styles.container}>
          <Entypo name="edit" size={24} color={colors.white} />
        </View>
      </TouchableWithoutFeedback>
    </>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.light,
    width: 70,
    justifyContent: "center",
    alignItems: "center",
    marginVertical: 10,
  },
})

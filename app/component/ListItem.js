import React from "react"
import {StyleSheet, View, Image, TouchableHighlight, Text} from "react-native"
import AppText from "../component/shared/AppText"
import colors from "../config/colors"
import Swipeable from "react-native-gesture-handler/Swipeable"
import {MaterialCommunityIcons} from "@expo/vector-icons"

const ListItem = ({
  title,
  subTitle,
  image,
  IconComponent,
  onPress,
  renderRightActions,
}) => {
  return (
    <Swipeable renderRightActions={renderRightActions}>
      <TouchableHighlight underlayColor={colors.white} onPress={onPress}>
        <View style={styles.container}>
          {IconComponent}
          {image && (
            <View style={styles.dateContainer}>
              <AppText style={styles.image}>{image}</AppText>
            </View>
          )}
          <View style={styles.detailContainer}>
            <AppText style={styles.owntitle} numberOfLines={1}>
              {title}
            </AppText>
            {subTitle && (
              <AppText style={styles.ownsubTitle} numberOfLines={2}>
                {subTitle}
              </AppText>
            )}
          </View>
          <MaterialCommunityIcons
            color={colors.medium}
            size={25}
            name="chevron-right"
          />
        </View>
      </TouchableHighlight>
    </Swipeable>
  )
}
const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    padding: 15,
    backgroundColor: colors.white,
    alignItems: "center",
    marginVertical: 10,
    // marginTop: 10,
    // marginBottom: 10,
  },
  image: {
    width: 70,
    height: 70,
    borderRadius: 5,
    // marginRight: 10,
    backgroundColor: colors.primary,
    color: colors.white,
    padding: 5,
  },
  detailContainer: {
    marginLeft: 10,
    justifyContent: "center",
    flex: 1,
  },
  dateContainer: {},
  owntitle: {
    fontWeight: "900",
  },
  ownsubTitle: {
    color: colors.medium,
  },
})

export default ListItem

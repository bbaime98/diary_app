import React, {useEffect} from "react"
import {View, StyleSheet, Text, ImageBackground, ScrollView} from "react-native"
import colors from "../config/colors"

function SinglePostScreen({route}) {
  //   useEffect(() => {
  //     console.log("SINGLE PROPS______", props)
  //   })
  const post = route.params
  return (
    <View style={styles.container}>
      <ImageBackground
        source={require("../assets/write.jpg")}
        style={styles.image}
      >
        <View style={styles.titleContainer}>
          <Text style={styles.title}>{post.title}</Text>
        </View>
      </ImageBackground>
      <ScrollView style={styles.descriptionContainer}>
        <View>
          <Text style={styles.description}>{post.description}</Text>
        </View>
        {/* </ScrollView> */}
        <View style={styles.createdOn}>
          <Text style={styles.postOn}>Posted on</Text>
          <Text style={styles.date}>{post.createdon.split(" ")[0]}</Text>
          <Text style={styles.time}>{post.createdon.split(" ")[1]}</Text>
        </View>
      </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
  descriptionContainer: {
    marginBottom: 200,
  },
  description: {
    fontSize: 20,
    padding: 10,
    color: colors.primary,
    // marginTop: 5,
  },
  createdOn: {
    flexDirection: "row",
    marginTop: 10,
    justifyContent: "center",
    marginBottom: 10,
  },
  date: {
    fontSize: 17,
    paddingRight: 10,
    paddingLeft: 10,
    color: colors.primary,
  },
  time: {
    color: colors.primary,
    fontSize: 17,
  },
  postOn: {
    fontSize: 17,
    padding: 3,
    color: colors.white,
    backgroundColor: colors.primary,
    borderRadius: 5,
  },
  image: {
    // flex: 0.5,
    resizeMode: "cover",
    justifyContent: "center",
    alignContent: "center",
    height: 200,
    width: "100%",
  },
  titleContainer: {
    backgroundColor: colors.medium,
    opacity: 0.7,
  },
  title: {
    fontSize: 27,
    color: colors.white,
    padding: 5,
    fontWeight: "bold",
    zIndex: 10,
    opacity: 1,
  },
})

export default SinglePostScreen

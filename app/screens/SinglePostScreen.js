import React, {useEffect} from "react"
import {View, StyleSheet, Text, ImageBackground} from "react-native"
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
        <Text style={styles.title}>{post.title}</Text>
      </ImageBackground>
      <Text style={styles.description}>{post.description}</Text>
      <View style={styles.createdOn}>
        <Text style={styles.postOn}>Posted on</Text>
        <Text style={styles.date}>{post.createdon.split(" ")[0]}</Text>
        <Text style={styles.time}>{post.createdon.split(" ")[1]}</Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {},
  description: {
    fontSize: 20,
    padding: 10,
    color: colors.primary,
    marginTop: 10,
  },
  createdOn: {
    flexDirection: "row",
    marginTop: 10,
    justifyContent: "center",
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
  title: {
    fontSize: 30,
    color: colors.white,
    backgroundColor: colors.blue,
    padding: 5,
    fontWeight: "bold",
    opacity: 0.8,
    zIndex: 10,
  },
})

export default SinglePostScreen

import React, {useEffect, useState} from "react"
import {View, StyleSheet, Text, ImageBackground, ScrollView} from "react-native"
import colors from "../config/colors"
import {connect} from "react-redux"
import {singlePostsAction} from "../redux/actions/postsActions"

function SinglePostScreen({route, singlePostsAction, singlePost, posts}) {
  // const [postDetails, setPostDetails] = useState()
  const postDetails = route.params
  // useEffect(() => {
  //   // getPostDetails()
  // }, [])
  // useEffect(() => {
  //   const {data} = singlePost
  //   if (data) {
  //     setPostDetails(data)
  //   }
  // }, [singlePost, posts])
  // const getPostDetails = async () => {
  //   const {data} = singlePost
  //   await singlePostsAction(postDetails.entryid)
  //   if (data) {
  //     setPostDetails(data)
  //   }
  // }
  return (
    <View style={styles.container}>
      {postDetails && (
        <>
          <ImageBackground
            source={require("../assets/write.jpg")}
            style={styles.image}
          >
            <View style={styles.titleContainer}>
              <Text style={styles.title}>{postDetails.title}</Text>
            </View>
          </ImageBackground>

          <ScrollView style={styles.descriptionContainer}>
            <View>
              <Text style={styles.description}>{postDetails.description}</Text>
            </View>
            <View style={styles.createdOn}>
              <Text style={styles.postOn}>Posted on</Text>
              <Text style={styles.date}>
                {postDetails.createdon.split(" ")[0]}
              </Text>
              <Text style={styles.time}>
                {postDetails.createdon.split(" ")[1]}
              </Text>
            </View>
            {postDetails.editedon && (
              <View style={styles.createdOn}>
                <Text style={styles.editedOn}>Edited on</Text>
                <Text style={styles.date}>
                  {postDetails.editedon.split(" ")[0]}
                </Text>
                <Text style={styles.time}>
                  {postDetails.editedon.split(" ")[1]}
                </Text>
              </View>
            )}
          </ScrollView>
        </>
      )}
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
  editedOn: {
    fontSize: 17,
    padding: 3,
    color: colors.white,
    backgroundColor: colors.secondary,
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

const mapStateToProps = ({singlePost}) => {
  return {singlePost}
}

const mapDispatchToProps = {
  singlePostsAction,
}

export default connect(mapStateToProps, mapDispatchToProps)(SinglePostScreen)

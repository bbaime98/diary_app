import React, {useEffect, useState} from "react"
import {StyleSheet, FlatList, View, Text} from "react-native"
import {connect} from "react-redux"
import ListItem from "../component/ListItem"
import ListItemDeleteAction from "../component/ListItemDeleteAction"
import {getPostsAction, deletePostAction} from "../redux/actions/postsActions"
import Screen from "../component/shared/Screen"
import ActivityIndicator from "../component/ActivityIndicator"
import colors from "../config/colors"

const PostsScreen = (props) => {
  const [loading, setLoading] = useState(false)
  const [fetchedPosts, setFetchedPosts] = useState([])
  const [refreshing, setRefreshing] = useState(false)
  const [userName, setUserName] = useState(null)
  useEffect(() => {
    const {getPostsAction} = props
    setLoading(true)
    getPostsAction()
  }, [])
  useEffect(() => {
    // setLoading(true)
    const {
      posts,
      authReducer: {data},
    } = props
    if (data) {
      setUserName(data.lastName)
    }
    if (posts) {
      setLoading(false)
      return setFetchedPosts(posts.data)
    }
    setLoading(false)
  }, [props.posts, props.singlePost, props.navigation, props.authReducer])

  const deleteHandler = async (entryid) => {
    setLoading(true)
    const {
      posts: {data, error},
      deletePostAction,
    } = props
    await deletePostAction(entryid)
    // await getPostsAction()
    const filteredPosts = data.filter((post) => {
      return post.entryid !== entryid
    })
    setFetchedPosts(filteredPosts)
    setLoading(false)
  }

  const refreshingHandler = async () => {
    setRefreshing(true)
    const {
      posts: {data, error},
      getPostsAction,
    } = props
    getPostsAction()
    setFetchedPosts(data)
    setRefreshing(false)
  }

  return (
    <Screen>
      <ActivityIndicator visible={loading} />
      {/* {fetchedPosts &&
        console.log("____type-----", Object.keys(fetchedPosts))} */}
      {fetchedPosts && fetchedPosts.length !== 0 ? (
        <FlatList
          data={fetchedPosts}
          keyExtractor={(post) => post.entryid.toString()}
          renderItem={({item}) => (
            <ListItem
              title={item.title}
              subTitle={item.description}
              image={item.createdon.split(" ")[0]}
              onPress={() => props.navigation.navigate("Single", item)}
              renderRightActions={() => (
                <ListItemDeleteAction
                  deleteHandler={() => deleteHandler(item.entryid)}
                  editHandler={() => props.navigation.navigate("Edit", item)}
                />
              )}
            />
          )}
          refreshing={refreshing}
          onRefresh={() => refreshingHandler()}
        />
      ) : (
        <View style={styles.welcomeTextContainer}>
          <Text style={styles.welcomeText}>
            Welcome <Text style={{color: "red"}}>{userName}</Text>, Create a
            post!
          </Text>
        </View>
      )}
    </Screen>
  )
}

const styles = StyleSheet.create({
  welcomeTextContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  welcomeText: {
    fontWeight: "bold",
    color: colors.primary,
  },
})
const mapStateToProps = ({posts, singlePost, authReducer}) => {
  return {posts, singlePost, authReducer}
}

const mapDispatchToProps = {
  getPostsAction,
  deletePostAction,
}
export default connect(mapStateToProps, mapDispatchToProps)(PostsScreen)

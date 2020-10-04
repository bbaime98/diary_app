import React, {useEffect, useState} from "react"
import {StyleSheet, FlatList} from "react-native"
import {connect} from "react-redux"
import ListItem from "../component/ListItem"
import ListItemDeleteAction from "../component/ListItemDeleteAction"
import {getPostsAction, deletePostAction} from "../redux/actions/postsActions"
import Screen from "../component/shared/Screen"
import ActivityIndicator from "../component/ActivityIndicator"

const PostsScreen = (props) => {
  const [loading, setLoading] = useState(true)
  const [fetchedPosts, setFetchedPosts] = useState([])
  const [refreshing, setRefreshing] = useState(false)
  useEffect(() => {
    // getPostsAction()
    getAllPosts()
  }, [])
  // useEffect(() => {
  //   // setLoading(true)
  //   // const {getPostsAction} = props
  //   console.log("________+RIGHT+++")
  //   // const {getPostsAction} = props
  //   getPostsAction()
  // }, [props.posts])
  const getAllPosts = async () => {
    setLoading(true)
    const {posts, getPostsAction} = props
    await getPostsAction()
    console.log("________jj+++_+++empyt use effect")
    setFetchedPosts(posts.data)
    setLoading(false)
  }
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
    console.log("AFTER +++++++DELETE", filteredPosts)
    setFetchedPosts(filteredPosts)
    setLoading(false)
  }

  const refreshingHandler = async () => {
    setRefreshing(true)
    const {
      posts: {data, error},
      getPostsAction,
    } = props
    await getPostsAction()
    setFetchedPosts(data)
    setRefreshing(false)
  }

  return (
    <Screen>
      <ActivityIndicator visible={loading} />
      {fetchedPosts && (
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
      )}
    </Screen>
  )
}

const styles = StyleSheet.create({
  container: {},
})
const mapStateToProps = ({posts}) => {
  return {posts}
}

const mapDispatchToProps = {
  getPostsAction,
  deletePostAction,
}
export default connect(mapStateToProps, mapDispatchToProps)(PostsScreen)

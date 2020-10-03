import React, {useEffect, useState} from "react"
import {StyleSheet, FlatList} from "react-native"
import {connect} from "react-redux"
import ListItem from "../component/ListItem"
import ListItemDeleteAction from "../component/ListItemDeleteAction"
import {getPostsAction} from "../redux/actions/postsActions"
import Screen from "../component/shared/Screen"
import ActivityIndicator from "../component/ActivityIndicator"

const PostsScreen = (props) => {
  const [loading, setLoading] = useState(true)
  const [fetchedPosts, setFetchedPosts] = useState([])
  // useEffect(() => {
  //   setLoading(true)
  //   const {getPostsAction, data, posts} = props
  //   getPostsAction()
  // }, [])
  useEffect(() => {
    // setLoading(true)
    const {posts, getPostsAction} = props
    getPostsAction()
    setFetchedPosts(posts.data)
    setLoading(false)
  }, [props.posts])
  return (
    <Screen>
      <ActivityIndicator visible={loading} />
      <FlatList
        data={fetchedPosts}
        keyExtractor={(post) => post.entryid.toString()}
        renderItem={({item}) => (
          <ListItem
            title={item.title}
            subTitle={item.description}
            image={item.createdon.split(" ")[0]}
            onPress={() => console.log("list item", item)}
            renderRightActions={() => (
              <ListItemDeleteAction
                deleteHandler={() => console.log("DETE ICON")}
                editHandler={() => console.log("edit ICON")}
              />
            )}
          />
        )}
      />
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
}
export default connect(mapStateToProps, mapDispatchToProps)(PostsScreen)

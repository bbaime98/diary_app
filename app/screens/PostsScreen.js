import React from "react"
import {StyleSheet, FlatList} from "react-native"
import ListItem from "../component/ListItem"
import ListItemDeleteAction from "../component/ListItemDeleteAction"
// import ListItemSeparator from "../component/ListItemSeparator"
import Screen from "../component/shared/Screen"
const posts = [
  {
    id: 1,
    title: "First Post my life",
    description:
      "description is coll and usefull though some time I dont include it but I knwo it is very needed",
    image: "2 Days ago",
  },
  {
    id: 2,
    title: "Second Post my life",
    description:
      "description is coll and usefull though some time I dont include it but I knwo it is very needed",
    image: "2 Days ago",
  },
]
function PostsScreen(props) {
  return (
    <Screen>
      <FlatList
        data={posts}
        keyExtractor={(post) => post.id.toString()}
        renderItem={({item}) => (
          <ListItem
            title={item.title}
            subTitle={item.description}
            image={item.image}
            onPress={() => console.log("okay", item)}
            renderRightActions={() => (
              <ListItemDeleteAction
                deleteHandler={() => console.log("DETE ICON")}
                editHandler={() => console.log("edit ICON")}
              />
            )}
          />
        )}
        // ItemSeparatorComponent={ListItemSeparator}
      />
    </Screen>
  )
}

const styles = StyleSheet.create({
  container: {},
})

export default PostsScreen

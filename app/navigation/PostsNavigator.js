import React from "react"
import {createStackNavigator} from "@react-navigation/stack"
import PostsScreen from "../screens/PostsScreen"
import SinglePostScreen from "../screens/SinglePostScreen"
import EditPostScreen from "../screens/EditPostScreen"

const Stack = createStackNavigator()

const PostsNavigator = () => {
  return (
    <Stack.Navigator mode="modal" screenOptions={{headerShown: false}}>
      <Stack.Screen name="Posts" component={PostsScreen} />
      <Stack.Screen name="Single" component={SinglePostScreen} />
      <Stack.Screen name="Edit" component={EditPostScreen} />
    </Stack.Navigator>
  )
}

export default PostsNavigator

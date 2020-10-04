import React from "react"
import {createStackNavigator} from "@react-navigation/stack"
import PostsScreen from "../screens/PostsScreen"
import SinglePostScreen from "../screens/SinglePostScreen"

const Stack = createStackNavigator()

const PostsNavigator = () => {
  return (
    <Stack.Navigator mode="modal" screenOptions={{headerShown: false}}>
      <Stack.Screen name="Posts" component={PostsScreen} />
      <Stack.Screen name="Single" component={SinglePostScreen} />
    </Stack.Navigator>
  )
}

export default PostsNavigator

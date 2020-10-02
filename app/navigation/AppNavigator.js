import React from "react"
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs"
import {Entypo} from "@expo/vector-icons"
import PostsScreen from "../screens/PostsScreen"
import NewPostScreen from "../screens/NewPostScreen"

const Tab = createBottomTabNavigator()

const AppNavigator = () => (
  <Tab.Navigator>
    <Tab.Screen
      name="Posts"
      component={PostsScreen}
      options={{
        tabBarIcon: ({color, size}) => (
          <Entypo name="newsletter" color={color} size={size} />
        ),
      }}
    />
    <Tab.Screen
      name="New Post"
      component={NewPostScreen}
      options={{
        tabBarIcon: ({color, size}) => (
          <Entypo name="edit" color={color} size={size} />
        ),
      }}
    />
  </Tab.Navigator>
)

export default AppNavigator

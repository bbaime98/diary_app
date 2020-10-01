import React from "react"
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs"
import {MaterialCommunityIcons} from "@expo/vector-icons"
import UploadVideo from "../screens/UploadVideo"
import PlayVideoScreen from "../screens/PlayVideo"
import AccountNavigator from "./AccountNavigator"

const Tab = createBottomTabNavigator()

const AppNavigator = () => (
  <Tab.Navigator>
    <Tab.Screen
      name="Home"
      component={PlayVideoScreen}
      options={{
        tabBarIcon: ({color, size}) => (
          <MaterialCommunityIcons name="home" color={color} size={size} />
        ),
      }}
    />
    <Tab.Screen
      name="New video"
      component={UploadVideo}
      options={{
        tabBarIcon: ({color, size}) => (
          <MaterialCommunityIcons name="camera" color={color} size={size} />
        ),
      }}
    />
    <Tab.Screen
      name="Account"
      component={AccountNavigator}
      options={{
        tabBarIcon: ({color, size}) => (
          <MaterialCommunityIcons name="account" color={color} size={size} />
        ),
      }}
    />
  </Tab.Navigator>
)

export default AppNavigator

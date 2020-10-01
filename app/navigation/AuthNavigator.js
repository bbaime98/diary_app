import React from "react"
import {createStackNavigator} from "@react-navigation/stack"
import OnboardingScreen from "../screens/OnboardingScreen"
import LoginScreen from "../screens/LoginScreen"

const Stack = createStackNavigator()

const AuthNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Welcome" component={OnboardingScreen} />
      <Stack.Screen name="Login" component={LoginScreen} />
      {/*  <Stack.Screen name="Register" component={RegisterScreen} /> */}
    </Stack.Navigator>
  )
}

export default AuthNavigator

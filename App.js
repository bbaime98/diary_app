import React from "react"
import {NavigationContainer} from "@react-navigation/native"
import AuthNavigator from "./app/navigation/AuthNavigator"
import store from "./app/redux/store"
import {Provider} from "react-redux"

export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <AuthNavigator />
      </NavigationContainer>
    </Provider>
  )
}

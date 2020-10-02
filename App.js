import React, {useEffect} from "react"
import {NavigationContainer} from "@react-navigation/native"
import AuthNavigator from "./app/navigation/AuthNavigator"
import store from "./app/redux/store"
import {Provider} from "react-redux"
import authStorage from "./app/utils/storage"

export default function App() {
  useEffect(() => {
    restoreToken()
  }, [])

  const restoreToken = async () => {
    const token = await authStorage.getToken()
    if (!token) return
    console.log("GET TOKEN", token)
  }
  return (
    <Provider store={store}>
      <NavigationContainer>
        <AuthNavigator />
      </NavigationContainer>
    </Provider>
  )
}

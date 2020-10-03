import React, {useEffect, useState} from "react"
// import {NavigationContainer} from "@react-navigation/native"
// import AuthNavigator from "./app/navigation/AuthNavigator"
// import TabNavigator from "./app/navigation/TabNavigator"
import store from "./app/redux/store"
import {Provider} from "react-redux"
// import authStorage from "./app/utils/storage"
import Auth from "./app/utils/auth"
export default function App() {
  // const [authToken, setAuthToken] = useState(null)
  // useEffect(() => {
  //   restoreToken()
  // }, [])

  // const restoreToken = async () => {
  //   const token = await authStorage.getToken()
  //   if (!token) return
  //   setAuthToken(token)
  // }
  return (
    <Provider store={store()}>
      {/* <NavigationContainer> */}
      {/* {authToken ? <TabNavigator /> : <AuthNavigator />} */}
      {/* <TabNavigator /> */}
      {/* <AuthNavigator /> */}
      <Auth />
      {/* </NavigationContainer> */}
    </Provider>
  )
}

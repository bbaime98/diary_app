import React from "react"
import store from "./app/redux/store"
import {Provider} from "react-redux"
import Auth from "./app/utils/auth"

const AppEntry = () => {
  return (
    <Provider store={store()}>
      <Auth />
    </Provider>
  )
}

export default AppEntry

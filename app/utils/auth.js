import React, {useEffect, useState} from "react"
import {NavigationContainer} from "@react-navigation/native"
import AuthNavigator from "../navigation/AuthNavigator"
import TabNavigator from "../navigation/TabNavigator"
import authStorage from "./storage"
import {connect} from "react-redux"
// import {redirectUser} from "../redux/actions/redirectUser"
import Loader from "../component/ActivityIndicator"
const Auth = (props) => {
  const [authToken, setAuthToken] = useState(null)
  const [redirectState, setRedirectState] = useState(null)
  useEffect(() => {
    restoreToken()
    const {redirect} = props
    if (!redirect) return
    setRedirectState(true)
  }, [props.redirect])

  const restoreToken = async () => {
    const token = await authStorage.getToken()
    if (!token) return
    setAuthToken(token)
  }
  return (
    <NavigationContainer>
      {redirectState && authToken ? <TabNavigator /> : <AuthNavigator />}
      {/* <TabNavigator /> */}
      {/* <AuthNavigator /> */}
      {/* <Loader /> */}
    </NavigationContainer>
  )
}

const mapStateToProps = ({redirect}) => {
  return {redirect}
}

export default connect(mapStateToProps, null)(Auth)

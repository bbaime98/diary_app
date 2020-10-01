import React, {useState, useEffect, Component} from "react"
import {connect} from "react-redux"
import {loginAction} from "../redux/actions/loginAction"
import {StyleSheet, Image, View, Text, Button} from "react-native"
import Screen from "../component/shared/Screen"
import colors from "../config/colors"
import AppInputField from "../component/form/AppTextInput"
import * as Yup from "yup"
import AppButton from "../component/shared/AppButton"

const validationSchema = Yup.object().shape({
  email: Yup.string().required().email().label("Email"),
  password: Yup.string().required().min(5).label("Password"),
})
const LoginScreen = (props) => {
  useEffect(() => {
    const {data, error} = props
    console.log("______USEFFECT", data)
  }, [props.loginReducer])
  const loginUser = async () => {
    const user = {
      email: "email@domain.com",
      password: "Bien@BAR789",
    }
    await props.loginAction(user)
    console.log("______****")
  }
  return (
    <Screen style={styles.container}>
      <Text style={styles.title}>LOGIN</Text>
      <View style={styles.formConatiner}>
        <AppInputField
          placeholder="Email"
          icon="email-outline"
          keyboardType="email-address"
          textContentType="emailAddress"
          autoCapitalize="none"
        />
        <AppInputField
          autoCapitalize="none"
          autoCorrect={false}
          icon="lock-outline"
          placeholder="Password"
          secureTextEntry
          textContentType="password"
          name="password"
        />
        {/* <Button onPress={loginUser} title="login" /> */}
        <AppButton title="Login" color="primary" onPress={loginUser} />
      </View>
    </Screen>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.primary,
    // padding: 10,
  },
  formConatiner: {
    backgroundColor: colors.white,
    alignSelf: "center",
    borderRadius: 5,
    height: 250,
    padding: 10,
    paddingTop: 25,
    width: "80%",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 2,
    marginVertical: 20,
  },
  title: {
    alignSelf: "center",
    marginTop: 60,
    marginBottom: 20,
    color: colors.white,
    // fontWeight: "bold",
    fontSize: 30,
  },
})

const mapStateToProps = ({loginReducer}) => {
  return loginReducer
}

const mapDispatchToProps = {
  loginAction,
}
export default connect(mapStateToProps, mapDispatchToProps)(LoginScreen)

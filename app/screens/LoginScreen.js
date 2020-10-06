import React, {useState, useEffect, Component} from "react"
import {connect} from "react-redux"
import {loginAction} from "../redux/actions/loginAction"
import {redirectUser} from "../redux/actions/redirectUser"
import {StyleSheet, Image, View, Text, Button} from "react-native"
import Screen from "../component/shared/Screen"
import colors from "../config/colors"
import AppInputField from "../component/form/AppTextInput"
import * as Yup from "yup"
import AppButton from "../component/shared/AppButton"
import {Formik} from "formik"
import ErrorMessage from "../component/form/ErrorMessage"
import authStorage from "../utils/storage"
import ActivityIndicator from "../component/ActivityIndicator"

const validationSchema = Yup.object().shape({
  email: Yup.string().required().email().label("Email"),
  password: Yup.string()
    .required()
    .min(7)
    .matches(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[#$^+=!*()@%&]).{7,20}$/,
      "include uppercase, lowercase, number and special character"
    )
    .label("Password"),
})
const LoginScreen = (props) => {
  const [loading, setLoading] = useState(false)
  const [loginFailed, setLoginFailed] = useState(false)
  const handleLogin = async (values) => {
    setLoading(true)
    const {data, error, authReducer} = props
    const output = await props.loginAction(values)
    if (output.type === "LOGIN_ERROR") {
      setLoading(false)

      setLoginFailed(true)
    } else {
      const {redirect, redirectUser} = props
      await authStorage.storeToken(output.payload.token)
      redirectUser(true)
      // setLoading(false)
    }
  }
  return (
    <Screen style={styles.container}>
      <ActivityIndicator visible={loading} />
      <Text style={styles.title}>LOGIN</Text>
      <Formik
        initialValues={{email: "", password: ""}}
        onSubmit={(values) => handleLogin(values)}
        validationSchema={validationSchema}
      >
        {({handleChange, handleSubmit, errors, setFieldTouched, touched}) => (
          <>
            <View style={styles.formConatiner}>
              <ErrorMessage
                error="Invalid email and/or password."
                visible={loginFailed}
              />
              <AppInputField
                placeholder="Email"
                icon="email-outline"
                keyboardType="email-address"
                textContentType="emailAddress"
                autoCapitalize="none"
                name="email"
                onChangeText={handleChange("email")}
                onBlur={() => setFieldTouched("email")}
              />
              <ErrorMessage error={errors.email} visible={touched.email} />
              <AppInputField
                autoCapitalize="none"
                autoCorrect={false}
                icon="lock-outline"
                placeholder="Password"
                secureTextEntry
                textContentType="password"
                name="password"
                onChangeText={handleChange("password")}
                onBlur={() => setFieldTouched("password")}
              />
              <ErrorMessage
                error={errors.password}
                visible={touched.password}
              />
            </View>
            <View style={styles.btnContainer}>
              <AppButton
                title="Login"
                color="white"
                backgroundColor="secondary"
                onPress={handleSubmit}
              />
            </View>
          </>
        )}
      </Formik>
    </Screen>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.primary,
    // padding: 10,
  },
  btnContainer: {
    marginTop: 20,
    width: "80%",
    alignSelf: "center",
  },
  formConatiner: {
    backgroundColor: colors.white,
    alignSelf: "center",
    borderRadius: 5,
    height: 200,
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
    // marginVertical: 20,
  },
  title: {
    alignSelf: "center",
    marginTop: 60,
    marginBottom: 20,
    color: colors.white,
    // fontWeight: "bold",
    fontSize: 30,
  },
  error: {
    color: "red",
  },
})

const mapStateToProps = ({authReducer, redirect}) => {
  return {authReducer, redirect}
}

const mapDispatchToProps = {
  loginAction,
  redirectUser,
}
export default connect(mapStateToProps, mapDispatchToProps)(LoginScreen)

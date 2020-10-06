import React, {useState, useEffect, Component} from "react"
import {connect} from "react-redux"
import {signupAction} from "../redux/actions/loginAction"
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
  firstName: Yup.string().required().label("First Name"),
  lastName: Yup.string().required().label("Last Name"),
})
const SignupScreen = (props) => {
  const [loading, setLoading] = useState(false)
  const [loginFailed, setLoginFailed] = useState(false)

  useEffect(() => {
    const {
      authReducer: {data, error},
      redirectUser,
    } = props
    if (data) {
      authStorage.storeToken(data.token)
      redirectUser(true)
    }
    if (error) {
      setLoginFailed(true)
    }
    setLoading(false)
  }, [props.authReducer])

  const handleLogin = async (values) => {
    const {signupAction} = props
    signupAction(values)
    setLoading(true)
  }
  return (
    <Screen style={styles.container}>
      <ActivityIndicator visible={loading} />
      <Text style={styles.title}>SIGNUP</Text>
      <Formik
        initialValues={{firstName: "", lastName: "", email: "", password: ""}}
        onSubmit={(values) => handleLogin(values)}
        validationSchema={validationSchema}
      >
        {({handleChange, handleSubmit, errors, setFieldTouched, touched}) => (
          <>
            <View style={styles.formConatiner}>
              <ErrorMessage error="User Already Exist" visible={loginFailed} />
              <ErrorMessage
                error={errors.firstName}
                visible={touched.firstName}
              />
              <AppInputField
                placeholder="First Name"
                name="firstName"
                onChangeText={handleChange("firstName")}
                onBlur={() => setFieldTouched("firstName")}
              />
              <ErrorMessage
                error={errors.lastName}
                visible={touched.lastName}
              />
              <AppInputField
                placeholder="Last Name"
                name="lastName"
                onChangeText={handleChange("lastName")}
                onBlur={() => setFieldTouched("lastName")}
              />
              <ErrorMessage error={errors.email} visible={touched.email} />
              <AppInputField
                placeholder="Email"
                keyboardType="email-address"
                textContentType="emailAddress"
                autoCapitalize="none"
                name="email"
                onChangeText={handleChange("email")}
                onBlur={() => setFieldTouched("email")}
              />
              <ErrorMessage
                error={errors.password}
                visible={touched.password}
              />
              <AppInputField
                autoCapitalize="none"
                autoCorrect={false}
                placeholder="Password"
                secureTextEntry
                textContentType="password"
                name="password"
                onChangeText={handleChange("password")}
                onBlur={() => setFieldTouched("password")}
              />
            </View>
            <View style={styles.btnContainer}>
              <AppButton
                title="SIGNUP"
                color="white"
                backgroundColor="primary"
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
    backgroundColor: colors.white,
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
    height: 330,
    padding: 10,
    width: "80%",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 2,
  },
  title: {
    alignSelf: "center",
    marginTop: 20,
    marginBottom: 20,
    color: colors.secondary,
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
  signupAction,
  redirectUser,
}
export default connect(mapStateToProps, mapDispatchToProps)(SignupScreen)

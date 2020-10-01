import React, {useState, useEffect, Component} from "react"
import {StyleSheet, Image, View, Text} from "react-native"
import Screen from "../component/shared/Screen"
import colors from "../config/colors"
import AppInputField from "../component/form/AppTextInput"
import * as Yup from "yup"
import AppButton from "../component/shared/AppButton"

const validationSchema = Yup.object().shape({
  email: Yup.string().required().email().label("Email"),
  password: Yup.string().required().min(5).label("Password"),
})
const LoginScreen = () => {
  return (
    <Screen style={styles.container}>
      <View style={styles.bluePart}>
        <Text style={styles.title}>LOGIN</Text>
        <View style={styles.formConatiner}>
          <AppInputField
            placeholder="Email"
            icon="email"
            keyboardType="email-address"
            textContentType="emailAddress"
            autoCapitalize="none"
          />
          <AppInputField
            autoCapitalize="none"
            autoCorrect={false}
            icon="lock"
            placeholder="Password"
            secureTextEntry
            textContentType="password"
            name="password"
          />
          <AppButton title="Login" color="white" backgroundColor="primary" />
          <AppButton title="Google" color="primary" backgroundColor="white" />
        </View>
        <View style={styles.optionsConatiner}>
          <Text style={styles.optionItem}>Forget Password?</Text>
          <Text style={styles.optionItem}>Create an Account</Text>
        </View>
      </View>
    </Screen>
  )
}

const styles = StyleSheet.create({
  container: {
    // padding: 10,
  },
  bluePart: {
    flex: 0.5,
    backgroundColor: colors.primary,
  },
  formConatiner: {
    backgroundColor: colors.white,
    alignSelf: "center",
    borderRadius: 5,
    height: 310,
    padding: 10,
    width: "80%",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.3,
    shadowRadius: 4.65,
    elevation: 8,
  },
  optionsConatiner: {
    marginLeft: 35,
    marginTop: 10,
  },
  optionItem: {
    fontSize: 18,
    padding: 10,
    color: colors.primary,
  },
  title: {
    alignSelf: "center",
    marginTop: 20,
    marginBottom: 20,
    color: colors.secondary,
    fontWeight: "bold",
    fontSize: 45,
  },
})

export default LoginScreen

import React, {useState, useEffect, Component} from "react"
import {connect} from "react-redux"
import {loginAction} from "../redux/actions/loginAction"
import {redirectUser} from "../redux/actions/redirectUser"
import {StyleSheet, Image, View, Text} from "react-native"
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
  title: Yup.string().required().min(10).max(50).label("Title"),
  description: Yup.string().required().min(50).label("Description"),
})
const EditPostScreen = ({route}) => {
  const post = route.params
  const [loading, setLoading] = useState(false)
  const [loginFailed, setLoginFailed] = useState(false)

  const handleEdit = async (values) => {
    console.log("EDIT", values)
  }
  return (
    <Screen style={styles.container}>
      <ActivityIndicator visible={loading} />
      <Text style={styles.title}>Edit Post</Text>
      <View style={styles.formConatiner}>
        <Formik
          initialValues={{title: post.title, description: post.description}}
          onSubmit={(values) => handleEdit(values)}
          validationSchema={validationSchema}
        >
          {({handleChange, handleSubmit, errors, setFieldTouched, touched}) => (
            <>
              {/* <ErrorMessage
                error="Invalid title and/or password."
                visible={loginFailed}
              /> */}

              <Text style={styles.label}>Title</Text>
              <ErrorMessage error={errors.title} visible={touched.title} />
              <AppInputField
                placeholder="Title"
                autoCapitalize="none"
                name="title"
                defaultValue={post.title}
                multiline={true}
                maxLength={30}
                onChangeText={handleChange("title")}
                onBlur={() => setFieldTouched("title")}
              />
              {errors.description && errors.description ? (
                <ErrorMessage
                  error={errors.description}
                  visible={touched.description}
                />
              ) : (
                <Text style={styles.label}>Description</Text>
              )}
              <View style={styles.descriptionInputFieldHeight}>
                <AppInputField
                  placeholder="Description"
                  autoCapitalize="none"
                  name="description"
                  defaultValue={post.description}
                  multiline={true}
                  onChangeText={handleChange("description")}
                  onBlur={() => setFieldTouched("description")}
                />
              </View>
              {/* <ErrorMessage error={errors.title} visible={touched.title} /> */}
              <View style={styles.buttonContainer}>
                <AppButton
                  title="Save"
                  color="white"
                  backgroundColor="primary"
                  onPress={handleSubmit}
                />
              </View>
            </>
          )}
        </Formik>
      </View>
    </Screen>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.primary,
    // padding: 10,
  },
  buttonContainer: {
    marginBottom: 20,
  },
  formConatiner: {
    backgroundColor: colors.white,
    alignSelf: "center",
    borderRadius: 5,
    height: "100%",
    padding: 10,
    paddingTop: 10,
    width: "100%",
    // marginVertical: 10,
    marginBottom: 20,
  },
  descriptionInputFieldHeight: {
    height: 200,
  },
  label: {
    fontSize: 18,
    color: colors.primary,
    fontWeight: "bold",
  },
  title: {
    alignSelf: "center",
    marginTop: 20,
    marginBottom: 20,
    color: colors.white,
    // fontWeight: "bold",
    fontSize: 30,
  },
  error: {
    color: "red",
  },
})

const mapStateToProps = ({loginReducer, redirect}) => {
  return {loginReducer, redirect}
}

const mapDispatchToProps = {
  loginAction,
  redirectUser,
}
export default connect(mapStateToProps, mapDispatchToProps)(EditPostScreen)

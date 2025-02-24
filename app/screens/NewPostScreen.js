import React, {useState, useEffect, Component} from "react"
import {connect} from "react-redux"
import {newPostAction, getPostsAction} from "../redux/actions/postsActions"
import {StyleSheet, Image, View, Text} from "react-native"
import Screen from "../component/shared/Screen"
import colors from "../config/colors"
import AppInputField from "../component/form/AppTextInput"
import * as Yup from "yup"
import AppButton from "../component/shared/AppButton"
import {Formik} from "formik"
import ErrorMessage from "../component/form/ErrorMessage"
import ActivityIndicator from "../component/ActivityIndicator"

const validationSchema = Yup.object().shape({
  title: Yup.string().required().min(10).max(50).label("Title"),
  description: Yup.string().required().min(50).label("Description"),
})
const NewPostScreen = ({
  route,
  newPostAction,
  getPostsAction,
  singlePost,
  navigation,
}) => {
  let post = route.params
  const [loading, setLoading] = useState(false)
  const [editError, setEditError] = useState(null)

  const handleNewPost = async (values, actions) => {
    const {error, data} = singlePost
    setLoading(true)
    await newPostAction(values)
    if (error) {
      setLoading(false)
      setEditError(error)
    }
    getPostsAction()
    actions.resetForm({values: ""})
    setLoading(false)
    return navigation.navigate("Posts")
  }
  return (
    <>
      <ActivityIndicator visible={loading} />
      <Screen style={styles.container}>
        <Text style={styles.title}>New Post</Text>
        <View style={styles.formConatiner}>
          <Formik
            initialValues={{title: "", description: ""}}
            onSubmit={(values, actions) => {
              handleNewPost(values, actions)
              // resetForm({values: ""})
            }}
            validationSchema={validationSchema}
          >
            {({
              handleChange,
              handleSubmit,
              errors,
              setFieldTouched,
              touched,
              resetForm,
            }) => (
              <>
                <ErrorMessage
                  error={editError}
                  visible={editError ? true : false}
                />

                <Text style={styles.label}>Title</Text>
                <ErrorMessage error={errors.title} visible={touched.title} />
                <AppInputField
                  placeholder="Title"
                  autoCapitalize="none"
                  name="title"
                  multiline={true}
                  maxLength={30}
                  // editable={false}
                  onChangeText={handleChange("title")}
                  onBlur={() => setFieldTouched("title")}
                />

                <ErrorMessage
                  error={errors.description}
                  visible={touched.description}
                />
                <Text style={styles.label}>Description</Text>
                <View style={styles.descriptionInputFieldHeight}>
                  <AppInputField
                    placeholder="Description"
                    autoCapitalize="none"
                    name="description"
                    multiline={true}
                    onChangeText={handleChange("description")}
                    onBlur={() => setFieldTouched("description")}
                  />
                </View>
                <View style={styles.buttonContainer}>
                  <AppButton
                    title="Create"
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
    </>
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

const mapStateToProps = ({singlePost}) => {
  return {singlePost}
}

const mapDispatchToProps = {
  newPostAction,
  getPostsAction,
}
export default connect(mapStateToProps, mapDispatchToProps)(NewPostScreen)

// import React from "react"
// import {
//   ImageBackground,
//   StyleSheet,
//   View,
//   Image,
//   Text,
//   Button,
// } from "react-native"
// import AppButton from "../component/shared/AppButton"
// import colors from "../config/colors"

// const WelcomeScreen = ({navigation}) => {
//   return (
//     <ImageBackground
//       style={styles.background}
//       source={require("../assets/light.jpg")}
//       blurRadius={1}
//     >
//       <View style={styles.buttonsContainer}>
//         <AppButton
//           title="signup"
//           color="white"
//           backgroundColor="primary"
//           onPress={() => navigation.navigate("Home")}
//         />
//         <AppButton
//           title="Login"
//           color="primary"
//           backgroundColor="white"
//           onPress={() => navigation.navigate("Home")}
//         />
//       </View>
//     </ImageBackground>
//   )
// }

// export default WelcomeScreen

// const styles = StyleSheet.create({
//   background: {
//     flex: 1,
//     justifyContent: "center",
//     alignItems: "center",
//   },
//   buttonsContainer: {
//     padding: 20,
//     paddingTop: 300,
//     width: "100%",
//   },
//   logo: {
//     width: 100,
//     height: 100,
//   },
//   logoContainer: {
//     position: "absolute",
//     top: 70,
//     alignItems: "center",
//   },
//   tagline: {
//     fontSize: 25,
//     fontWeight: "600",
//     paddingVertical: 20,
//     color: colors.medium,
//   },
// })

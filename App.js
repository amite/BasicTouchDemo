import React from "react"
import { StyleSheet, Text, View } from "react-native"
import MyButton from "./components/MyButton"

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <MyButton
          onClick={() => console.log("I want you to be clicked")}
          title="Click my button"
        />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  }
})

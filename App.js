import React from "react"
import { StyleSheet, Text, View } from "react-native"
import MyButton from "./components/MyButton"

export default class App extends React.Component {
  handleClick(msg) {
    console.log(msg)
  }

  render() {
    return (
      <View style={styles.container}>
        <MyButton
          onClick={() => this.handleClick("some custom message")}
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

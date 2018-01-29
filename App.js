import React from "react"
import { StyleSheet, Text, View, Alert } from "react-native"
import MyButton from "./components/MyButton"

export default class App extends React.Component {
  handleClick(msg) {
    Alert.alert("MyAlert", "This is important")
  }

  render() {
    return (
      <View style={styles.container}>
        <MyButton
          color={this.props.color}
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

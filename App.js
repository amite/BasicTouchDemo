import React from "react"
import { StyleSheet, Text, View, Alert } from "react-native"
import MyButton from "./components/MyButton"

export default class App extends React.Component {
  state = {
    hidden: false,
    isActive: false
  }

  handleClick(msg) {
    this.setState({ hidden: !this.state.hidden }, () => {
      Alert.alert("MyAlert", "This is important")
    })
  }

  render() {
    let buttonProps = {
      style: { marginBottom: 10 },
      onPress: () => this.handleClick("some custom message"),
      title: "Click my Button",
      disabled: this.state.isActive
    }

    return (
      <View style={styles.container}>
        <MyButton {...buttonProps} />
        {!this.state.hidden && (
          <Text>This is some content I would like to hide</Text>
        )}
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

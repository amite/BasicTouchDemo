import React from "react"
import { StyleSheet, Text, View, Alert } from "react-native"
import MyButton from "./components/MyButton"

export default class App extends React.Component {
  state = {
    hidden: false
  }

  handleClick(msg) {
    this.setState({ hidden: !this.state.hidden })
  }

  render() {
    let buttonProps = {
      style: { marginBottom: 10 },
      onClick: () => this.handleClick("some custom message"),
      title: "Click my Button"
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

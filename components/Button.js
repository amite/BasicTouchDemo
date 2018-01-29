import React, { Component } from "react"
import { Button } from "react-native"

export default class MyButton extends Component {
  render() {
    return (
      <Button onPress={() => console.log("I was clicked")} title="Click me" />
    )
  }
}

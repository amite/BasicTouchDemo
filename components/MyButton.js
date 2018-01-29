import React, { Component } from "react"
import { Button } from "react-native"

export default class MyButton extends Component {
  render() {
    return <Button onPress={this.props.onClick} title={this.props.title} />
  }
}

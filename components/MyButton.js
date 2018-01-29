import React, { Component } from "react"
import { Button } from "react-native"

export default class MyButton extends Component {
  static defaultProps = {
    color: "blue"
  }

  render() {
    return (
      <Button
        color={this.props.color}
        onPress={this.props.onClick}
        title={this.props.title}
      />
    )
  }
}

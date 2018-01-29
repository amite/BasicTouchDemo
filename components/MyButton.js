import React, { Component } from "react"
import { Button } from "react-native"

export default class MyButton extends Component {
  static defaultProps = {
    color: "blue"
  }

  render() {
    return <Button {...this.props} />
  }
}

import React from 'react'
import { View, StyleSheet } from 'react-native'
import { Text } from 'react-native-elements'

export default class NairaText extends React.Component {
  render () {
    const style = this.props.style || {color: 'black'}
    return (
      <View style={{ flexDirection: 'row' }}>
        <Text {...this.props} style={style}>&#8358;</Text>
        <Text {...this.props} style={style}>{this.props.text}</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
})

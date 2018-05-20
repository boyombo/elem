import React from 'react'
import { View, StyleSheet } from 'react-native'
import { Text, Icon } from 'react-native-elements'

export default class StatusText extends React.Component {
  render () {
    const status = this.props.status || 'Failed'
    const withIcon = this.props.icon || false
    let iconName
    let color
    if (this.props.status === 'Succeeded') {
      color = 'green'
    } else {
      color = 'red'
    }
    if (withIcon) {
      if (this.props.status === 'Succeeded') {
        iconName = 'check-circle'
      } else {
        iconName = 'error'
      }
      return (
        <View style={{ flexDirection: 'row' }}>
          <Icon name={iconName} color={color} />
          <Text style={{color: color}}>{status}</Text>
        </View>
      )
    } else {
      return (
        <View style={{ flexDirection: 'row' }}>
          <Text style={{color: color}}>{status}</Text>
        </View>
      )
    }
  }
}

const styles = StyleSheet.create({
})

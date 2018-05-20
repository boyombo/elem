import React from 'react'
import { View, StyleSheet } from 'react-native'
import { Text, Icon } from 'react-native-elements'

export default class StatusText extends React.Component {
  render () {
    const withIcon = this.props.icon || false
      if (withIcon) {
          if (this.props.status == 'succeeded') {
              icon_name = "check";
              icon_color = "green";
          } else {
              icon_name = "error";
              icon_color = "red";
          }
          return (
              <View style={{ flexDirection: "row" }}>
                  <Icon name={icon_name} color={icon_color} />
                  <Text style={{color: icon_color}>{this.props.status}</Text>
              </View>
          )
      } else {
      }
    return (
      <View style={{ flexDirection: 'row' }}>
        <Text style={style}>&#8358;</Text>
        <Text style={style}>{this.props.text}</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
})

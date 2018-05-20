import React from 'react'
import { View, StyleSheet } from 'react-native'
import { Icon } from 'react-native-elements'

export default class BackButton extends React.Component {
  render () {
    return (
      <View style={styles.container}>
        <Icon name="chevron-left" color="#fff" style={styles.icon} />
      </View>
    )
  }
}

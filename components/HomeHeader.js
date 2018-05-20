import React from 'react'
import { View, StyleSheet } from 'react-native'
import { Text, Icon } from 'react-native-elements'

export default class HomeHeader extends React.Component {
  render () {
    return (
      <View style={styles.container}>
        <Text style={styles.text}>&#8358; 0</Text>

        <Icon name="add" color="#fff" style={styles.icon} />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center'
  },
  text: {
    backgroundColor: '#004e98',
    paddingLeft: 10,
    paddingRight: 10,
    fontSize: 20,
    color: '#fff'
    // paddingTop: 10,
    // paddingBottom: 10
  },
  icon: {
    // paddingTop: 10,
    // paddingBottom: 10
  }
})

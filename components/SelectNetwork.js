import React from 'react'
import { View, StyleSheet } from 'react-native'
import { Input, Text, Icon } from 'react-native-elements'
import ModalDropdown from 'react-native-modal-dropdown'
import { darkGray, darkBlue, mediumBlue, lightGray, white } from './Colors'

export default class SelectNetwork extends React.Component {
  constructor (props) {
    super(props)
    this.state = {network: null}
  }
  render () {
    return (
      <View style={styles.container}>

        <Icon name="sim-card" color={mediumBlue} containerStyle={{ marginRight: 10 }} />
        <ModalDropdown
          options={['MTN', 'Airtel', 'Glo', '9 Mobile']}
          dropdownStyle={{width: 200}}
          textStyle={{fontSize: 15, color: darkGray}}
          defaultValue="Select Network"
          onSelect={(index, value) => this.setState({network: value})}
        />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    // padding: 10
    margin: 5
  },
  text: {
    // paddingLeft: 10,
    // paddingRight: 5,
    fontSize: 20,
    color: darkGray,
    flex: 1
    // paddingTop: 10,
    // paddingBottom: 10
  },
  icon: {
    // paddingTop: 10,
    // paddingBottom: 10
  }
})

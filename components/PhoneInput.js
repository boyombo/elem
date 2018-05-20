import React from 'react'
import { View, StyleSheet } from 'react-native'
import { Input, Text, Icon } from 'react-native-elements'
import { darkGray, darkBlue, mediumBlue, lightGray, white } from './Colors'

export default class PhoneInput extends React.Component {
  render () {
    return (
      <View style={styles.container}>

        <Icon
          name="call"
          color={mediumBlue}
          containerStyle={{ marginRight: 10 }}
        />
        <Input
          maxLength={11}
          keyboardType="phone-pad"
          underlineColorAndroid="transparent"
          placeholder="Phone Number..."
          rightIcon={<Icon
            name="contact-phone"
            color={mediumBlue}
            containerStyle={{marginRight: 10}}
            onPress={() => console.log('pressed icon')}
          />}
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

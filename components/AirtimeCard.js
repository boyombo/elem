import React from 'react'
import { View, StyleSheet } from 'react-native'
import { Card, ButtonGroup, Button } from 'react-native-elements'
import { orange, darkBlue, mediumBlue, lightGray, white } from './Colors'
import PhoneInput from './PhoneInput'
import AmountInput from './AmountInput'
import SelectNetwork from './SelectNetwork'

class AirtimeCard extends React.Component {
  constructor (props) {
    super(props)
    this.state = { selectedIndex: 0 }
  }
  render () {
    const buttons = ['Airtime', 'Data']
    const {selectedIndex} = this.state
    return (
      <Card containerStyle={styles.container}>
        <ButtonGroup
          onPress={(sel) => this.setState({selectedIndex: sel})}
          selectedIndex={selectedIndex}
          buttons={buttons}
          selectedButtonStyle={{ backgroundColor: mediumBlue }}
          innerBorderStyle={{ color: darkBlue }}
        />
        <View style={styles.inputs}>
          <SelectNetwork />
          <PhoneInput />
          <AmountInput
            kind = { this.state.selectedIndex === 0 ? 'Airtime' : 'Data' }
          />
        </View>
        <Button
          title="Continue"
          buttonStyle={{ backgroundColor: orange }}
          icon={{
            name: 'check-box',
            color: white
          }}
        >
        </Button>
      </Card>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: lightGray,
    flex: 1,
    elevation: 2,
    borderRadius: 5,
    justifyContent: 'space-around'
  },
  inputs: {
    marginTop: 10,
    marginBottom: 10
  }
})

export default AirtimeCard

import React from 'react';
import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  StatusBar,
} from 'react-native';
import { Button, Input, Icon, Card, Header, Left, Content, Right } from 'react-native-elements';
import { orange, darkBlue, mediumBlue, lightGray, white } from '../components/Colors';
import AmountInput from '../components/AmountInput'
import NairaText from '../components/NairaText'

export default class WalletScreen extends React.Component {
    static navigationOptions = ({navigation}) =>  {
        return {
            title: 'Wallet',
            headerStyle: {
                backgroundColor: mediumBlue,
            },
            headerTintColor: white,
        }
    }


  render() {
    return (
      <View style={styles.container}>
          <View style={{alignItems: "center" }}>
              <Icon name="account-balance-wallet" color={mediumBlue} size={90} />
              <Text>Wallet Balance</Text>
              <NairaText h2 text="0" />
            </View>
              <Card style={{ alignItems: "center" }}>
                <Input
                  maxLength={4}
                  keyboardType="numeric"
                  underlineColorAndroid="transparent"
                  placeholder='Amount'
                  iconLeft={{
                    name: 'currency-ngn',
                    type: 'material-community'
                  }}
                />
                <Button
                  title="Make Payment"
                  buttonStyle={{ backgroundColor: orange }}
                  icon={{
                    name: 'check-box',
                    color: white
                  }}
                  />
              </Card>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: lightGray,
    flex: 1,
    justifyContent: 'center'
  },
  card: {
    borderRadius: 5,
    elevation: 2,
  }
});

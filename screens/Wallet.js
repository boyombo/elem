import React from "react";
import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  AsyncStorage,
  TouchableOpacity,
  View,
  StatusBar
} from "react-native";
import {
  Button,
  Input,
  Icon,
  Card,
  Header,
  Left,
  Content,
  Right
} from "react-native-elements";
import {
  orange,
  darkBlue,
  mediumBlue,
  lightGray,
  white
} from "../components/Colors";
import NairaText from "../components/NairaText";
import ScreenHeader from "../components/Header";
import { connect } from "react-redux";

export class WalletScreen extends React.Component {
  static navigationOptions = ({ navigation }) => {
    return {
      header: null
    };
  };

  _goBack = () => {
    this.props.navigation.goBack();
  };

  render() {
    let balance = this.props.accountBalance.toFixed(0);
    return (
      <View style={styles.container}>
        <ScreenHeader title="Wallet" backMethod={this._goBack} />

        <View style={{ alignItems: "center" }}>
          <Icon name="account-balance-wallet" color={mediumBlue} size={90} />
          <Text>Wallet Balance</Text>
          <NairaText h2 text={balance} />
        </View>
        <Card style={{ alignItems: "center", justifyContent: "space-around" }}>
          <Input
            maxLength={4}
            keyboardType="numeric"
            underlineColorAndroid="transparent"
            placeholder="Amount"
            iconLeft={{
              name: "currency-ngn",
              type: "material-community"
            }}
          />
          <Button
            title="Make Payment"
            buttonStyle={{ backgroundColor: orange }}
            icon={{
              name: "check-box",
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
    flex: 1
  },
  card: {
    borderRadius: 5,
    elevation: 2
  }
});

const mapStateToProps = state => {
  return {
    accountBalance: state.walletReducer.walletInfo.balance
  };
};

export default connect(mapStateToProps)(WalletScreen);

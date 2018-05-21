import React from "react";
import { View, StyleSheet } from "react-native";
import { Input, Text, Icon } from "react-native-elements";
import { darkGray, darkBlue, mediumBlue, lightGray, white } from "./Colors";

export default class AmountInput extends React.Component {
  _onPress = () => {
    this.props.onPressData();
  };

  render() {
    let kind = this.props.kind;
    if (kind === "Airtime") {
      return (
        <View style={styles.container}>
          <Icon
            name="currency-ngn"
            type="material-community"
            color={mediumBlue}
            containerStyle={{ marginRight: 10 }}
          />
          <Input
            maxLength={4}
            keyboardType="numeric"
            underlineColorAndroid="transparent"
            placeholder={"Amount of Airtime"}
          />
        </View>
      );
    } else {
      return (
        <View style={styles.container}>
          <Icon
            name="currency-ngn"
            type="material-community"
            color={mediumBlue}
            containerStyle={{ marginRight: 10 }}
          />
          <Input
            maxLength={4}
            keyboardType="numeric"
            underlineColorAndroid="transparent"
            placeholder={"Amount of Data"}
            rightIcon={
              <Icon
                name="list"
                color={mediumBlue}
                containerStyle={{ marginRight: 10 }}
                onPress={this._onPress}
              />
            }
          />
        </View>
      );
    }
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
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
});

import React from "react";
import { View, StyleSheet, Alert, ActivityIndicator } from "react-native";
import { Card, Text, Button, Icon, Input } from "react-native-elements";
import {
  orange,
  darkBlue,
  mediumBlue,
  lightGray,
  white
} from "../constants/Colors";
import SelectNetwork from "./SelectNetwork";

class AirtimeCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = { phoneNumber: "" };
  }

  _formatDataPlan = () => {
    const { dataPlan } = this.props;
    if (!dataPlan) {
      return "Select Data Plan";
    } else {
      return (
        dataPlan.product_id.split("-").reverse()[0] +
        "(N " +
        dataPlan.denomination +
        ")"
      );
    }
  };

  _gotoData = () => {
    if (this.state.phoneNumber.length != 11) {
      Alert.alert("Invalid Number!", "The phone number you entered is invalid");
      return;
    }
    this.props.onPressData(this.state.phoneNumber);
  };

  buy = () => {
    if (
      this.state.phoneNumber.length !== 11 ||
      this.state.phoneNumber[0] !== "0"
    ) {
      Alert.alert(
        "Invalid number",
        "Please enter a valid 11-digit phone number"
      );
      return;
    }
    const { dataPlan } = this.props;
    if (!dataPlan) {
      Alert.alert("Invalid data plan", "Please select a valid data plan");
      return;
    }

    // All clear?
    this.props.onPurchase(this.state.phoneNumber, dataPlan);
  };

  render() {
    console.log(this.props);
    let { isPurchasing } = this.props;
    if (isPurchasing === true) {
      return (
        <View
          style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
        >
          <ActivityIndicator />
          <Text h5>Purchasing. Please wait a bit...</Text>
        </View>
      );
    }
    return (
      <Card containerStyle={styles.container}>
        <View style={styles.inputs}>
          <SelectNetwork />
          <View style={styles.phone}>
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
              onChangeText={phoneNumber => this.setState({ phoneNumber })}
              rightIcon={
                <Icon
                  name="contact-phone"
                  color={mediumBlue}
                  containerStyle={{ marginRight: 10 }}
                  onPress={() =>
                    console.log("phone number: " + this.state.phoneNumber)
                  }
                />
              }
            />
          </View>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
              margin: 5
            }}
          >
            <Icon
              name="currency-ngn"
              type="material-community"
              color={mediumBlue}
              containerStyle={{ marginRight: 10 }}
            />
            <Button
              clear
              title={this._formatDataPlan()}
              titleStyle={{ color: mediumBlue }}
              icon={{ name: "list", color: mediumBlue }}
              iconRight={true}
              onPress={this._gotoData}
              buttonStyle={{
                marginBottom: 5,
                borderColor: "black"
              }}
            />
          </View>
        </View>
        <Button
          title="Buy "
          buttonStyle={{ backgroundColor: orange }}
          icon={{
            name: "check-box",
            color: white
          }}
          onPress={this.buy}
        />
      </Card>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: lightGray,
    flex: 1,
    elevation: 2,
    borderRadius: 5,
    justifyContent: "space-around"
  },
  inputs: {
    marginTop: 10,
    marginBottom: 10
  },
  phone: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    margin: 5
  }
});

export default AirtimeCard;

import React, { Component } from "react";
import { Image, View, StyleSheet } from "react-native";
import { Button, Input, Card, Text, Icon } from "react-native-elements";
import ScreenHeader from "../components/Header";

import {
  darkBlue,
  orange,
  mediumBlue,
  lightGray,
  white
} from "../components/Colors";

export default class ProfileEditScreen extends Component {
  static navigationOptions = ({ navigation }) => {
    return {
      header: null
    };
  };

  _goBack = () => {
    this.props.navigation.goBack();
  };

  render() {
    return (
      <View style={styles.container}>
        <ScreenHeader title="Edit Profile" backMethod={this._goBack} />

        <View style={{ flex: 1 }}>
          <Image
            source={require("../assets/images/background.jpg")}
            style={{ flex: 1, height: 50, width: "100%" }}
          />
        </View>
        <View style={{ flex: 3 }}>
          <Card style={styles.inputs}>
            <Input
              placeholder="Name"
              leftIcon={<Icon name="person" color={mediumBlue} />}
            />
            <Input
              placeholder="Phone"
              leftIcon={<Icon name="call" color={mediumBlue} />}
            />
            <Input
              placeholder="Email"
              leftIcon={<Icon name="email" color={mediumBlue} />}
            />
            <Button
              title="Save"
              buttonStyle={{ backgroundColor: orange }}
              icon={{
                name: "save",
                color: white
              }}
            />
          </Card>
        </View>
      </View>
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
  }
});

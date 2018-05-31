import React, { Component } from "react";
import {
  ImageBackground,
  StyleSheet,
  View,
  ActivityIndicator,
  AsyncStorage,
  Alert
} from "react-native";
import { Card, Button, Input, Avatar, Text } from "react-native-elements";
import {
  orange,
  darkBlue,
  darkGray,
  mediumBlue,
  white,
  lightGray
} from "../constants/Colors";
import { LOGIN_URL } from "../data/config";

export default class LoginScreen extends Component {
  constructor(props) {
    super(props);
    this.state = { isLoading: false, userName: "", password: "" };
  }

  static navigationOptions = ({ navigation }) => {
    return {
      header: null
    };
  };

  componentDidMount() {
    console.log("loaded login screen");
  }

  render() {
    if (this.state.isLoading == true) {
      return (
        <View
          style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
        >
          <ActivityIndicator />
          <Text h5>Please wait a bit...</Text>
        </View>
      );
    }

    return (
      <View style={styles.container}>
        <Card style={{ alignItems: "center", opacity: 0.7 }}>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "center"
            }}
          >
            <Avatar
              size="large"
              rounded
              icon={{
                name: "phone-android",
                color: white
              }}
              overlayContainerStyle={{ backgroundColor: mediumBlue }}
            />
          </View>
          <View
            style={{
              alignContent: "flex-end",
              justifyContent: "flex-end",
              marginTop: 20,
              marginBottom: 20
            }}
          >
            <Input
              containerStyle={{ alignSelf: "center", margin: 10 }}
              underlineColorAndroid="transparent"
              placeholder="Email"
              onChangeText={userName => this.setState({ userName })}
              leftIcon={{
                name: "mail",
                color: mediumBlue
              }}
            />
            <Input
              containerStyle={{ alignSelf: "center", margin: 10 }}
              underlineColorAndroid="transparent"
              placeholder="Password"
              onChangeText={password => this.setState({ password })}
              secureTextEntry={true}
              leftIcon={{
                name: "lock",
                color: mediumBlue
              }}
            />
          </View>
          <View style={{ margin: 10 }}>
            <Button
              buttonStyle={{ backgroundColor: mediumBlue }}
              title="Login! "
              onPress={this._signInAsync}
            />
          </View>
          <View style={{ margin: 10 }}>
            <Button
              outline
              buttonStyle={{ backgroundColor: darkGray }}
              title="New? Register! "
              onPress={this._register}
            />
          </View>
        </Card>
      </View>
    );
  }

  _signInAsync = async () => {
    //await AsyncStorage.setItem("userToken", "abc");
    //this.props.navigation.navigate("App");
    this.setState({ isLoading: true });
    // let url = BASE_URL + "/get-token/";
    let url = LOGIN_URL;
    fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        username: this.state.userName,
        password: this.state.password
      })
    })
      .then(response => response.json())
      .then(responseJson => {
        console.log(responseJson);
        let token = responseJson.token;
        let expires = responseJson.expires;
        if (!token) {
          console.error("Invalid credentials");
        } else {
          this.setState({ isLoading: false });
          AsyncStorage.setItem("token", token);
          AsyncStorage.setItem("expiry", expires);
          this.props.navigation.navigate("Main");
        }
      })
      .catch(error => {
        console.error(error);
        this.setState({ isLoading: false });
        Alert.alert("Invalid credentials");
      });

    console.log(this.state);
  };

  _register = () => {
    this.props.navigation.navigate("SignUp");
  };
}

styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "transparent",
    justifyContent: "center"
  }
});

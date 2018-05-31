import React, { Component } from "react";
import {
  ImageBackground,
  StyleSheet,
  KeyboardAvoidingView,
  View,
  Text,
  AsyncStorage,
  ActivityIndicator,
  Alert
} from "react-native";
import { Card, Button, Input, Avatar } from "react-native-elements";
import {
  orange,
  darkBlue,
  darkGray,
  mediumBlue,
  white,
  lightGray
} from "../constants/Colors";
import { BASE_URL } from "../data/config";

export default class SignUpScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: false,
      first_name: "",
      last_name: "",
      email: "",
      phone: "",
      country: "1",
      pwd1: "",
      pwd2: ""
    };
  }

  static navigationOptions = ({ navigation }) => {
    return {
      header: null
    };
  };

  componentDidMount() {
    console.log("loaded signup screen");
  }

  render() {
    if (this.state.isLoading === true) {
      return (
        <View
          style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
        >
          <ActivityIndicator />
          <Text h5>Please hang on a bit...</Text>
        </View>
      );
    }
    return (
      <KeyboardAvoidingView style={styles.container} behavior="padding">
        <Card
          style={{
            alignItems: "center",
            justifyContent: "center",
            backgroundColor: "transparent"
          }}
        >
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
              containerStyle={{ alignSelf: "center" }}
              underlineColorAndroid="transparent"
              placeholder="Email (username)"
              keyboardType="email-address"
              onChangeText={email => this.setState({ email })}
              leftIcon={{
                name: "mail",
                color: mediumBlue
              }}
            />
            <Input
              containerStyle={{ alignSelf: "center" }}
              underlineColorAndroid="transparent"
              placeholder="Phone"
              keyboardType="phone-pad"
              onChangeText={phone => this.setState({ phone })}
              leftIcon={{
                name: "local-phone",
                color: mediumBlue
              }}
            />

            <Text style={{ marginTop: 10 }} />
            <Input
              containerStyle={{
                alignSelf: "center"
              }}
              underlineColorAndroid="transparent"
              secureTextEntry={true}
              placeholder="Password"
              onChangeText={pwd1 => this.setState({ pwd1 })}
              leftIcon={{
                name: "lock",
                color: mediumBlue
              }}
            />
            <Input
              containerStyle={{
                alignSelf: "center"
              }}
              underlineColorAndroid="transparent"
              secureTextEntry={true}
              placeholder="Confirm password"
              onChangeText={pwd2 => this.setState({ pwd2 })}
              leftIcon={{
                name: "lock",
                color: mediumBlue
              }}
            />
          </View>
          <View style={{ margin: 10 }}>
            <Button
              buttonStyle={{ backgroundColor: mediumBlue }}
              title="Sign Up! "
              onPress={this._signUpAsync}
            />
          </View>
          <View style={{ margin: 10 }}>
            <Button
              outline
              buttonStyle={{ backgroundColor: darkGray }}
              title="Have an account? Login! "
              onPress={this._login}
            />
          </View>
        </Card>
      </KeyboardAvoidingView>
    );
  }

  _signUpAsync = async () => {
    console.log(this.state);
    this.setState({ isLoading: true });
    if (this.state.pwd1 != this.state.pwd2) {
      Alert.alert("Please use the same passwords");
      this.setState({ isLoading: false });
      return;
    }
    // Just return till we can wire up registration
    this.props.navigation.navigate("Login");
    return;

    let url = BASE_URL + "/add/";
    fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        user: {
          username: this.state.first_name,
          password: this.state.pwd1,
          first_name: this.state.first_name,
          last_name: this.state.last_name,
          email: this.state.email
        },
        country: this.state.country,
        phone: this.state.phone
      })
    })
      .then(response => response.json())
      .then(responseJson => {
        console.log(responseJson);
        let usr = responseJson.user;
        if (!usr) {
          console.error("Could not create your login, please try later");
          Alert.alert("Could not create your account!");
        } else {
          this.setState({ isLoading: false });
          this.props.navigation.navigate("Login");
        }
      })
      .catch(error => {
        console.error(error);
        this.setState({ isLoading: false });
        Alert.alert("Could not create your login");
      });
  };

  _login = () => {
    this.props.navigation.navigate("Login");
  };

  _valueChanged = language => {
    console.log(language);
  };
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: lightGray,
    justifyContent: "center"
  },
  pickerText: {
    color: darkGray
  }
});

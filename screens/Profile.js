import React, { Component } from "react";
import { ImageBackground, View, StyleSheet } from "react-native";
import { Button, ListItem, Card, Text, Icon } from "react-native-elements";
import { darkBlue, mediumBlue, lightGray, white } from "../components/Colors";
import ScreenHeader from "../components/Header";

export default class ProfileScreen extends Component {
  static navigationOptions = ({ navigation }) => {
    return {
      header: null
    };
  };

  render() {
    return (
      <View style={styles.container}>
        <ScreenHeader title="Profile" />

        <View style={{ flex: 1 }}>
          <ImageBackground
            source={require("../assets/images/background.jpg")}
            style={{
              flex: 1,
              height: "100%",
              width: "100%",
              justifyContent: "center",
              alignItems: "center"
            }}
          >
            <Text h4 style={{ color: white }}>
              Bayo
            </Text>
            <Text h4 style={{ color: white }}>
              bayokrapht@gmail.com
            </Text>
            <Text h5 style={{ color: white }}>
              08033412143
            </Text>
            <Button
              buttonStyle={{
                backgroundColor: "transparent"
              }}
              icon={{ name: "edit", color: white }}
              title="edit"
              onPress={() => this.props.navigation.navigate("EditProfile")}
            />
          </ImageBackground>
        </View>
        <View style={{ flex: 1 }}>
          <ListItem
            key={0}
            title="Transaction History"
            subtitle="View your recent transactions"
            leftIcon={{ name: "timeline", color: mediumBlue }}
            rightIcon={{ name: "chevron-right" }}
            bottomDivider
            onPress={() => this.props.navigation.navigate("Transaction")}
          />
          <ListItem
            key={1}
            title="Wallet"
            subtitle="Deposit into your account"
            leftIcon={{ name: "account-balance-wallet", color: mediumBlue }}
            rightIcon={{ name: "chevron-right" }}
            bottomDivider
            onPress={() => this.props.navigation.navigate("Wallet")}
          />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    justifyContent: "center"
  }
});

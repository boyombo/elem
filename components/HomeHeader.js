import React from "react";
import { View, AsyncStorage, StyleSheet } from "react-native";
import { Text, Icon } from "react-native-elements";

export default class HomeHeader extends React.Component {
  render() {
    const { balance } = this.props;
    const text = balance.toString();
    return (
      <View style={styles.container}>
        <Text style={styles.text}>&#8358; </Text>
        <Text style={styles.amount}>{text}</Text>

        <Icon name="add" color="#fff" style={styles.icon} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center"
  },
  text: {
    backgroundColor: "#004e98",
    paddingLeft: 10,
    paddingRight: 2,
    fontSize: 20,
    color: "#fff"
    // paddingTop: 10,
    // paddingBottom: 10
  },
  amount: {
    backgroundColor: "#004e98",
    paddingRight: 10,
    fontSize: 20,
    color: "#fff"
  },
  icon: {
    // paddingTop: 10,
    // paddingBottom: 10
  }
});

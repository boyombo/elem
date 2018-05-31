import React, { Component } from "react";
import { View, AsyncStorage, StyleSheet } from "react-native";
import { Header, Text, Icon } from "react-native-elements";
import { darkBlue, mediumBlue, lightGray, white } from "../components/Colors";
import { connect } from "react-redux";

export class ScreenHeader extends Component {
  render() {
    return (
      <Header
        backgroundColor={mediumBlue}
        leftComponent={
          this.props.backMethod
            ? {
                icon: "arrow-back",
                color: "#fff",
                onPress: () => this.props.backMethod()
              }
            : null
        }
        centerComponent={{
          text: this.props.title,
          style: { color: "#fff", fontSize: 23, fontWeight: "bold" }
        }}
        rightComponent={
          <View style={styles.container}>
            <Text style={styles.text}>&#8358; </Text>
            <Text style={styles.amount}>
              {this.props.accountBalance.toFixed(0)}
            </Text>

            <Icon name="add" color="#fff" style={styles.icon} />
          </View>
        }
      />
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    elevation: 2,
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

const mapStateToProps = state => {
  return {
    accountBalance: state.walletReducer.walletInfo.balance
  };
};

export default connect(mapStateToProps)(ScreenHeader);

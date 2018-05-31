import React from "react";
import { View, StyleSheet } from "react-native";
import { Text, Avatar } from "react-native-elements";
import { darkBlue, mediumBlue, lightGray } from "../constants/Colors";

export default class AvatarButton extends React.Component {
  render() {
    let icon = this.props.icon || "person";
    let iconColor = this.props.iconColor || mediumBlue;
    let bgColor = this.props.bgColor || lightGray;
    return (
      <View style={styles.container}>
        <Avatar
          rounded
          size="medium"
          icon={{ name: icon, color: iconColor }}
          containerStyle={styles.avatar}
          overlayContainerStyle={{ backgroundColor: bgColor }}
        />
        <Text>{this.props.name}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "column",
    alignItems: "center",
    marginLeft: 5
  },
  avatar: {
    borderColor: mediumBlue,
    // borderColor: '#004e98',
    borderWidth: 1
  },
  icon: {
    backgroundColor: mediumBlue
    // backgroundColor: '#004e98'
  }
});

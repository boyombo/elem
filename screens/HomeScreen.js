import React from "react";
import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  StatusBar
} from "react-native";
import { Card, Header, Left, Content, Right } from "react-native-elements";

import { MonoText } from "../components/StyledText";
import HomeHeader from "../components/HomeHeader";
import AvatarButton from "../components/AvatarButton";
import PhoneInput from "../components/PhoneInput";
import AirtimeCard from "../components/AirtimeCard";
import { darkBlue, mediumBlue, lightGray, white } from "../components/Colors";

export default class HomeScreen extends React.Component {
  static navigationOptions = ({ navigation }) => {
    return {
      title: "Recharge ",
      headerStyle: {
        backgroundColor: mediumBlue
      },
      headerTintColor: white,
      headerRight: <HomeHeader />
    };
  };

  _onPressData = () => {
    this.props.navigation.navigate("Data");
  };

  render() {
    return (
      <View style={styles.container}>
        <ScrollView
          style={styles.container}
          contentContainerStyle={styles.contentContainer}
        >
          <View style={{ flexDirection: "row", flex: 1, marginLeft: 10 }}>
            <AvatarButton name="Me" />
            <AvatarButton name="Wifey" />
            <AvatarButton
              name="add"
              icon="add"
              bgColor={mediumBlue}
              iconColor="#fff"
            />
          </View>
          <View>
            <AirtimeCard onPressData={this._onPressData} />
          </View>
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff"
  },
  header: {
    backgroundColor: mediumBlue,
    marginTop: StatusBar.currentHeight,
    elevation: 2
    //marginTop: 15,
  },
  contentContainer: {
    paddingTop: 30
  },
  tabBarInfoContainer: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    ...Platform.select({
      ios: {
        shadowColor: "black",
        shadowOffset: { height: -3 },
        shadowOpacity: 0.1,
        shadowRadius: 3
      },
      android: {
        elevation: 20
      }
    }),
    alignItems: "center",
    backgroundColor: "#fbfbfb",
    paddingVertical: 20
  }
});

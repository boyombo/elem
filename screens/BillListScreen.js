import React from "react";
import { StatusBar, View, StyleSheet } from "react-native";
import { Header, ListItem } from "react-native-elements";
import HomeHeader from "../components/HomeHeader";
import { darkBlue, mediumBlue, lightGray, white } from "../components/Colors";
import { services } from "../data/BillData";
import ScreenHeader from "../components/Header";

export default class BillListScreen extends React.Component {
  static navigationOptions = ({ navigation }) => {
    return {
      header: null
    };
  };

  render() {
    return (
      <View style={styles.container}>
        <ScreenHeader title="Bill Payment" />
        <View>
          <ListItem
            title="Flights"
            subtitle="Book your flight tickets"
            leftIcon={{ name: "flight-takeoff", color: mediumBlue }}
            rightIcon={{ name: "chevron-right" }}
            onPress={() => this.props.navigation.navigate("Flight")}
            bottomDivider
          />
          {services.map((item, i) => (
            <ListItem
              key={i}
              title={item.title}
              subtitle={item.description}
              leftIcon={{ name: item.icon, color: mediumBlue }}
              rightIcon={{ name: "chevron-right" }}
              bottomDivider
              onPress={() =>
                this.props.navigation.navigate("BillItem", { kind: item.id })
              }
            />
          ))}
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 15,
    backgroundColor: "#fff"
  }
});

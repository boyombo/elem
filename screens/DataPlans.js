import React from "react";
import {
  TouchableOpacity,
  View,
  StatusBar,
  FlatList,
  StyleSheet
} from "react-native";
import { Text, Header, ListItem, Card } from "react-native-elements";
import HomeHeader from "../components/HomeHeader";
import NairaText from "../components/NairaText";
import { darkBlue, mediumBlue, lightGray, white } from "../components/Colors";
import { dataPlanList } from "../data/dataPlans";

class MyListItem extends React.PureComponent {
  _onPress = () => {
    this.props.onPressItem(this.props.item);
  };

  render() {
    let item = this.props.item;
    return (
      <TouchableOpacity onPress={this._onPress}>
        <Card>
          <View style={{ flexDirection: "row" }}>
            <View
              style={{
                alignItems: "center",
                justifyContent: "center",
                marginRight: 20
              }}
            >
              <NairaText text={item.amount} />
            </View>
            <View style={{ flexDirection: "column" }}>
              <Text h4>{item.title}</Text>
              <Text style={{ color: mediumBlue }}>{item.description}</Text>
              <View style={{ flexDirection: "row" }}>
                <Text style={{ fontWeight: "bold" }}>Validity: </Text>
                <Text>{item.validity}</Text>
              </View>
            </View>
          </View>
        </Card>
      </TouchableOpacity>
    );
  }
}

export default class DataPlanScreen extends React.Component {
  static navigationOptions = ({ navigation }) => {
    return {
      title: "Data Plans",
      barStyle: "dark-content",
      headerStyle: {
        backgroundColor: mediumBlue
      },
      headerTintColor: white,
      headerRight: <HomeHeader />
    };
  };

  _onPressItem = id => {
    // updater functions are preferred for transactional updates
    console.log("clicked item " + id);
    this.props.navigation.navigate("Home");
  };

  _keyExtractor = (item, index) => index.toString();

  _renderItem = ({ item }) => (
    <MyListItem id={item.id} onPressItem={this._onPressItem} item={item} />
  );

  render() {
    return (
      <FlatList
        data={dataPlanList}
        keyExtractor={this._keyExtractor}
        renderItem={this._renderItem}
      />
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

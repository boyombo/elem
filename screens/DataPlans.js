import React from "react";
import {
  TouchableOpacity,
  View,
  ActivityIndicator,
  FlatList,
  StyleSheet
} from "react-native";
import { Text, Header, ListItem, Card, Avatar } from "react-native-elements";
import NairaText from "../components/NairaText";
import { darkBlue, mediumBlue, lightGray, white } from "../components/Colors";
import ScreenHeader from "../components/Header";
import { connect } from "react-redux";
import { chooseDataPlan, getDataPlans } from "../actions";

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
              <Avatar
                size="medium"
                rounded
                icon={{ name: "data-usage", color: mediumBlue }}
              />
            </View>
            <View style={{ flexDirection: "column" }}>
              <Text h4>{item.product_id.split("-").reverse()[0]}</Text>
              <View style={{ flexDirection: "row" }}>
                <Text style={{ fontWeight: "bold" }}>Price: </Text>
                <NairaText text={item.denomination} />
              </View>
            </View>
          </View>
        </Card>
      </TouchableOpacity>
    );
  }
}

export class DataPlanScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isLoading: false, dataPlanList: [] };
  }

  static navigationOptions = ({ navigation }) => {
    return {
      header: null
    };
  };

  componentDidMount = () => {
    console.log("mounted data card");
    const phone = this.props.navigation.getParam("phoneNumber");
    this.props.getDataPlans(phone);
    // this._loadState();
  };

  _onPressItem = async product => {
    // updater functions are preferred for transactional updates
    console.log("clicked item " + JSON.stringify(product));
    this.props.chooseDataPlan(product);

    this.props.navigation.navigate("Home", { selectedData: true });
  };

  _goBack = () => {
    this.props.navigation.goBack();
  };

  _keyExtractor = (item, index) => index.toString();

  _renderItem = ({ item }) => (
    <MyListItem id={item.id} onPressItem={this._onPressItem} item={item} />
  );

  render() {
    console.log(this.props);
    console.log(this.props.isFetching);
    if (this.props.isFetching === true) {
      return (
        <View
          style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
        >
          <ActivityIndicator />
          <Text h5>Loading data plans. Please wait a bit...</Text>
        </View>
      );
    }

    return (
      <View>
        <ScreenHeader title="Data Plans" backMethod={this._goBack} />
        <FlatList
          data={this.props.products}
          keyExtractor={this._keyExtractor}
          renderItem={this._renderItem}
        />
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

const mapStateToProps = state => {
  return {
    dataPlan: state.dataPlan,
    products: state.dataReducer.dataPlanList.products,
    isFetching: state.dataReducer.isFetching
  };
};

const mapDispatchToProps = dispatch => {
  return {
    chooseDataPlan: product => dispatch(chooseDataPlan(product)),
    getDataPlans: msisdn => dispatch(getDataPlans(msisdn))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(DataPlanScreen);

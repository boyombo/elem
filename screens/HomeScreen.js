import React from "react";
import {
  Platform,
  ScrollView,
  StyleSheet,
  AsyncStorage,
  ActivityIndicator,
  Text,
  View,
  StatusBar
} from "react-native";
import {
  ButtonGroup,
  Button,
  Card,
  Header,
  Left,
  Content,
  Right
} from "react-native-elements";

import ScreenHeader from "../components/Header";
import AvatarButton from "../components/AvatarButton";
import AirtimeCard from "../components/AirtimeCard";
import DataCard from "../components/DataCard";
import { darkBlue, mediumBlue, lightGray, white } from "../components/Colors";
import { connect } from "react-redux";
import { buyAirtime, buyData, walletUpdate } from "../actions";

export class HomeScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isLoading: false, selectedIndex: 0 };
  }

  componentDidMount = () => {
    console.log("mounted");
    this.props.initializeUser();
  };

  static navigationOptions = ({ navigation }) => {
    return {
      header: null
    };
  };

  _onPressData = phoneNumber => {
    this.props.navigation.navigate("Data", { phoneNumber: phoneNumber });
  };

  render() {
    console.log(this.props);
    const { chosenDataPlan } = this.props;
    const buttons = ["Airtime", "Data"];
    let { selectedIndex } = this.state;
    console.log(selectedIndex);

    if (this.props.isFetching === true) {
      return (
        <View
          style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
        >
          <ActivityIndicator />
          <Text h5>Initializing. Please wait a bit...</Text>
        </View>
      );
    }

    return (
      <View style={styles.container}>
        <ScreenHeader
          title="Recharge"
          accountBalance={this.props.accountBalance}
        />
        <ScrollView
          style={styles.container}
          contentContainerStyle={styles.contentContainer}
        >
          <View
            style={{
              flexDirection: "row",
              flex: 1,
              marginLeft: 10,
              marginBottom: 10
            }}
          >
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
            <ButtonGroup
              onPress={sel => this.setState({ selectedIndex: sel })}
              selectedIndex={selectedIndex}
              buttons={buttons}
              selectedButtonStyle={{ backgroundColor: mediumBlue }}
              innerBorderStyle={{ color: darkBlue }}
            />
            {selectedIndex === 0 ? (
              <AirtimeCard
                onPurchase={this.props.airtimePurchase}
                isPurchasing={this.props.isPurchasing}
              />
            ) : (
              <DataCard
                onPurchase={this.props.dataPurchase}
                dataPlan={chosenDataPlan}
                onPressData={this._onPressData}
                isPurchasing={this.props.isBuyingData}
              />
            )}
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
    elevation: 2,
    ...Platform.select({
      android: {
        marginTop: 20
      }
    })
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

const mapStateToProps = state => {
  console.log(state);
  return {
    chosenDataPlan: state.dataReducer.dataPlan,
    isFetching: state.statusReducer.isFetching,
    isPurchasing: state.airtimeReducer.isFetching,
    isBuyingData: state.buyDataReducer.isFetching,
    accountBalance: state.walletReducer.walletInfo.balance
  };
};

const mapDispatchToProps = dispatch => {
  return {
    initializeUser: () => dispatch(walletUpdate()),
    airtimePurchase: (msisdn, amount) => {
      dispatch(buyAirtime(msisdn, amount));
      dispatch(walletUpdate());
    },
    dataPurchase: (msisdn, dataPlan) => {
      dispatch(buyData(msisdn, dataPlan));
      dispatch(walletUpdate());
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(HomeScreen);

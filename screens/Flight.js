import React from "react";
import { Image, Platform, StyleSheet, View, StatusBar } from "react-native";
import {
  Text,
  Button,
  Input,
  Icon,
  Card,
  Header,
  Left,
  Content,
  Right
} from "react-native-elements";
import {
  orange,
  darkBlue,
  mediumBlue,
  lightGray,
  white
} from "../components/Colors";
import RadioForm, {
  RadioButton,
  RadioButtonInput,
  RadioButtonLabel
} from "react-native-simple-radio-button";
import AmountInput from "../components/AmountInput";
import NairaText from "../components/NairaText";

var radio_props = [
  { label: "Return  ", value: 1 },
  { label: "One-way", value: 0 }
];

export default class FlightScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = { radioValue: 0 };
  }
  static navigationOptions = ({ navigation }) => {
    return {
      title: "Flights ",
      headerStyle: {
        backgroundColor: mediumBlue
      },
      headerTintColor: white
    };
  };

  render() {
    return (
      <View style={styles.container}>
        <Text h5 style={{ alignSelf: "center", color: mediumBlue }}>
          Search for Cheap Flights
        </Text>
        <Card style={{ alignItems: "center" }}>
          <RadioForm
            radio_props={radio_props}
            initial={0}
            formHorizontal={true}
            buttonColor={mediumBlue}
            selectedButtonColor={mediumBlue}
            buttonSize={26}
            labelWrapStyle={{ marginRight: 10 }}
            animation={true}
            onPress={value => {
              this.setState({ radioValue: value });
            }}
          />
          <Input
            underlineColorAndroid="transparent"
            placeholder="From"
            leftIcon={{
              name: "flight-takeoff",
              color: mediumBlue
            }}
          />
          <Input
            underlineColorAndroid="transparent"
            placeholder="To"
            leftIcon={{
              name: "flight-land",
              color: mediumBlue
            }}
          />
          <View style={styles.calendar}>
            <View style={styles.button}>
              <Button
                title="Departure"
                buttonStyle={{ backgroundColor: mediumBlue }}
                icon={{
                  name: "calendar",
                  type: "material-community",
                  color: white
                }}
              />
            </View>
            <View style={styles.button}>
              <Button
                title="Return"
                buttonStyle={{ backgroundColor: mediumBlue }}
                icon={{
                  name: "calendar",
                  type: "material-community",
                  color: white
                }}
              />
            </View>
          </View>
          <Input
            underlineColorAndroid="transparent"
            placeholder="Number of Passengers"
            leftIcon={{
              name: "airline-seat-recline-normal",
              color: mediumBlue
            }}
          />
          <Button
            title="Search"
            buttonStyle={{ backgroundColor: orange }}
            containerStyle={{ marginTop: 10 }}
            icon={{
              name: "search",
              color: white
            }}
          />
        </Card>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: lightGray,
    flex: 1
  },
  card: {
    borderRadius: 5,
    elevation: 2,
    flex: 1,
    justifyContent: "space-between",
    height: "100%"
  },
  calendar: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 10
  },
  button: {
    width: "45%"
  }
});

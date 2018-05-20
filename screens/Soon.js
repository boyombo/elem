import React from 'react';
import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  StatusBar,
} from 'react-native';
import { Button, Input, Icon, Card, Header, Left, Content, Right } from 'react-native-elements';
import { orange, darkBlue, mediumBlue, lightGray, white } from '../components/Colors';

export default class ComingSoonScreen extends React.Component {
    static navigationOptions = ({navigation}) =>  {
        return {
            title: 'Coming Soon',
            headerStyle: {
                backgroundColor: mediumBlue,
            },
            headerTintColor: white,
        }
    }


  render() {
    return (
      <View style={styles.container}>
          <View style={{alignItems: "center" }}>
              <Icon name="train" color={mediumBlue} size={90} />
              <Text h1 color={mediumBlue}>Coming Soon!</Text>
            </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: lightGray,
    flex: 1,
    justifyContent: 'center'
  },
  card: {
    borderRadius: 5,
    elevation: 2,
  }
});

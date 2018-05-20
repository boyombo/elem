import React, { Component } from 'react';
import { Image, View, StyleSheet } from 'react-native';
import { Button, Input, Card, Text, Icon } from 'react-native-elements';
import HomeHeader from '../components/HomeHeader'
import { darkBlue, orange, mediumBlue, lightGray, white } from '../components/Colors'

export default class ProfileEditScreen extends Component {
  static navigationOptions = ({navigation}) => {
    return {
      title: 'Edit Profile',
       headerStyle: {
        backgroundColor: mediumBlue,
      },
      headerTintColor: white,
      headerRight: <HomeHeader/>
    }
  }

  render() {
    return (
        <View style={styles.container}>
            <View style={{flex: 1}}>
              <Image source={require('../assets/images/background.jpg')} style={{flex: 1, height: 50, width: "100%"}}>
              </Image>
          </View>
          <View style={{flex: 3}}>
              <Card style={styles.inputs}>
                  <Input
                      placeholder="Name"
                      leftIcon={
                          <Icon name="person" color={mediumBlue} />
                      }
                  />
                  <Input
                      placeholder="Phone"
                      leftIcon={
                          <Icon name="call" color={mediumBlue} />
                      }
                  />
                  <Input
                      placeholder="Email"
                      leftIcon={
                          <Icon name="email" color={mediumBlue} />
                      }
                  />
                <Button
                  title="Save"
                  buttonStyle={{ backgroundColor: orange }}
                  icon={{
                    name: 'save',
                    color: white
                  }}
                >
                </Button>
              </Card>
          </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: lightGray,
    flex: 1,
    elevation: 2,
    borderRadius: 5,
    justifyContent: 'space-around'
  },
  inputs: {
    marginTop: 10,
    marginBottom: 10
  }
})

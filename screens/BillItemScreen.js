import React from 'react'
import { View, StyleSheet, StatusBar } from 'react-native'
import { Text, Header, Avatar, ListItem } from 'react-native-elements'
import HomeHeader from '../components/HomeHeader'
import { darkBlue, mediumBlue, lightGray, white } from '../components/Colors'
import { services, companies } from '../data/BillData'

export default class BillItemScreen extends React.Component {

    static navigationOptions = ({navigation}) =>  {
        return {
            title: 'Bill Item',
            headerStyle: {
                backgroundColor: mediumBlue,
            },
            headerTintColor: white,
            headerRight: <HomeHeader/>
        }
    }

  render () {
      const { navigation } = this.props;
      const serviceId = navigation.getParam('kind', 1)
      console.log(serviceId)
      const service = services.filter((item) => serviceId === item.id)[0].title
      const companyList = companies.filter((item) => item.service === serviceId)
    return (
      <View style={styles.container}>
          <View flexDirection="row" justifyContent="center">
            <Text
                h4
            >{service}</Text>
          </View>
        <View>
          {
            companyList.map((item, i) => (
              <ListItem
                key={i}
                title={item.name}
                leftAvatar={
                    <Avatar
                        source={{ uri: item.photo }}
                    />}
                rightIcon={{ name: 'chevron-right' }}
                bottomDivider
                onPress={() => this.props.navigation.navigate('Soon')}
              />
            ))
          }
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 15,
    backgroundColor: '#fff'
  },
  header: {
    backgroundColor: mediumBlue,
    marginTop: 10,
    elevation: 2
    // marginTop: 15,
  }
})

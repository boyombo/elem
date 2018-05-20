import React, { Component } from 'react';
import { FlatList, View, StyleSheet } from 'react-native';
import { Button, Divider, Card, Text, Icon } from 'react-native-elements';
import HomeHeader from '../components/HomeHeader';
import NairaText from '../components/NairaText';
import StatusText from '../components/StatusText';
import { darkGray, darkBlue, mediumBlue, lightGray, white } from '../components/Colors'

export default class TransactionScreen extends Component {
  static navigationOptions = ({navigation}) => {
    return {
      title: 'Transactions',
       headerStyle: {
        backgroundColor: mediumBlue,
      },
      headerTintColor: white,
      headerRight: <HomeHeader/>
    }
  }

  render() {
      const list = [
          {
              id: '1',
              transactionType: 'Mobile Recharge',
              date: 'May 08, 02:02 pm',
              phone: '08033412143',
              network: 'MTN',
              amount: '250',
              status: 'Failed'
          },
          {
              id: '2',
              transactionType: 'Mobile Recharge',
              date: 'May 08, 02:02 pm',
              phone: '08033412143',
              network: 'MTN',
              amount: '250',
              status: 'Succeeded'
          },
          {
              id: '3',
              transactionType: 'Mobile Recharge',
              date: 'May 08, 02:02 pm',
              phone: '08033412143',
              network: 'MTN',
              amount: '250',
              status: 'Failed'
          },
          {
              id: '4',
              transactionType: 'Mobile Recharge',
              date: 'May 08, 02:02 pm',
              phone: '08033412143',
              network: 'MTN',
              amount: '250',
              status: 'Failed'
          },
      ]
    return (
        <View style={styles.container}>
            <FlatList
                data={list}
                keyExtractor={(item, index) => item.id}
                renderItem={({item}) =>
                    <Card containerStyle={styles.card}>
                        <View style={{flex: 1, flexDirection: "row", justifyContent:"space-between" }}>
                            <Text style={{color: mediumBlue}}>{item.transactionType}</Text>
                            <Text style={{color: mediumBlue}}>{item.date}</Text>
                        </View>
                        <Divider style={{ backgroundColor: darkGray }}/>
                        <View style={{flex: 1, flexDirection: "row", justifyContent:"space-between" }}>
                          <View style={{ flexDirection: "column" }}>
                            <Text h5>{item.phone}</Text>
                            <Text h6 style={{color: darkGray}}>{item.network}</Text>
                          </View>
                          <View style={{ flexDirection: "column", alignItems: "center" }}>
                            <NairaText h5 text={item.amount} />
                            <View style={{ flexDirection: "row", justifyContent: "flex-start" }}>
                            <StatusText h5 icon={false} />
                            </View>
                          </View>
                        </View>
                        <Divider style={{ backgroundColor: darkGray }}/>
                        <View style={{ justifyContent: 'center', alignItems: 'center', marginTop: 5, marginBottom: 5 }}>
                            <Button
                                clear
                                buttonStyle={{ borderWidth: 0, borderColor: "transparent", backgroundColor: "transparent" }}
                                titleStyle={{ color: mediumBlue }}
                                title="details"
                                icon={{ name: 'list', color: mediumBlue }}
                            />
                        </View>
                        <View style={{ justifyContent: 'flex-end', flexDirection: "row", alignItems: "center" }}>
                          <StatusText h5 icon={true} status={item.status} />
                        </View>
                    </Card>
                }
            />
        </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: lightGray,
    justifyContent: 'center'
  },
  card: {
    backgroundColor: white,
    flex: 1,
    elevation: 2,
    borderRadius: 5,
    justifyContent: 'space-around'
  }
})

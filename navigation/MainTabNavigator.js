import React from 'react'
import { Platform } from 'react-native'
import { Ionicons } from '@expo/vector-icons'
import { createStackNavigator, createBottomTabNavigator } from 'react-navigation'

import TabBarIcon from '../components/TabBarIcon'
import HomeScreen from '../screens/HomeScreen'
import LinksScreen from '../screens/LinksScreen'
import BillListScreen from '../screens/BillListScreen'
import BillItemScreen from '../screens/BillItemScreen'
import ProfileScreen from '../screens/Profile'
import ProfileEditScreen from '../screens/ProfileEdit'
import TransactionScreen from '../screens/Transactions'
import SettingsScreen from '../screens/SettingsScreen'
import WalletScreen from '../screens/Wallet'
import FlightScreen from '../screens/Flight'
import ComingSoonScreen from '../screens/Soon'

const HomeStack = createStackNavigator({
  Home: HomeScreen
})

HomeStack.navigationOptions = {
  tabBarLabel: 'Recharge',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={
        Platform.OS === 'ios'
          ? `ios-refresh-circle${focused ? '' : '-outline'}`
          : `md-refresh${focused ? '' : '-circle'}`
      }
    />
  )
}

const BillStack = createStackNavigator({
  BillList: BillListScreen,
  BillItem: BillItemScreen,
  Flight: FlightScreen,
  Soon: ComingSoonScreen
})

BillStack.navigationOptions = {
  tabBarLabel: 'Bills',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={Platform.OS === 'ios' ? `ios-document${focused ? '' : '-outline'}` : 'md-document'}
    />
  )
}

const ProfileStack = createStackNavigator({
  Profile: ProfileScreen,
  EditProfile: ProfileEditScreen,
  Transaction: TransactionScreen,
  Wallet: WalletScreen,
  Settings: SettingsScreen
})

ProfileStack.navigationOptions = {
  tabBarLabel: 'Profile',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={Platform.OS === 'ios' ? `ios-person${focused ? '' : '-outline'}` : 'md-person'}
    />
  )
}

export default createBottomTabNavigator({
  BillStack,
  ProfileStack,
  HomeStack
})

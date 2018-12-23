import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Icon } from 'native-base';
import StackNavigator from './StackNavigator';
import { ToDoList } from './ToDoList';
import { createAppContainer, createBottomTabNavigator} from 'react-navigation';

const TabNavigator = createBottomTabNavigator({
    ToDoListScreen: {
        screen: StackNavigator,
        navigationOptions: {
            tabBarIcon:({tintColor}) =>{
                    return(<Icon type='MaterialIcons' name='home' style={{ fontSize: 24, color: tintColor }} />);
            },
            title: 'Home'
		}
    },
    SecondTab: {
        screen: ToDoList,
        navigationOptions: {
            tabBarIcon:({tintColor}) =>{
                    return(<Icon type='MaterialIcons' name='home' style={{ fontSize: 24, color: tintColor }} />);
            },
            title: 'Second Tab'
		}
    }
}, {
    initialRouteName: 'ToDoListScreen',
    tabBarOptions :  {
        activeTintColor: '#009688',
        inactiveTintColor: 'gray',
        labelStyle: {
            fontSize: 16,
        },
    }
})

const AppContainer = createAppContainer(TabNavigator);
export default AppContainer;
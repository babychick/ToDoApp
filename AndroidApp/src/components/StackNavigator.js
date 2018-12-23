import React from 'react';
import {
        AsyncStorage,
        FlatList,
        StyleSheet,
        Text,
        View } from 'react-native';
import  { AddTask } from  './AddTask';
import { MainMenu } from './MainMenu';
import { TaskDetail } from './TaskDetail';
import { ToDoList } from './ToDoList';
import { createAppContainer, createStackNavigator } from 'react-navigation';

const StackNavigator = createStackNavigator({
    AddTaskScreen: {
        screen: AddTask,
        navigationOptions: {
            header: null,
        }
    },
    MainMenuScreen: {
        screen: MainMenu,
        navigationOptions: {
            header: null,
        }
    },
    TaskDetailScreen: {
        screen: TaskDetail,
        navigationOptions: {
            header: null
        }
    },
    ToDoListScreen: {
        screen: ToDoList,
        navigationOptions: {
            header: null,
        }
    }
}, {
    initialRouteName: 'MainMenuScreen'
});

const AppContainer = createAppContainer(StackNavigator);
export default AppContainer;
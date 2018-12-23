import React from 'react';
import url from '../../assets/url';
import { Task } from './Task';
import { AppBar } from '../common/AppBar';
import { Alert, FlatList, StyleSheet, Text, View } from 'react-native';

class ToDoList extends React.Component {
    constructor(props) {
        super(props);
        var data = this.props.navigation.state.params.data;
        this.state = {
            todoList: [],
            isReload: true,
            isEmpty: true,
        }
    }

    componentWillMount() {
        fetch( url + '/api/v1/findTasks', {
            method: 'GET',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json'
            },
        })
        .then( data => data.json())
        .then( dataJson => {
            if (dataJson.code === 'success') {
                this.setState({
                    todoList: dataJson.data
                })
            } else {
                console.log('error: ' + dataJson.error);
            }
        })

        if (this.state.todoList.length > 0) {
            this.setState({
                isEmpty: false
            })
        }
    }

    onConfirm = (index) => {
        Alert.alert(
            'Notice',
            'Delete this item?',
            [
                { text: 'NO' },
                {
                    text: 'YES',
                    onPress: () => this.onRemoveItem(index)
                }
            ],
            { cancelable: false}
        )
    }

    onRemoveItem = (index) => {
        var arr = this.state.todoList;
        var empty = false;

        arr.splice(index, 1);

        if (arr.length === 0) {
            arr = [];
            empty = true;
        }

        this.setState({
            isEmpty: empty,
            todoList: arr,
        });
    }

    render() {
        return (
            <View style={styles.container}>
                <AppBar
                    caption='Todo List'
                    actionName='ADD'
                    firstAction={() => this.props.navigation.goBack()}
                    secondAction={() => this.props.navigation.navigate('AddTaskScreen', {data: { itemList: this.state.todoList }})}/>
                {
                    this.state.isReload ?
                        this.state.isEmpty ? 
                            <View style={{ flex: 1, flexDirection: 'row', alignItems: 'center', alignContent: 'center'}}>
                                <Text style={{
                                    flex: 1,
                                    textAlign: 'center',
                                    color: '#00B8D4'}}
                                >No records available</Text>
                            </View> :
                            <View>  
                                <FlatList
                                    data={this.state.todoList}
                                    keyExtractor={(item, index) => index.toString()}
                                    renderItem={({item, index}) =>
                                        <Task
                                            item={item}
                                            index={index}
                                            backgroundColor={ index % 2 === 0 ? '#FFFFFF' : '#EEEEEE'}
                                            onRemoveItem={() => this.onConfirm(index)}
                                            onDetail={() => {this.props.navigation.navigate('TaskDetailScreen', {data: { task: { item, index } }})}}
                                        />
                                    }>
                                </FlatList>    
                            </View> :
                        <View></View>
                }   
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    }
})

export { ToDoList };
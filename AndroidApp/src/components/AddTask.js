import React from 'react';
import {
    Alert,
    StyleSheet,
    Text,
    TextInput,
    TouchableOpacity,
    View } from 'react-native';
import { AppBar } from '../common/AppBar';
import DateTimePicker from 'react-native-modal-datetime-picker';

class AddTask extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            title: '',
            content: '',
            deadline: {
                date: '',
                time: ''
            },
            showDatePicker: false,
            showTimePicker: false
        }
    }

    handleDatePicker = (date) => {

    }

    handleTitleChange = (text) => {
        this.setState({
            title: text
        })
    }

    handleContentChange = (text) => {
        this.setState({
            content: text
        })
    }

    onSave = () => {
        
        console.log('title: ' + this.state.title);
        console.log('content:' + this.state.content);
        if (this.state.title === '' && this.state.content !== '') {
            Alert.alert(
                'Notice',
                'Please input Title'
            )
        } else if ( this.state.title === '' && this.state.content === '') {
            return;
        } else {
            // save the item
            this.props.navigation.navigate('ToDoListScreen', {data : { isReload : true }})
        }
    }

    render() {
        return(
            <View style={styles.container}>
                <AppBar
                    caption='Add new task'
                    actionName='SAVE'
                    firstAction={() => this.props.navigation.goBack()}
                    secondAction={this.onSave}/>
                <View style={{ paddingHorizontal: 16}}>
                    <TextInput
                        placeholder='Your title'
                        placeholderTextColor='#FFB74D'
                        onChangeText={this.handleTitleChange}
                        style={{ borderBottomColor:'#FFA726', borderBottomWidth: 1, fontSize: 22, paddingTop: 16}}/>
                    <View style={{ flexDirection: 'row' }}>
                        <Text style={{ color: '#FF9800', fontSize: 16, fontStyle: 'italic', paddingTop: 16 }}>Deadline</Text>
                        {/* time */}
                        <TouchableOpacity onPress={() => this.setState({ showTimePicker: true })}>
                            <Text style={styles.timeText}>""""""{this.state.deadline.time}""""""</Text>
                        </TouchableOpacity>
                        <DateTimePicker
                            minimumDate={new Date()}
                            isVisible={this.state.showTimePicker}
                            onConfirm={this.handleDatePicker}
                            onCancel={() => this.setState({ showTimePicker: false })}
                            mode='time'
                            datePickerModeAndroid='spinner'
                            locale='af-NA'
                            format='hh:mm'
                        />
                        {/* date */}
                        <TouchableOpacity onPress={() => this.setState({ showDatePicker: true })}>
                            <Text style={styles.timeText}>'''''{this.state.deadline.date}'''''</Text>
                        </TouchableOpacity>
                        <DateTimePicker
                            minimumDate={new Date()}
                            isVisible={this.state.showDatePicker}
                            onConfirm={this.handleDatePicker}
                            onCancel={() => this.setState({ showDatePicker: false })}
                            mode='date'
                            datePickerModeAndroid='spinner'
                            locale='af-NA'
                            format='DD-MM-YYYY'
                        />
                    </View>
                    <TextInput
                        multiline={true}
                        placeholder='Compose your task here'
                        placeholderTextColor='#FFCC80'
                        onChangeText={this.handleContentChange}
                        style={{ fontSize: 16, paddingTop: 8 }}>
                    </TextInput>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    timeText: {
        color: '#FF9800',
        fontSize: 16,
        paddingHorizontal: 16,
        paddingTop: 16
    }
})

export { AddTask };
import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { AppBar } from '../common/AppBar';
import { FloatButton } from '../common/FloatButton';

class TaskDetail extends React.Component {
    constructor(props) {
        super(props);
        var data = this.props.navigation.state.params.data;
        this.state = {
            task: data.task.item,
            index: data.task.index
        }
    }

    onRemoveItem = (index) => {
        
    }

    render() {
        return (
            <View style={styles.container}>
                <AppBar
                    caption='Task Detail'
                    firstAction={() => this.props.navigation.goBack()}/>
                <View style={ styles.content }>
                    <Text style={ styles.text }>Deadline: {this.state.task.deadLine}</Text>
                    <Text style={ styles.text }>Task name: {this.state.task.taskName}</Text>
                    <Text style={ styles.text }>Content:</Text>
                    <Text style={{ marginLeft: 32, paddingTop: 16 }}>{this.state.task.content}</Text>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column'
    },
    appbar: {
        height: 40,
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#00B8D4'
    },
    content: {
        flexDirection: 'column',
        padding: 16
    },
    text: {
        borderBottomWidth: 1,
        borderBottomColor: '#0097A7',
        paddingTop: 8
    }
})

export { TaskDetail };
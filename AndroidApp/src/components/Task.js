import React from 'react';
import { Icon } from 'native-base';
import {
        StyleSheet,
        Text,
        TouchableOpacity,
        View } from 'react-native';

class Task extends React.Component {
    constructor(props) {
        super(props);
    }
    
    render() {
        return (
            <TouchableOpacity
                style={[styles.container, {backgroundColor: [this.props.backgroundColor]}]}
                onPress={this.props.onDetail}>
                <View style={styles.leftBox}>
                    <Text style={{ fontSize: 16}}>{this.props.item.taskName}</Text>
                    <Text style={{ color: '#F57C00', fontSize: 12, fontStyle: 'italic' }}>{this.props.item.deadLine}</Text>
                </View>
                <TouchableOpacity
                    style={styles.rightBox}
                    onPress={this.props.onRemoveItem}>
                    <Icon type='EvilIcons' name='close' style={{ fontSize: 24, color: '#FFB74D'}}/>
                </TouchableOpacity>
            </TouchableOpacity>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        height: 56,
        paddingHorizontal: 16,
        flexDirection: 'row'
    },
    leftBox: {
        paddingTop: 8,
        flex: 12,
        flexDirection: 'column'
    },
    rightBox: {
        paddingTop: 16,
        flex: 1,
        
    }
})

export { Task };
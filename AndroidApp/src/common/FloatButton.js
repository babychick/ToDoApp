import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { Icon } from 'native-base';

class FloatButton extends React.Component {
    render() {
        return (
            <TouchableOpacity style={[this.props.style]} onPress={this.props.onNewTask}>
                <View style={styles.container}>
                    <Icon style={styles.icon} size={24} name='add'></Icon>
                </View>
            </TouchableOpacity>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        width: 56,
        height: 56,
        borderRadius: 28,
        backgroundColor: '#00B8D4',
        alignItems: 'center',
        justifyContent: 'center',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 10 },
        shadowOpacity: 0.5,
        elevation: 1
    },
    icon: {
        color: '#fff'
    }
});

export { FloatButton };
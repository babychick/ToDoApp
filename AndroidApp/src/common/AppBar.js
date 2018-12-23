import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { Icon } from 'native-base';

class AppBar extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <View style={styles.container}>
                <TouchableOpacity
                    style={{ flex: 1, flexDirection: 'row', paddingHorizontal: 16 }}
                    onPress={this.props.firstAction}>
                    <Icon type='MaterialCommunityIcons' name='arrow-left' style={{ color: '#FFFFFF', fontSize: 18 }}></Icon>
                </TouchableOpacity>
                <Text style={[styles.text, { flex: 10}]}>{this.props.caption}</Text>
                <TouchableOpacity
                    onPress={this.props.secondAction}>
                    <Text style={[styles.text, { paddingHorizontal: 16 }]}>{this.props.actionName}</Text>
                </TouchableOpacity>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        height: 48,
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#FF6D00'
    },
    text: {
        fontSize: 18,
        color: '#FFFFFF',
        includeFontPadding: false
    }
})

export { AppBar };
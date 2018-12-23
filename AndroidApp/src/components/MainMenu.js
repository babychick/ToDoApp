import React from 'react';
import { Dimensions, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { Icon } from 'native-base';

class MainMenu extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: null,
            reload: false
        }
    }

    componentWillMount() {

    }

    componentDidMount() {

    }

    render() {
        return (
            <View style={styles.container}>
                <View style={styles.topContainer}>
                    <TouchableOpacity
                        style={styles.leftContainer}
                        onPress={() => this.props.navigation.navigate('ToDoListScreen', { data: { isReload: true }})}>
                        <Icon type='FontAwesome' name='tasks' style={{ fontSize: 32, color: '#EF6C00' }}></Icon>
                        <Text style={styles.itemText}>Your task</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={styles.rightContainer}                 
                        onPress={() => this.props.navigation.navigate('ToDoListScreen')}>
                        <Icon type='Entypo' name='wallet' style={{ fontSize: 32, color: '#EF6C00' }}></Icon>
                        <Text style={styles.itemText}>Your wallet</Text>
                    </TouchableOpacity>
                </View>
                <View>
                    <Text style={styles.myText}>Phi Nguyen</Text>        
                </View>        
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        alignItems: 'center'
    },
    topContainer: {
        flex: 9,
        flexDirection: 'row',
        marginVertical: Dimensions.get('window').height / 2 - 80,
        marginHorizontal: 64
    },
    bottomContainer: {
        flex: 1
    },
    leftContainer: {
        flex: 1,
        borderWidth: 0.5,
        paddingTop: 24,
        marginRight: 24,
        alignItems: 'center',
        borderRadius: 10,
        borderStyle: 'dashed',
        borderColor: '#EF6C00' 
    },
    rightContainer: {
        flex: 1,
        borderWidth: 0.5,
        paddingTop: 24,
        marginLeft: 24,
        alignItems: 'center',
        borderRadius: 10,
        borderStyle: 'dashed',
        borderColor: '#EF6C00'
    },
    myText: {
        width: Dimensions.get('window').width - 16,
        alignContent: 'center',
        marginBottom: 16,
        fontSize: 16,
        borderBottomWidth: 1,
        borderBottomColor: '#E65100',
        textAlign: 'center',
        color: '#E65100',
        paddingBottom: 4
    },
    itemText: {
        color: '#E65100',
        fontSize: 12
    }
})

export { MainMenu };
import React, { Component } from 'react';
import { Text, View } from 'react-native';
import { Button, ThemeProvider, Card } from 'react-native-elements';
export default class Home extends Component {
    render() {
        return (
            <View>
                <Text>
                    Ini Home
                </Text>
                <Button title="Go To List"
                    onPress={() => this.props.navigation.navigate('List')}
                />
            </View>
        );
    };
}
import React, {Component} from 'react';
import { Text, View} from 'react-native';
import { Button, ThemeProvider, Card } from 'react-native-elements';
export default class List extends Component {
    render() {
        return(
            <View>
                <Text>
                    Ini List
                </Text>
                <Button title="Go To Home"
                    onPress={() => this.props.navigation.navigate('Home')}
                />
            </View>
        );
    };
}
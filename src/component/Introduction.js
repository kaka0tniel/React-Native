import React, {Component} from 'react';
import {Text,View, Button } from 'react-native';

export default class Introduction extends Component {
    render() {
        return(
            <View>
                <Button
                title={'Ke Main Halaman'}
                onPress={() => this.props.navigation.navigate('News')}>
                </Button>
            </View>
        );
    };
}

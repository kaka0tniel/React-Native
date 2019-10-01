import React from 'react';
import {StyleSheet, SafeAreaView, FlatList} from 'react-native';
import ListItem, {Separator} from './ListItem';


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
});

export default class testGesture extends React.Component {
    static navigationOptions = {
        title: 'testGesture'
    };
    render() {
        return(
            <SafeAreaView style={styles.container}>
                <FlatList
                data={goods}
                keyExtractor={item => item.id}
                renderItem={({item}) => (
                    <ListItem
                    {...item}
                    onSwipeFromLeft={() => alert('swiped from left')}
                    onRightPress={() => alert('pressed right!')}
                    
                    />
                )}
                ItemSeparatorComponent={() => <Separator/>}
            />
            </SafeAreaView>
        );
    }
}

const goods = [
    {id: '0', text: 'Soap'},
    {id: '1', text: 'Shampoo'},
    {id: '2', text: 'Conditioner'},
    {id: '3', text: 'test4'},
    {id: '4', text: 'test5'},
];
    
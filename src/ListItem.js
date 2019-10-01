import React from 'react';
import { View, Text, StyleSheet, TouchableHighlight } from 'react-native';
// import {GestureHandler} from 'expo-cli';
// const {Swipeable} = GestureHandler;
import Swipeable from 'react-native-gesture-handler/Swipeable';
import { createNativeWrapper, PureNativeButton, RectButton, BaseButton } from 'react-native-gesture-handler';

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fff',
        paddingHorizontal: 10,
        paddingVertical: 20,
    },
    text: {
        color: '#4a4a4a',
        fontSize: 15
    },
    separator: {
        flex: 1,
        height: 1,
        backgroundColor: '#e4e4e4',
        marginLeft: 10,
    },
});

export const Separator = () => <View style={styles.separator} />

// const _onPressButton = () => {
//     alert('You tapped the button!')
// };

// const NotAccessibleButton = () => (
//     <RectButton onPress={_onPressButton}>
//         <Text>Foo</Text>
//     </RectButton>
// );

// // Accessible:
// const AccessibleButton = ({ text }) => (
//     <RectButton onPress={_onPressButton}>
//         <View accessible>
//             <Text>{text}</Text>
//         </View>
//     </RectButton>);

const LeftActions = (progress, dragX) => {
    return (
        <View>
            <Text>
                Add to Chart
            </Text>
        </View>
    );
};
const _onPressButton = () => {
    alert('You tapped the button!')
  };
const ListItem = ({ text, onSwipeFromLeft, onRightPress }) => (
    // <Swipeable
    //     renderLeftActions={LeftActions}
    // >

    <TouchableHighlight  rippleColor={'blue'}  onPress={() => alert('You tapped the ' + text +'!')} style={styles.container}>
        <Text style={styles.text}>{text}</Text>
    </TouchableHighlight >

    // </Swipeable>
);

export default ListItem;
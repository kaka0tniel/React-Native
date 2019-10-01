import React, { Component } from 'react';
import { Text, View, SafeAreaView, ScrollView, StyleSheet, Image } from 'react-native';
import { grey, bold } from 'ansi-colors';
import { Button, ThemeProvider, Card } from 'react-native-elements';
import Icon from 'react-native-vector-icons/dist/EvilIcons';
import Icon2 from 'react-native-vector-icons/dist/Feather';
class Portofolio extends React.Component {
    static navigationOptions = {
        title: 'Portofolio'
    };
    render() {
        return (
            <SafeAreaView style={styles.container}>
                <ScrollView style={styles.baseText}>
                    <Image source={require('../images/foto.jpeg')} style={styles.imageSize} ></Image>
                    <Card>
                        <Text style={{ fontSize: 20, paddingBottom: 15, fontWeight: 'bold' }}>
                            Tentang
                    </Text>
                        <Text>
                            I am passionate about software engineer. I am comfortable working in teams, accept challenge and responsibility, have good communications skills, remain focused and dedicated towards my work and Have ability to learn a new thing quickly.
                    </Text>
                    </Card>
                    <Card>
                        <Text style={{ fontSize: 20, paddingBottom: 15, fontWeight: 'bold' }}>
                            Pendidikan
                    </Text>
                        <Text>
                            Institut Teknologi Del
                    </Text>
                    <Text style={{ fontSize: 12, color: 'grey' }}>
                            A.Md. Kom., Teknik Informatika
                    </Text>
                        <Text style={{ fontSize: 12, color: 'grey', paddingBottom: 10 }}>
                            2015-2018
                    </Text>
                    </Card>
                    <Card>
                        <Text style={{ fontSize: 20, paddingBottom: 15, fontWeight: 'bold' }}>
                            Pengalaman
                    </Text>
                        <Text style={{ fontSize: 17 }}>
                            Back End Developer
                    </Text>
                        <Text style={{ fontSize: 15, color: 'grey' }}>
                            PT. Pegadaian (Persero)
                    </Text>
                        <Text style={{ fontSize: 12, color: 'grey' }}>
                            Sep 2019 - Saat Ini
                    </Text>
                        <Text style={{ fontSize: 12, color: 'grey', paddingBottom: 10 }}>
                            Jakarta
                    </Text>
                        <Text style={{ fontSize: 17 }}>
                            Full Stack Engineer
                    </Text>
                        <Text style={{ fontSize: 15, color: 'grey' }}>
                            PT Danon Digital Nusantara
                    </Text>
                        <Text style={{ fontSize: 12, color: 'grey' }}>
                            Sep 2018 - Agu 2019
                    </Text>
                        <Text style={{ fontSize: 12, color: 'grey', paddingBottom: 10 }}>
                            Jakarta
                    </Text><Text style={{ fontSize: 17 }}>
                            Full Stack Developer
                    </Text>
                        <Text style={{ fontSize: 15, color: 'grey' }}>
                            Aplysit CORP.
                    </Text>
                        <Text style={{ fontSize: 12, color: 'grey' }}>
                            Jun 2018 - Agu 2018
                    </Text>
                        <Text style={{ fontSize: 12, color: 'grey', paddingBottom: 10 }}>
                            Bandung
                    </Text><Text style={{ fontSize: 17 }}>
                            Freelance Web Developer
                    </Text>
                        <Text style={{ fontSize: 15, color: 'grey' }}>
                            Alfa Citra Infotama
                    </Text>
                        <Text style={{ fontSize: 12, color: 'grey' }}>
                            Jul 2017 - Agu 2017
                    </Text>
                        <Text style={{ fontSize: 12, color: 'grey', paddingBottom: 10 }}>
                            Medan
                    </Text>
                    </Card>
                    <Card>
                        <Text style={{ fontSize: 20, paddingBottom: 15, fontWeight: 'bold' }}>
                            Keahlian
                    </Text>
                        <Text>
                            Java
                    </Text>
                        <Text>
                            Node JS
                    </Text>
                        <Text>
                            C#
                    </Text>
                    <Text>
                            Machine Learning
                    </Text>
                    <Text>
                            Angular
                    </Text>
                    <Text>
                            React Native
                    </Text>
                    </Card>
                    <Button title="Go to Home screen"
                        onPress={() => this.props.navigation.navigate('News')}
                    />
                </ScrollView >
            </SafeAreaView>
        );
    }
}
const styles = StyleSheet.create({
    title: {
        fontSize: 19,
        fontWeight: 'bold',
        paddingLeft: 10,
        paddingBottom: 10,
        color: '#21409b'
    },
    imageSize: {
        flexDirection: 'column', alignItems: 'stretch', width: 400, height: 250, justifyContent: 'center',
    },
    container: {
    }, date: {
        fontSize: 10,
        color: 'grey',
        paddingLeft: 10
    },

})
export default Portofolio;
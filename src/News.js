import React, { Component } from 'react';
import { Text, SafeAreaView, ScrollView, StyleSheet, Image } from 'react-native';
import { grey } from 'ansi-colors';
import { Button, ThemeProvider, Card } from 'react-native-elements';
import Icon from 'react-native-vector-icons/dist/EvilIcons';
import api from '../testFrisbee';
// import axiosApi from './testAxios';
import Icon2 from 'react-native-vector-icons/dist/Feather';
class News extends React.Component {
  static navigationOptions = {
    title: 'News'
  };

  render() {
    

    // this is a more complex example using async/await and basic auth
    (async () => {
      // log in to our API with a user/pass
      try {
        // make the request
        
        
        
      } catch (err) {
        console.error(err);
      }
    })();
    let pic = {
      uri: 'https://akcdn.detik.net.id/community/media/visual/2019/09/30/e12df08e-aed4-4909-b208-99a8d1316822_169.jpeg?w=780&q=90'
    };
    let pic2 = {
      uri: 'https://akcdn.detik.net.id/community/media/visual/2019/09/30/044b0668-7ab4-4999-965a-a90f821dd90f.jpeg?a=1'
    };
    return (

      <SafeAreaView style={styles.container}>
        <ScrollView style={styles.baseText}>

          <Button icon={<Icon
            name="navicon"
            size={30}
            color='white'
          />
          }
            title="Menu" />

          <Text style={styles.date}>
            Senin 30 September 2019, 21:59 WIB
  </Text>
          <Text style={styles.title}>
            Aliansi Buruh Aksi Tolak RUU Pertanahan Dekat DPR, Ada Siswa Ikutan
  </Text>
          <Image source={pic} style={styles.imageSize} ></Image>
          <Text style={styles.date}>
            Demonstrasi massa buruh di dekat gedung DPR. (Rahel/detikcom)
  </Text>
          <Text style={{ paddingLeft: 20, paddingBottom: 10, textAlign: 'justify' }}>
            Jakarta - Kelompok massa dari sejumlah aliansi buruh menggelar aksi di dekat Gedung DPR. Mereka menolak RUU Pertanahan yang pembahasannya di-carry over ke DPR periode 2019-2024.
</Text>
          <Text style={{ paddingLeft: 20, paddingBottom: 10 }}>
            Pantauan detikcom, Senin (30/9/2019), massa mulai berkumpul di dekat Halte TransJakarta JCC di dekat gedung DPR, Jalan Gatot Subroto, Jakarta, sekitar pukul 13.20 WIB. Terlihat ada sejumlah pelajar mengenakan seragam sekolah yang ikut di antara massa aksi.
</Text>
          <Text style={{ paddingLeft: 20, paddingBottom: 10 }}>
            Massa aksi terlihat membawa sejumlah poster yang menolak RUU Pertanahan. Mereka juga membawa poster yang menolak upah murah dan tuntutan terkait jaminan sosial.
</Text>
          <Text style={{ paddingLeft: 20, paddingBottom: 10 }}>
            Arus lalu lintas dari Semanggi mengarah ke Slipi macet karena massa aksi menutup sebagian ruas jalan. Polisi terlihat berjaga di sekitar gedung DPR.
</Text>
          <Image source={pic2} style={styles.imageSize}></Image>
          <Text style={{ paddingLeft: 20, paddingBottom: 30 }}>Jalan Gatot Subroto depan gedung DPR RI sendiri terlihat ditutup kawat berduri. Arus lalu lintas di depan gedung DPR pun tak bisa dilintasi kendaraan sehingga dilakukan pengalihan arus ke Jalan Gerbang Pemuda.
                (haf/hri)
</Text>

          <Card
            title='Baca Juga'
            image={require('../images/foto.jpeg')}>
            <Text style={{ marginBottom: 10 }}>
              I am passionate about software engineer. I am comfortable working in...
    </Text>
            <Button onPress={() => this.props.navigation.navigate('Portofolio')}
              icon={<Icon2 name='code' color='#ffffff' />}
              buttonStyle={{ borderRadius: 0, marginLeft: 0, marginRight: 0, marginBottom: 0 }}
              title='VIEW NOW' />
          </Card>

          <Button title="Go to Budaya Page"
                        onPress={() => this.props.navigation.navigate('Budaya')}
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
  }
})
export default News;
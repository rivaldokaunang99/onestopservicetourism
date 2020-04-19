import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  ScrollView,
  Button,
  FlatList,
} from 'react-native';

import Swiper from 'react-native-web-swiper';
import { Video } from 'expo-av';

export default class jendeladunia extends React.Component {
   
  render(){
 
    return (
         <ScrollView>
            <View style={{height: 250}}>
                <Swiper>
                <Image style={styles.avatar} 
                  source={{uri: 'http://fkep.unklab.site/wp-content/uploads/2020/04/Screenshot_20200408-093833_1.jpg'}}/>
                <Image style={styles.avatar}
                  source={{uri: 'http://fkep.unklab.site/wp-content/uploads/2020/04/objek-wisata-baru-di-sulawesi-utara-jendela-dunia-tomohon.jpg'}}/>
                <Image style={styles.avatar}
                  source={{uri: 'http://fkep.unklab.site/wp-content/uploads/2020/04/Screenshot_20200408-093922_1.jpg'}}/>
                <Image style={styles.avatar}
                  source={{uri: 'http://fkep.unklab.site/wp-content/uploads/2020/04/Screenshot_20200408-094033_1.jpg'}}/>
               </Swiper>
             </View>
               
             <View style={styles.postContent}>
              <Text style={styles.postTitle}>
              JENDELA DUNIA TOMOHON
              </Text>

              <Text style={styles.postDescription}>
              Terletak didesa Taratara, Tomohon Barat, Kota Tomohon.
              Jendela dunia Tomohon menawarkan aspek keindahan alam dan tempat foto yang menarik.
              di tempat ini juga terdapat berbagai macam wahana wisata yang disediakan pengelola. 
              Wahana wisata yang ada di tempat wisata Jendela Dunia Tomohon 
              diantaranya spot foto menara Eiffel, patung Liberty, gerbang Fushimi Inari, 
              kincir angin Belanda, bunga sakura, patung Merlion, lukisan 3D, taman hijau,
              selain itu, ditempat wisata ini terdapat sebuah cafe dengan berbagai menu makanan yang tersedia. 
              dan spot Hollywood. Untuk masuk ke tempat wisata ini anda akan dikenakan biaya sebesar Rp.35.000
              </Text>
              
              <Text style={styles.postenglish}>
              Located in the village of Taratara, West Tomohon, Tomohon City.
              Jendela dunia tomohon offers an aspect of natural beauty and an attractive photo place.
              in this place there are also various kinds of tourist rides provided by the manager.
              The rides are in the Tomohon Window World tourist attraction
              including photo spots on the Eiffel tower, the Statue of Liberty, Fushimi Inari gate,
              Dutch windmills, cherry blossoms, Merlion statues, 3D paintings, green gardens,
              in addition, in this tourist place there is a cafe with a variety of food menus available.
              and Hollywood spots. To enter this tourist spot you will be charged Rp.35,000
              </Text>

              <View style={{justifyContent: 'center', alignItems: 'center', padding: 10}}>
              <Video
               source={{ uri: ' http://fkep.unklab.site/wp-content/uploads/2020/03/jendela-dunia.mp4' }}
               useNativeControls
               
               style={{ justifyContent: 'center', alignItems: 'center', width: 320, height: 200}}
                />
              </View>   

             
              
              <View style={styles.headerContent}>
              <TouchableOpacity  onPress={() => this.props.navigation.navigate('jendelamaps')}>
             <Image style={styles.userImage}
                  source={{uri: 'https://www.gstatic.com/images/branding/product/1x/maps_round_512dp.png'}}/>
             </TouchableOpacity>
             <Text style={styles.postDescription}>
              Maps
              </Text>
             </View>
             
              </View>
            </ScrollView>  
    
    );
  }
}



const styles = StyleSheet.create({
 
  headerContent:{
    padding:5,
    alignItems: 'center',
    backgroundColor: "white"
  },
  avatar: {
    width: 360,
    height: 250,
    borderRadius: 3,
    borderWidth: 1,
    borderColor: "black",
    marginBottom:10,
  },
  userImage:{
    height: 100,
    width: 100,
    borderRadius:60,
    alignSelf:'center',
    borderColor:"#DCDCDC",
    borderWidth:3,
  },
  name:{
    fontSize:15,
    color:"#FFFFFF",
    fontWeight:'600',
    
  },
  card:{
    shadowColor: '#00000021',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.20,
    shadowRadius: 7.50,
    elevation: 4,

    marginVertical: 9,
    backgroundColor:"white",
    flexBasis: '33%',
    marginHorizontal: 1,
  },
  postContent: {
    flex: 1,
    padding:30,
    paddingTop: 10,
    margin: 5,
    backgroundColor: "white"
  },
  postTitle:{
    fontSize:26,
    fontWeight:'600',
  },
  postenglish:{
    fontSize:16,
    marginTop:10,
    fontWeight: 'bold'
  },
  postDescription:{
    fontSize:16,
    marginTop:10,
  },
  tags:{
    color: '#00BFFF',
    marginTop:10,
  },
  date:{
    color: '#696969',
    marginTop:10,
  },
  
});
  
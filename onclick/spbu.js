import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  Alert,
  ScrollView,
  FlatList,
  Button
} from 'react-native';

export default class spbu extends Component {

  constructor(props) {
    super(props);
    this.state = {
      data: [
        {id:1, title: "SPBU Pertamina 74.953.13",  onClick: 'spbu1',   image:"https://awsimages.detik.net.id/visual/2015/12/24/c91297ca-c705-4f23-899d-6e8a1c6a5b84_169.jpg?w=650"},
        {id:2, title: "SPBU Pertamina 74.953.20", onClick: 'spbu2',   image:"https://awsimages.detik.net.id/visual/2015/12/24/c91297ca-c705-4f23-899d-6e8a1c6a5b84_169.jpg?w=650"} ,
        {id:3, title: "SPBU Kakaskasen 2", onClick: 'spbu3',   image:"https://awsimages.detik.net.id/visual/2015/12/24/c91297ca-c705-4f23-899d-6e8a1c6a5b84_169.jpg?w=650"} ,
        {id:4, title: "Pertamini Woloan Dua", onClick: 'spbu4',   image:"https://awsimages.detik.net.id/visual/2015/12/24/c91297ca-c705-4f23-899d-6e8a1c6a5b84_169.jpg?w=650"} ,
        {id:5, title: "SPBU Pineleng", onClick: 'spbu5',   image:"https://awsimages.detik.net.id/visual/2015/12/24/c91297ca-c705-4f23-899d-6e8a1c6a5b84_169.jpg?w=650"} ,
        {id:6, title: "SPBU Tondano", onClick: 'spbu6',   image:"https://awsimages.detik.net.id/visual/2015/12/24/c91297ca-c705-4f23-899d-6e8a1c6a5b84_169.jpg?w=650"} ,

      ]
    };
  }

  onPress(item) {
    this.props.navigation.navigate(item.onClick)
  }

  render() {
    return (
      <View style={styles.container}>
        <FlatList style={styles.list}
          data={this.state.data}
          keyExtractor= {(item) => {
            return item.id;
          }}
          ItemSeparatorComponent={() => {
            return (
              <View style={styles.separator}/>
            )
          }}
          renderItem={(post) => {
            const item = post.item;
            return (
              <TouchableOpacity  onPress={() => {this.onPress(item)}}>
                <View style={styles.card}>

                  <Image style={styles.cardImage} source={{uri:item.image}}/>
                  <View style={styles.cardContent}>
                    
                    <View>
                      <Text style={styles.title}>{item.title}</Text>
                    </View>

                  </View>
                </View>
              </TouchableOpacity>
            )
          }}/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container:{
    flex:1,
  
  },
  list: {
    backgroundColor:"#E6E6E6",
  },
  separator: {
    marginTop: 1,
  },
  /******** card **************/
  card:{
    margin: 0,
    borderRadius: 2,
    borderWidth: 1,
    borderColor: "#DCDCDC",
    backgroundColor: "#DCDCDC",
  },
  cardHeader: {
    paddingVertical: 17,
    paddingHorizontal: 16,
    borderTopLeftRadius: 1,
    borderTopRightRadius: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  cardContent: {
    paddingVertical: 12.5,
    paddingHorizontal: 16,
    //overlay efect
    flex: 1,
    height: 200,
    width: null,
    position: 'absolute',
    zIndex: 100,
    left: 0,
    right: 0,
    backgroundColor: 'transparent'
  },
  cardFooter:{
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingTop: 15,
    paddingBottom: 0,
    paddingVertical: 7.5,
    paddingHorizontal: 0
  },
  cardImage:{
    flex: 1,
    height: 150,
    width: null,
  },
  /******** card components **************/
  title:{
    fontSize:22,
    color: 'white',
    marginTop: 10,
    fontWeight:'bold'
  },
  time:{
    fontSize:13,
    color: "#ffffff",
    marginTop: 5
  },
  icon: {
    width:25,
    height:25,
  },
  /******** social bar ******************/
  socialBarContainer: {
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    flexDirection: 'row',
    flex: 1
  },
  socialBarSection: {
    justifyContent: 'flex-start',
    flexDirection: 'row',
    flex: 1,
  },
  socialBarlabel: {
    marginLeft: 8,
    alignSelf: 'flex-start',
    justifyContent: 'center',
    color: "#ffffff",
  },
  socialBarButton:{
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  }
});  
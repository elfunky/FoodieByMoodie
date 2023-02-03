import {StyleSheet, Text, View, Image} from 'react-native';
import React, {useEffect} from 'react';
import Swiper from 'react-native-swiper';
import {colors} from '../global/Styles';
import ButtonComponent from './ButtonComponent';
import RootStore from '../stores/RootStore';

const WalkThrough = ({index, item}) => {
  return (
    <View style={styles.container} key={index}>
      <Image source={{uri: item.imgUrl}} style={styles.image} />
      <Text style={styles.header}>{item.title}</Text>
      <Text style={styles.body}>{item.body}</Text>
    </View>
  );
};

export default WalkThrough;

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    borderRadius: 8,
    width: RootStore.walkThroughStore.itemWidth,
    paddingBottom: 40,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.29,
    shadowRadius: 4.65,
    elevation: 7,
  },
  image: {
    width: RootStore.walkThroughStore.itemWidth,
    height: 300,
  },
  header: {
    color: '#222',
    fontSize: 28,
    fontWeight: 'bold',
    paddingLeft: 20,
    paddingTop: 20,
  },
  body: {
    color: '#222',
    fontSize: 18,
    paddingLeft: 20,
    paddingRight: 20,
  },
});

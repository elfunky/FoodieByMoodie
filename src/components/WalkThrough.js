import {StyleSheet, Text, View, Image} from 'react-native';
import React, {useEffect} from 'react';
import RootStore from '../stores/RootStore';
import {Observer} from 'mobx-react';
import {colors, fontFamily} from '../global/Styles';

const WalkThrough = ({index, item}) => {
  return (
    <Observer>
      {() => (
        <View style={styles.container} key={index}>
          <Image source={item.imgUrl} style={styles.image} />
          <Text style={styles.header}>{item.title}</Text>
        </View>
      )}
    </Observer>
  );
};

export default WalkThrough;

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: RootStore.loginStore.hRem(78),
  },
  image: {
    width: RootStore.loginStore.wRem(390),
    height: RootStore.loginStore.hRem(390),
  },
  header: {
    color: colors.peach,
    fontSize: RootStore.loginStore.fontRem(34),
    lineHeight: RootStore.loginStore.fontRem(42),
    fontFamily: fontFamily.popinsBold,
    paddingTop: RootStore.loginStore.hRem(6),
    textAlign: 'center',
  },
});

// @ts-nocheck
import React from 'react';
import {View, StyleSheet} from 'react-native';
import Carousel, {Pagination} from 'react-native-snap-carousel';
import WalkThrough from './WalkThrough';
import RootStore from '../stores/RootStore';
import {Observer} from 'mobx-react';
import ButtonComponent from './ButtonComponent';
import {colors} from '../global/Styles';

const CarosulCards = () => {
  const [index, setIndex] = React.useState(0);
  const isCarousel = React.useRef(null);

  return (
    <Observer>
      {() => (
        <View>
          <Carousel
            layout="default"
            layoutCardOffset={0}
            ref={isCarousel}
            data={RootStore.walkThroughStore.data}
            renderItem={({item, index}) => {
              return <WalkThrough item={item} index={index} />;
            }}
            sliderWidth={RootStore.walkThroughStore.sliderWidth}
            itemWidth={RootStore.walkThroughStore.itemWidth}
            onSnapToItem={index => setIndex(index)}
            useScrollView={true}
          />
          <Pagination
            containerStyle={{marginTop: RootStore.loginStore.hRem(64)}}
            dotsLength={RootStore.walkThroughStore.data.length}
            activeDotIndex={index}
            carouselRef={isCarousel}
            dotStyle={styles.activeDotStyle}
            inactiveDotStyle={styles.inactiveDotStyle}
            // inactiveDotOpacity={0.4}
            // inactiveDotScale={0.6}
            tappableDots={true}
          />
          <ButtonComponent
            buttonTextColor={colors.white}
            buttonText={'Get started'}
            backGroundColor={colors.lightOrange}
          />
        </View>
      )}
    </Observer>
  );
};

export default CarosulCards;

const styles = StyleSheet.create({
  activeDotStyle: {
    width: 20,
    height: 6,
    borderRadius: 5,
    backgroundColor: colors.clooneyGrey,
  },
  inactiveDotStyle: {
    width: 10,
    height: 6,
    borderRadius: 5,
    backgroundColor: colors.karlGrey,
  },
});

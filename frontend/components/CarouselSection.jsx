import React, { useState, useEffect, useRef } from 'react';
import { View, FlatList, Image, StyleSheet, Dimensions } from 'react-native';

const { width: screenWidth } = Dimensions.get('window');
const carouselWidth = screenWidth * 0.9; // 90% of screen width

const CarouselSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const flatListRef = useRef(null);
  const slides = [
    require('../src/assets/carousel1.jpg'),
    require('../src/assets/carousel2.jpg'),
    require('../src/assets/carousel3.jpg'),
    require('../src/assets/carousel4.jpg'),
  ];

  const nextSlide = () => {
    if (currentIndex < slides.length - 1) {
      flatListRef.current.scrollToIndex({
        index: currentIndex + 1,
        animated: true
      });
    } else {
      flatListRef.current.scrollToIndex({
        index: 0,
        animated: true
      });
    }
  };

  useEffect(() => {
    const timer = setInterval(() => {
      nextSlide();
    }, 3000);
    return () => clearInterval(timer);
  }, [currentIndex]);

  return (
    <View style={styles.wrapper}>
      <View style={styles.carouselContainer}>
        <FlatList
          ref={flatListRef}
          data={slides}
          horizontal
          pagingEnabled
          keyExtractor={(item, index) => index.toString()}
          renderItem={({ item }) => (
            <Image source={item} style={styles.image} />
          )}
          onMomentumScrollEnd={(e) => {
            const contentOffsetX = e.nativeEvent.contentOffset.x;
            const index = Math.floor(contentOffsetX / carouselWidth);
            setCurrentIndex(index);
          }}
          showsHorizontalScrollIndicator={false}
          style={styles.carousel}
          getItemLayout={(data, index) => ({
            length: carouselWidth,
            offset: carouselWidth * index,
            index,
          })}
          initialScrollIndex={0}
          onScrollToIndexFailed={info => {
            const wait = new Promise(resolve => setTimeout(resolve, 500));
            wait.then(() => {
              flatListRef.current?.scrollToIndex({
                index: info.index,
                animated: true
              });
            });
          }}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    alignItems: 'center',
    width: '100%',
  },
  carouselContainer: {
    position: 'relative',
    width: carouselWidth,
    height: 200,
    marginVertical: 20,
    borderRadius: 10,
    overflow: 'hidden',
  },
  image: {
    width: carouselWidth,
    height: '100%',
    resizeMode: 'cover',
  }
});

export default CarouselSection;

import React from 'react';
import { ScrollView, StyleSheet } from 'react-native';
import HeroSection from './HeroSection';
import CarouselSection from './CarouselSection';
import CategoryGrid from './CategorySection';
import MedicineSection from './MedicineSection';

const HomeScreen = ({ navigation }) => {
  return (
    <ScrollView
      style={styles.container}
      showsVerticalScrollIndicator={false}
    >
      <HeroSection navigation={navigation} />
      <CarouselSection />
      <CategoryGrid />
      <MedicineSection navigation={navigation}/>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: 10,
  },
});

export default HomeScreen;

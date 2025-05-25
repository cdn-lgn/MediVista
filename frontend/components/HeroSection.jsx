import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

const HeroSection = ({ navigation }) => {
  return (
    <View style={styles.heroSection}>
      <View style={styles.container}>
        <View style={styles.textContainer}>
          <Text style={styles.heading}>Your Health, Our Priority</Text>
          <Text style={styles.subText}>Your trusted healthcare partner</Text>
          <View style={styles.buttonContainer}>
            <Button title="Shop Now" onPress={() => navigation.navigate('Medicine')} color="#45a049" />
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  heroSection: {
    padding: 16,
  },
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 16,
    marginBottom: 20,
  },
  textContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
  },
  heading: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 8,
    textAlign: 'center',
  },
  subText: {
    fontSize: 16,
    color: '#666',
    marginBottom: 20,
  },
  buttonContainer: {
    marginBottom: 20,
  }
});

export default HeroSection;

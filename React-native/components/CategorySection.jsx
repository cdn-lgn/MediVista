import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

const CategoryBox = ({ label, iconName }) => (
  <View style={styles.box}>
    <Icon name={iconName} size={30} color="white" style={styles.icon} />
    <Text style={styles.boxText}>{label}</Text>
  </View>
);

const CategoryGrid = () => (
  <View style={styles.grid}>
    <CategoryBox label="General Medicine" iconName="medical-services" />
    <CategoryBox label="Dental Care" iconName="masks" />
    <CategoryBox label="Eye Care" iconName="visibility" />
    <CategoryBox label="Heart Care" iconName="favorite" />
  </View>
);

const styles = StyleSheet.create({
  grid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    padding: 16,
    paddingTop: 0,
  },
  box: {
    width: '48%',
    height: 120,
    backgroundColor: '#4CAF50',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 16,
    borderRadius: 10,
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },
  boxText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
  icon: {
    marginBottom: 8,
  },
});

export default CategoryGrid;

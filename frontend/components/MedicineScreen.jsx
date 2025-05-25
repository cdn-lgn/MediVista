import React from 'react';
import { View, Text, StyleSheet, ScrollView, Image } from 'react-native';

const MedicineScreen = ({ route }) => {
  const medicine = route.params?.medicine;

  const additionalInfo = {
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    usage: [
      "Take as directed by your physician",
      "Store in a cool, dry place",
      "Keep away from direct sunlight",
      "Keep out of reach of children"
    ],
    sideEffects: [
      "Drowsiness",
      "Dry mouth",
      "Headache"
    ],
    composition: "Active ingredient: Lorem ipsum 500mg"
  };

  if (medicine) {
    return (
      <ScrollView style={styles.container}>
        <View style={styles.card}>
          <Image
            source={require('../src/assets/medicine.jpg')}
            style={styles.image}
          />
          <Text style={styles.productName}>{medicine.productName}</Text>
          <Text style={styles.company}>{medicine.company}</Text>
          <Text style={styles.price}>₹{medicine.salesPrice}</Text>
          <View style={styles.tagContainer}>
            <Text style={styles.tag}>{medicine.tags}</Text>
          </View>

          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Description</Text>
            <Text style={styles.description}>{additionalInfo.description}</Text>
          </View>

          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Usage</Text>
            {additionalInfo.usage.map((item, index) => (
              <Text key={index} style={styles.listItem}>• {item}</Text>
            ))}
          </View>

          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Side Effects</Text>
            {additionalInfo.sideEffects.map((item, index) => (
              <Text key={index} style={styles.listItem}>• {item}</Text>
            ))}
          </View>

          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Composition</Text>
            <Text style={styles.description}>{additionalInfo.composition}</Text>
          </View>
        </View>
      </ScrollView>
    );
  }

  return (
    <View style={styles.container}>
      <Text>Medicine Screen</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  card: {
    margin: 15,
    padding: 15,
    backgroundColor: '#fff',
    borderRadius: 10,
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },
  productName: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  company: {
    fontSize: 18,
    color: '#666',
    marginBottom: 10,
  },
  price: {
    fontSize: 22,
    color: '#4CAF50',
    fontWeight: 'bold',
    marginBottom: 10,
  },
  tagContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginTop: 5,
  },
  tag: {
    backgroundColor: '#e8f5e9',
    color: '#4CAF50',
    padding: 8,
    borderRadius: 20,
    fontSize: 14,
  },
  image: {
    width: '100%',
    height: 200,
    borderRadius: 10,
    marginBottom: 15,
  },
  section: {
    marginTop: 20,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 8,
  },
  description: {
    fontSize: 16,
    color: '#666',
    lineHeight: 24,
  },
  listItem: {
    fontSize: 16,
    color: '#666',
    marginBottom: 5,
    paddingLeft: 5,
  },
});

export default MedicineScreen;

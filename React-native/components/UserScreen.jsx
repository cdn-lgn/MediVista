import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const UserScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.profileHeader}>
        <Icon name="user-circle" size={100} color="#666" />
        <Text style={styles.userName}>John Doe</Text>
      </View>
      <View style={styles.infoSection}>
        <InfoItem icon="envelope" text="john.doe@example.com" />
        <InfoItem icon="phone" text="+1 234 567 890" />
        <InfoItem icon="map-marker" text="123 Street, City" />
      </View>
    </View>
  );
};

const InfoItem = ({ icon, text }) => (
  <View style={styles.infoItem}>
    <Icon name={icon} size={20} color="#666" />
    <Text style={styles.infoText}>{text}</Text>
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  profileHeader: {
    alignItems: 'center',
    marginVertical: 20,
  },
  userName: {
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: 10,
  },
  infoSection: {
    marginTop: 20,
  },
  infoItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 10,
  },
  infoText: {
    marginLeft: 10,
    fontSize: 16,
  },
});

export default UserScreen;

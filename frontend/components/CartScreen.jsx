import React from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';

const CartScreen = () => {
  const dummyCartItems = [
    { id: '1', name: 'Medicine 1', price: '$10' },
    { id: '2', name: 'Medicine 2', price: '$15' },
    { id: '3', name: 'Medicine 3', price: '$20' },
  ];

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Shopping Cart</Text>
      <FlatList
        data={dummyCartItems}
        keyExtractor={item => item.id}
        renderItem={({item}) => (
          <View style={styles.cartItem}>
            <Text>{item.name}</Text>
            <Text>{item.price}</Text>
          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  cartItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
});

export default CartScreen;

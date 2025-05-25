import React, { useState } from 'react';
import { View, TextInput, StyleSheet, TouchableOpacity } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/FontAwesome';
import HomeScreen from './components/HomeScreen';
import MedicineScreen from './components/MedicineScreen';
import CartScreen from './components/CartScreen';
import UserScreen from './components/UserScreen';
import SearchModal from './components/SearchModal';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const SearchHeader = ({ navigation }) => {
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <View style={styles.searchHeader}>
      <TouchableOpacity
        style={styles.searchInput}
        onPress={() => setModalVisible(true)}
      >
        <Icon name="search" size={20} color="#666" />
        <TextInput
          editable={false}
          placeholder="Search..."
          placeholderTextColor="#666"
          style={styles.searchInputText}
        />
      </TouchableOpacity>
      <SearchModal
        visible={modalVisible}
        onClose={() => setModalVisible(false)}
        navigation={navigation}
      />
    </View>
  );
};

const TabNavigator = ({ navigation }) => (
  <Tab.Navigator
    screenOptions={({ route }) => ({
      headerStyle: {
        backgroundColor: '#fff',
        elevation: 1,
        shadowOpacity: 0.3,
      },
      headerTitle: 'MediVista',
      headerTitleStyle: {
        fontWeight: 'bold',
        fontSize: 22,
        color: '#4CAF50',
      },
      headerTitleAlign: 'left',
      headerRight: () => <SearchHeader navigation={navigation} />,
      tabBarIcon: ({ color, size }) => {
        let iconName;
        if (route.name === 'Home') {
          iconName = 'home';
        } else if (route.name === 'Cart') {
          iconName = 'shopping-cart';
        } else if (route.name === 'User') {
          iconName = 'user';
        }
        return <Icon name={iconName} size={size} color={color} />;
      },
    })}
  >
    <Tab.Screen name="Home" component={HomeScreen} />
    <Tab.Screen name="Cart" component={CartScreen} />
    <Tab.Screen name="User" component={UserScreen} />
  </Tab.Navigator>
);

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="MainTabs"
          component={TabNavigator}
          options={{ headerShown: false }}
        />
        <Stack.Screen name="Medicine" component={MedicineScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  searchHeader: {
    marginRight: 15,
    marginLeft: 20,
    flex: 1,
    maxWidth: 250,
  },
  searchInput: {
    backgroundColor: '#f5f5f5',
    paddingHorizontal: 12,
    paddingVertical: 5, // reduced from 8
    height: 35, // added specific height
    borderRadius: 8,
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#e0e0e0',
  },
  searchInputText: {
    fontSize: 14,
    marginLeft: 8,
    flex: 1,
  }
});

export default App;

import React from 'react';
import AsyncStorage from '@react-native-community/async-storage';

const store = {
  get: async () => {
    const value = await AsyncStorage.getItem(AppStorageName);
    return value ? JSON.parse(value) : {};
  },
  set: async (key, value) => {
    const oldValue = await store.getState();
    const newValue = {...oldValue, [key]: value};
    await AsyncStorage.setItem(AppStorageName, JSON.stringify(newValue));
    return newValue;
  },
};

const AppStorage = React.createContext(store);
const AppStorageName = '@app_storage';

export {store, AppStorage};

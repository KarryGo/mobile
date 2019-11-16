import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import withAuth from '../hocs/withAuth';

const Home = () => (
  <View style={styles.home}>
    <Text>Home Screen</Text>
  </View>
);

const styles = StyleSheet.create({
  home: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default withAuth(Home);

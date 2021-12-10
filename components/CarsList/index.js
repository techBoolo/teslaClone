import React from 'react';
import { View, Text, FlatList } from 'react-native';
import styles from './styles.js';
import cars from './cars.js';
import CarItem  from '../CarItem/';

const CarsList = (props) => {

  return (
    <View style={styles.container}>
      <FlatList 
        data={cars}
        renderItem={({item}) => <CarItem car={item} />}
      />
    </View>
  );
};

export default CarsList;

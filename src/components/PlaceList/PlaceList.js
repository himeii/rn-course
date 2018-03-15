import React from 'react';
import { View, StyleSheet, FlatList } from 'react-native';

import ListItem from '../ListItem/ListItem';

const placesList = props => {
  const placesOutput = props.places.map((place, id) => (
    <ListItem
      key={place}
      placeName={place}
      onItemPressed={() => props.onItemSelected(id)}
    />
  ));
  return (
    <FlatList
      style={styles.listContainer}
      data={props.places}
      renderItem={info => (
        <ListItem
          placeName={info.item.name}
          placeImage={info.item.image}
          onItemPressed={() => props.onItemSelected(info.item.key)}
        />
      )}
    />
  );
};
const styles = StyleSheet.create({
  listContainer: {
    width: '100%',
  },
});

export default placesList;

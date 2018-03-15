import React from 'react';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';
import PlaceInput from './components/PlaceInput/PlaceInput';
import PlaceList from './components/PlaceList/PlaceList';
import placeImage from './assets/screenshot.png';
import PlaceDetails from './components/PlaceDetails/PlaceDetails';

import { connect } from 'react-redux';
import {
  addPlace,
  deletePlace,
  deselectPlace,
  selectPlace,
} from './store/actions/index';

class Content extends React.Component {
  handlePlaces = place => {
    this.props.onAddPlace(place);
    console.log(`Place ${place} added`);
  };

  placeSelectedHandler = key => {
    this.props.onSelectPlace(key);
    console.log('FeelsGoodMan');
  };

  deleteItem = () => {
    this.props.onDeletePlace();
  };

  closeModal = () => {
    this.props.onDeselectPlace();
  };

  render() {
    return (
      <View style={styles.container}>
        <PlaceDetails
          selectedPlace={this.props.selectedPlace}
          deleteItem={this.deleteItem}
          closeModal={this.closeModal}
        />
        <PlaceInput handlePlaces={this.handlePlaces} />
        <PlaceList
          places={this.props.places}
          onItemSelected={this.placeSelectedHandler}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: 20,
  },
});

export default connect(
  state => ({
    places: state.places.places,
    selectedPlace: state.places.selectedPlace,
  }),
  dispatch => ({
    onAddPlace: name => dispatch(addPlace(name)),
    onDeletePlace: () => dispatch(deletePlace()),
    onSelectPlace: key => dispatch(selectPlace(key)),
    onDeselectPlace: () => dispatch(deselectPlace()),
  }),
)(Content);

import React from 'react';
import { View, TextInput, Button, StyleSheet } from 'react-native';

class placeInput extends React.Component {
  state = {
    placeName: '',
  };

  placeNameChangedHandler = val => {
    this.setState({ placeName: val });
  };

  placeSubmitHandler = () => {
    if (this.state.placeName.trim() === '') {
      return;
    }

    this.props.handlePlaces(this.state.placeName);
  };
  render() {
    return (
      <View style={styles.enter_container}>
        <TextInput
          placeholder="Add place"
          onChangeText={this.placeNameChangedHandler}
          value={this.state.placeName}
          style={styles.placeInput}
        />
        <Button
          title="Add"
          onPress={this.placeSubmitHandler}
          style={styles.placeButton}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  enter_container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  placeInput: {
    width: '70%',
    padding: 10,
  },
  placeButton: {
    width: '30%',
  },
});

export default placeInput;

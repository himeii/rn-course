import {
  ADD_PLACE,
  DELETE_PLACE,
  SELECT_PLACE,
  DESELECT_PLACE,
} from '../actions/actionTypes';

const initialState = {
  places: [],
  selectedPlace: null,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_PLACE:
      return {
        ...state,
        places: [
          ...state.places,
          {
            key: Math.random(),
            name: action.payload,
            image: {
              uri:
                'https://images.unsplash.com/photo-1506703150173-721a223a8bd5?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=eaadacb4fc08b43acf9d59466f7b1af5&auto=format&fit=crop&w=634&q=80',
            },
          },
        ],
      };
    case DELETE_PLACE:
      return {
        ...state,
        places: state.places.filter(
          item => item.key !== state.selectedPlace.key,
        ),
        selectedPlace: null,
      };
    case SELECT_PLACE:
      return {
        ...state,
        selectedPlace: state.places.find(place => place.key === action.payload),
      };
    case DESELECT_PLACE:
      return {
        ...state,
        selectedPlace: null,
      };
    default:
      return state;
  }
};

export default reducer;

import {
  ADD_PLACE,
  DELETE_PLACE,
  DESELECT_PLACE,
  SELECT_PLACE,
} from './actionTypes';

export const addPlace = placeName => ({
  type: ADD_PLACE,
  payload: placeName,
});

export const deletePlace = () => ({
  type: DELETE_PLACE,
});

export const selectPlace = key => ({
  type: SELECT_PLACE,
  payload: key,
});

export const deselectPlace = () => ({
  type: DESELECT_PLACE,
});

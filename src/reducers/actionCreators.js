import {
  CHANGE_TITLE,
  CHANGE_CURRENCY,
  CHANGE_WATCHING
} from './actionTypes';

export function changeTitle(text) {
  let action = {
    type: CHANGE_TITLE,
    text
  };
  return function(dispatch) {
    dispatch(action)
  }
}

export function changeCurrency(text) {
  let action = {
    type: CHANGE_CURRENCY,
    text
  };
  return function(dispatch) {
    dispatch(action)
  }
}

export function changeWatching(text) {
  let action = {
    type: CHANGE_WATCHING,
    text
  };
  return function(dispatch) {
    dispatch(action)
  }
}
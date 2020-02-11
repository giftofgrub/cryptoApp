import {
  CHANGE_TITLE,
  CHANGE_CURRENCY,
  CHANGE_WATCHING
} from './actionTypes';

const initialState = {
  title: "FooBar",
  currency: "USD",
  watching: "BTC, ETH, XRP"
}

function reducer(state=initialState, action) {
  console.log(`Reducer Ran`);
  console.log(`STATE: `, state);
  console.log(`ACTION: `, action);

  switch (action.type) {
    case CHANGE_TITLE:
      return {...state, title: action.text}
    case CHANGE_CURRENCY:
      return {...state, currency: action.text}
    case CHANGE_WATCHING:
      return {...state, watching: action.text}
    default:
      return state;
  }
}

export default reducer;
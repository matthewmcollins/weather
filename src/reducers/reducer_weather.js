import { FETCH_WEATHER } from '../actions';

export default function (state = [], action) {
  switch (action.type) {
    case FETCH_WEATHER:
      // append existing state array to a new array with the data
      return [action.payload.data, ...state];
    default:
      break;
  }
  return state;
}

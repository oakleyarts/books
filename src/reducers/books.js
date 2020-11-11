import { GET_BOOKS, GET_BOOKS_ERROR } from '../actions/types';

const initialState = {
  books: [],
  count: 0,
  loading: true
};

export default function (state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case GET_BOOKS:
      return {
        ...state,
        ...payload,
        loading: false
      };
    case GET_BOOKS_ERROR:
      return {
        ...state,
        loading: false
      };
    default:
      return state;
  }
}

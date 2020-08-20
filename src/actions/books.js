import axios from 'axios';
import { GET_BOOKS, GET_BOOKS_ERROR } from './types';

export const getBooks = ({ page, itemsPerPage, filters }) => async (dispatch) => {
  const config = {
    headers: {
      'Content-type': 'application/json'
    }
  };

  const body = JSON.stringify({ page, itemsPerPage, filters });

  try {
    const res = await axios.post('http://nyx.vima.ejkt.gr:3000/api/books', body, config);

    dispatch({
      type: GET_BOOKS,
      payload: res.data
    });
  } catch (err) {
    dispatch({
      type: GET_BOOKS_ERROR
    });
  }
};

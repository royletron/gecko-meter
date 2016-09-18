import axios from 'axios';

export const REQUEST_NEW_WIDGISTER = 'REQUEST_NEW_WIDGISTER';
export function requestNewWidgister () {
  return {
    type: REQUEST_NEW_WIDGISTER
  };
}

export const SUCCESS_NEW_WIDGISTER = 'SUCCESS_NEW_WIDGISTER';
export function successNewWidgister (data) {
  return {
    type: SUCCESS_NEW_WIDGISTER,
    data
  };
}

export const FAILURE_NEW_WIDGISTER = 'FAILURE_NEW_WIDGISTER';
export function failureNewWidgister (error) {
  return {
    type: FAILURE_NEW_WIDGISTER,
    error
  };
}

export function getNewWidgister () {
  return function (dispatch) {
    dispatch(requestNewWidgister());
    axios
      .get('https://widgister.herokuapp.com/challenge/frontend')
      .then(function (result) {
        dispatch(successNewWidgister(result.data));
      })
      .catch(function (error) {
        dispatch(failureNewWidgister(error.message));
      })
  }
}

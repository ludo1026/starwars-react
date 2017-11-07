import * as types from './actionTypes';

function url() {
  return 'https://swapi.co/api/people';
}

export function receivePeople(json) {
  return {type: types.RECEIVE_PEOPLE, peoples: json};
}

export function fetchPeople() {
  return dispatch => {
    return fetch(url(), {
      method: 'GET',/*
      mode: 'cors',
      credentials: 'include',
      headers: {
        'x-api-key': apiKey,
        'Accept': 'application/json'
      }*/
    })
    .then(response => response.json())
    .then(json => dispatch(receivePeople(json)));
  };
}
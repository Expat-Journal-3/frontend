import axios from 'axios';
// thunks

export const FETCH_QUOTE_FAILURE = 'FETCH_QUOTE_FAILURE';

// Redux is synchronous
// we need to perform an async operation
export const fetchSmurf = () => {
  return dispatch => {
    dispatch({ type: 'FETCH_SMURF_START' });
    axios
      .get('http://localhost:')
      .then(res => {
        // res.data.quote
        console.log(res.data)
        dispatch({ type: 'FETCH_SMURF_SUCCESS', payload: res.data });
      })
      .catch(err => {
        // message: err.response.data
        // status: err.response.status
        dispatch({
          type: 'FETCH_SMURF_FAILURE',
          payload: `Error ${err.response.status}: ${err.response.data}`
        });
      });
  };
};

export const newSmurf = state => {
  return {};
};

import { axiosWithAuth } from '../../axiosWithAuth';


export const FETCH_QUOTE_FAILURE = 'FETCH_QUOTE_FAILURE';


export const fetchPosts = () => {
  return dispatch => {
    dispatch({ type: 'FETCH_THIS_START' });
    axiosWithAuth()
      .get('/api/posts')
      .then(res => {
        console.log(res.data)
        dispatch({ type: 'FETCH_THIS_SUCCESS', payload: res.data});
      })
      .catch(err => {
        console.log(err)
        //debugger
        dispatch({
          type: 'FETCH_THIS_FAILURE',
          payload: `Error ${err.response.status}: ${err.response.data}`
        });
      })


  };
};

export const newPost = state => {
  return {};
};
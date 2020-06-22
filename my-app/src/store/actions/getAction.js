import axios from 'axios';


export const FETCH_QUOTE_FAILURE = 'FETCH_QUOTE_FAILURE';


export const fetchPosts = () => {
  return dispatch => {
    dispatch({ type: 'FETCH_THIS_START' });
    axios
      .get('https://bwexpat-journal.herokuapp.com/api/posts')
      .then(res => {
        dispatch({ type: 'FETCH_This_SUCCESS', payload: res.data, name: res.data.photo });
      })
      .catch(err => {
        console.log(err)
        debugger
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
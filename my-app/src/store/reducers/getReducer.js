const initialState = {
    PhotoGridPosts: [],
    isFetching: false,
    error: ''
  };
  
  export const getReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'FETCH_THIS_START':
        return {
          ...state,
          isFetching: true
  
        };
      case 'FETCH_THIS_SUCCESS':
        return {
          ...state,
          
          isFetching: false,
          photo: action.name,
          PhotoGridPosts: action.payload,
          error: ''
        
        };
      case 'FETCH_THIS_FAILURE':
        return {
          ...state,
          isFetching: false,
          error: action.payload
        };
  
      case 'FETCH_THIS_FAILURE':
        return {
          ...state,
          isFetching: false,
          error: action.payload
        };
  
  
      default:
        return state;
    }
  };
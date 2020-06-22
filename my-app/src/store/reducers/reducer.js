const initialState = {
    smurfList: [],
    isFetching: false,
    error: ''
  };
  
  export const smurfReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'FETCH_SMURF_START':
        return {
          ...state,
          isFetching: true
  
        };
      case 'FETCH_SMURF_SUCCESS':
        return {
          ...state,
          isFetching: false,
          smurfList: action.payload,
          error: ''
        };
      case 'FETCH_SMURF_FAILURE':
        return {
          ...state,
          isFetching: false,
          error: action.payload
        };
  
      case 'FETCH_SMURF_FAILURE':
        return {
          ...state,
          isFetching: false,
          error: action.payload
        };
  
  
      default:
        return state;
    }
  };
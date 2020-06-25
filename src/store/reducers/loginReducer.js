import { LOGIN_START, LOGIN_SUCCESS, LOGIN_FAIL } from "../actions/getAction";

const initialState = {
  user: {
    id: "",
    username: "",
    first_name: "",
    last_name: "",
    email: "",
  },
  loading: false,
  error: "",
};

export function loginReducer(state = initialState, action) {
  switch (action.type) {
    case LOGIN_START:
      return {
        ...state,
        loading: true,
      };
    case LOGIN_SUCCESS:
      return {
        ...state,
        username: action.payload.username,
        loading: false,
      };
    case LOGIN_FAIL:
      return {
        ...state,
        errors: action.payload,
      };
    default:
      return state;
  }
}

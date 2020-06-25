import { combineReducers } from "redux";
import { getReducer} from "./getReducer";
import { loginReducer} from "./loginReducer";

export default combineReducers({
  getReducer, loginReducer
});
import { combineReducers} from "redux";
import followersPageReducer from "./followersPageReducer";
import userReducer from "./userReducer";

export default combineReducers({
    followersPage: followersPageReducer,
    userReducer,
});

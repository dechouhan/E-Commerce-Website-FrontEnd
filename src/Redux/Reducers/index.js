import { combineReducers } from "redux";
import Users from "./usersReducer";
import Weather from "./weatherReducer";

const rootReducer = combineReducers({
    Users,
    Weather
})

export default rootReducer;
import { combineReducers } from "redux";
import Products from "./productsReducer";
import Users from "./usersReducer";

const rootReducer = combineReducers({
    Users,
    Products,
})

export default rootReducer;
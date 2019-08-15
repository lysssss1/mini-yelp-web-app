import { combineReducers } from "redux";
import home from "./home";
import detail from "./detail";
import app from "./app";
import entities from "./entities";

const rootReducer = combineReducers({
   entities,
   home,
   detail,
   app
})

export default rootReducer;
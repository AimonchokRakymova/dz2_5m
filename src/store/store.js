import {createStore} from "redux";
import usersReducer from "../redux/usersReducer";
export const store = createStore(usersReducer)
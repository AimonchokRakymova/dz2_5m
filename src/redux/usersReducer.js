import {types} from "./action";

const initialState = {
    users: []
}

export default function usersReducer(state = initialState, action){
    switch (action.type){
        case types.ADD_USERS:
            return{
                ...state,
                users: [...state.users, action.payload]
            }
        default:
            return state
    }
}
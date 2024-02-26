export const types = {
    ADD_USERS: 'ADD_USERS',
}
export function addUser(user){
    return{
        type: types.ADD_USERS,
        payload:user
    }
}
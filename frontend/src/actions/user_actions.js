import * as APIUtil from "../util/user_api_util";

export const RECEIVE_USER = "RECEIVE_USER";


const receiveUser = user => {
    return {
        type: RECEIVE_USER,
        user
    }
};

// export const fetchUser = userId => dispatch => {
//     return APIUtil.fetchUser(userId)
//         .then((user) => dispatch(receiveUser(user)))
// }

export const fetchUser = () => dispatch => {
    return APIUtil.fetchUser()
        .then((user) => dispatch(receiveUser(user)))
}

export const createInterest = data => dispatch => {
    return APIUtil.createInterest(data)
        .then((user) => dispatch(receiveUser(user)))
};

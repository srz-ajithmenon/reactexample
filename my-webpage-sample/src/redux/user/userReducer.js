const initialState = {
    user : []
}

const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'GET_USER_INFO_SUCCESS' : return {
            ...state,
            user: action.userInfo
        }

        case 'POST_USER_INFO_SUCCESS': return{
            ...state,
            user:[...state.user, action.userInfo]

        }

        default : return state
    }
}

export default userReducer
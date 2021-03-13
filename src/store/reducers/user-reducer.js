const initialState = {
  users: [],
  loading: true
}

export default function userReducer(state=initialState, action) {
  switch (action.type) {
        case "ADD_USER":
            return {...state, users: state.users.concat(action.payload)}
        case "GET_USERS": 
            return {...state, users: action.payload}
        case "CHANGE_LOADING_STATUS":
            return {...state, loading: action.payload}
        default:
            return state
  }
}
import * as TYPES from './types'

const initialState = {
    user: null,
    isLoggedIn: false
}

const usersReducer = (state = initialState, action) =>{
    const {type,payload} = action;
    switch(type){
      case TYPES.SET_USER: 
        return{
          ...state,
          user: payload.user,
          isLoggedIn: true
        }
      case TYPES.EXIT_USER:
        return{
          ...state,
          user: null,
          isLoggedIn: false
        }    
      case TYPES.CHANGE_DATA:
        return {
          ...state,
          user: payload.user
        }
      case TYPES.DELETE_USER:
        return {
          ...state,
          user: null,
          isLoggedIn: false
        }
      default:
            return {...state};
    }
}

export default usersReducer;
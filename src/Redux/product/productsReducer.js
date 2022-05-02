import * as TYPES from "./types"

const initialState = {
    products:[]
}

const productsReducer = (state = initialState, action) => {
    const {type,payload} = action;
    switch(type){
      case TYPES.GET_PRODUCTS:
          return {
            ...state,
            products: payload.products
          }
        default:
            return {...state}
    }
}

export default productsReducer;
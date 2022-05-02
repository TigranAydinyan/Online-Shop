import * as TYPES from "./types";

const initialState = {
    productAdd : [
    
]
};

const addedProducts = (state = initialState, action) => {
    const {type,payload} = action;
    switch(type){
        case TYPES.ADD_TO_CARD:
            return {...state,
                productAdd: [...state.productAdd, payload]
            }
        case TYPES.DEL_TO_CARD:
            return {...state,
                productAdd: [...state.productAdd.filter(v => v.id !== payload)]
            }
        default:
            return{...state}
    }
}

export default addedProducts;
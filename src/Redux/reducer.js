import {combineReducers} from "redux";
import addedProducts from "./addedProducts/addedProducts";
import usersReducer from "./users/usersReducer";
import productsReducer from "./product/productsReducer";
import cardsReducer from "./cards/cardsReducer";

const rootReducer = combineReducers({
    addedProducts,
    usersReducer,
    productsReducer,
    cardsReducer
})

export default rootReducer;
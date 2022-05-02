import * as TYPES from "./types";

export const addProduct = (payload) => ({
    type: TYPES.ADD_TO_CARD,
    payload: payload
})

export const deleteProduct = (id) => ({
    type: TYPES.DEL_TO_CARD,
    payload: id
})
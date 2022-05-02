import * as TYPES from "./types";

const initialState = {
    cards: []
}

const cardsReducer = (state = initialState,action) => {
    const {type,payload} = action;
    switch(type){
        case TYPES.ADD_CARD:
            return {
                ...state,
                cards: [
                    ...state.cards,
                    payload.product
                ]
            }
        case TYPES.GET_ALL_CARDS:
            return {
                ...state,
                cards: payload.cards
            }
        case TYPES.DELETE_CARD:
            return {
                ...state,
                cards: state.cards.filter(card => card.id !== payload.id)
            }
        case TYPES.EXIT_CARDS:
            return{
                ...state,
                cards: []
            }
        default:
            return {...state}
    }
}

export default cardsReducer;
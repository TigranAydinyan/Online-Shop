import * as TYPES from "./types";
const baseURL = process.env.REACT_APP_BASE_URL
const setCard = (product) => ({type:TYPES.ADD_CARD,payload:{product}})
const setAllCards = (cards) => ({type:TYPES.GET_ALL_CARDS,payload:{cards}})
const deleteCard = (id) => ({type:TYPES.DELETE_CARD,payload: {id}})
export const exitCards = () => ({type:TYPES.EXIT_CARDS})

export const addCard = (product) => (dispatch) => {
    fetch(`${baseURL}/card`, {
        method: 'POST',
        body: product,
        headers:{
            'Content-type': 'application/json'
        }
    }).then(response => response.json())
    .then(result => dispatch(setCard(result)))
}

export const getCards = (userId) => (dispatch) => {
    fetch(`${baseURL}/card?userId=${userId}`)
    .then(response => response.json())
    .then(result => dispatch(setAllCards(result)))
}

export const deleteCardProduct = (id) => (dispatch) => {
    fetch(`${baseURL}/card/${id}`,{
        method: "DELETE"
    }).then(response => response.json())
    .then(result => dispatch(deleteCard(id)))
}


import * as TYPES from "./types";

const setProducts = (products) => ({type:TYPES.GET_PRODUCTS, payload: {products}})

export const getProducts = (category) => (dispatch) => {
    fetch(`http://localhost:5000/product${category === 'all' ? '' : '?categorie=' + category}`, )
    .then(response => response.json())
    .then(products => dispatch(setProducts(products)))
}

// export const deleteProduct = (id) => (dispatch) => {
//     fetch(`http://localhost:5000/product/${id}`, {
//         method: 'DELETE'
//     } )
//     .then(response => response.json())
//     .then(products => dispatch(setProducts(products)))
// }
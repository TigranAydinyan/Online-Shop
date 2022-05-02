import * as TYPES from './types'
const setUser = (user) => ({type: TYPES.SET_USER, payload: {user}})
export const exitUser = (user) => ({type: TYPES.EXIT_USER,payload: {user:null,isLoggedIn:false}});
const changeData = (user) => ({type:TYPES.CHANGE_DATA, payload: {user}});
const deleteUser = (id) => ({type: TYPES.DELETE_USER, payload: {id}})

const baseURL = process.env.REACT_APP_BASE_URL;
export const signup = (data) => (dispatch) => {
    fetch(`${baseURL}/users`, {
        method: 'POST',
        body: data,
        headers:{
            'Content-type': 'application/json'
        }
    }).then(response => response.json())
        .then(data => {
            dispatch(setUser(data))
            localStorage.setItem('email', data.email)
        })
}


export const signin = (email,password) => async (dispatch) => {
    return fetch(`${baseURL}/users`)
    .then(response => response.json())
    .then(users => {
        const user = users.find(user => user.email === email && user.password === password);
        if(!user) throw new Error("Can't find user") 
            dispatch(setUser(user));
            localStorage.setItem('email',user.email)
        
    })
}

export const getUser = (email) => (dispatch) => {
    fetch(`${baseURL}/users?email=${email}`)
    .then(response => response.json())
    .then(result => dispatch(setUser(result[0])))
}

export const changeUserData = (user,id) => (dispatch) => {
    fetch(`${baseURL}/users/${id}`, {
        method: 'PUT',
        body: JSON.stringify(user),
        headers: {
            'Content-type': 'application/json'
        }
    })
    .then(response => response.json())
    .then(result => {
        dispatch(changeData(result));
        localStorage.setItem('email', result.email)
    })
}

export const deleteUserData = (id) => (dispatch) => {
    fetch(`${baseURL}/users/${id}`,{
        method: "DELETE"
    }).then(response => response.json())
    .then(result => {
        dispatch(deleteUser(id));
        localStorage.removeItem('email')
    })
}
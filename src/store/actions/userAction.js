import axios from 'axios'
const url = 'https://sproutest.herokuapp.com'

function addUser(payload) {
  return function (dispatch) {
    dispatch({
      type: "ADD_USER",
      payload
    })
  }
}

function getUsers(payload) {
  return function (dispatch) {
    dispatch({
      type: "GET_USERS",
      payload
    })
  }
}

function loadingStatus(payload) {
  return function (dispatch) {
    dispatch({
      type: "CHANGE_LOADING_STATUS",
      payload
    })
  }
}

export function findUsers() {
  return function (dispatch){
      axios({
        method: 'GET',
        url: url,
        headers: {
          access_token: localStorage.access_token
        }
      })
      .then(response => {
        dispatch(loadingStatus(false))
        dispatch(getUsers(response.data))
      })
      .catch(err => {
        console.log(err);
      })
  }
}

export function signUp(payload) {
  let newUser = {
    name: payload.name,
    email: payload.email,
    phoneNumber: payload.phoneNumber,
    password: payload.password

  }
  return function (dispatch){
      axios({
        method: 'POST',
        url: `${url}/register`,
        data: newUser
      })
      .then(response => {
        let user = {
          name: response.data.ops[0].name,
          email: response.data.ops[0].email,
          phoneNumber: response.data.ops[0].phoneNumber,
          password: response.data.ops[0].password
        }
        dispatch(addUser(user))
      })
      .catch(err => {
        console.log(err);
      })
  }
}

export function signIn(payload) {
  return function (dispatch){
      axios({
        method: 'POST',
        url: `${url}/login`,
        data: payload
      })
      .then(response => {
        dispatch(findUsers())
        localStorage.access_token = response.data.access_token
      })
      .catch(err => {
        console.log(err);
      })
  }
}

export function deleteUser(id) {
  return function (dispatch){
      axios({
        method: 'DELETE',
        url: `${url}/${id}`,
        headers: {
          access_token: localStorage.access_token
        }
      })
      .then(response => {
        console.log(response.data);
      })
      .catch(err => {
        console.log(err);
      })
  }
}
import { authHeader } from "../_helpers";

export const userService = {
  login,
  logout,
  register,
  getAll,
  getUsersByType,
  getById,
  addFile,
  update,
  delete: _delete
};

function login(username, password) {
  const requestOptions = {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ username, password }),
    mode: "cors"
  };

  return fetch(
    `http://localhost:3000/getUserByCredentials`,
    requestOptions
  ).then(response => handleResponse(response));
}

function logout() {
  // remove user from local storage to log user out
  localStorage.removeItem("user");
}

function getAll() {
  const requestOptions = {
    method: "GET",
    headers: authHeader(),
    mode: "cors"
  };

  return fetch(
    `http://localhost:3000/getUsers`,
    requestOptions
  ).then(response => handleResponse(response));
}

function getUserByCredentials(credentials) {
  const requestOptions = {
    method: "GET",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(credentials),
    mode: "cors"
  };

  return fetch(
    `http://localhost:3000/getUserByCredentials`,
    requestOptions
  ).then(response => handleResponse(response));
}

function getUsersByType(user_type) {
  const requestOptions = {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ user_type }),
    mode: "cors"
  };

  return fetch(
    `http://localhost:3000/getUsersByType`,
    requestOptions
  ).then(response => handleResponse(response));
}

function getById(id) {
  const requestOptions = {
    method: "GET",
    headers: authHeader(),
    body: JSON.stringify({ id })
  };

  return fetch(`/getUserById`, requestOptions).then(handleResponse);
}

function register(user) {
  const requestOptions = {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(user),
    mode: "cors"
  };

  return fetch(
    `http://localhost:3000/createUser`,
    requestOptions
  ).then(response => handleResponse(response));
}

function addFile(file) {
  const requestOptions = {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(file),
    mode: "cors"
  };

  console.log(file);
}

function update(user) {
  const requestOptions = {
    method: "PUT",
    headers: { ...authHeader(), "Content-Type": "application/json" },
    body: JSON.stringify(user)
  };

  return fetch(`/updateUser`, requestOptions).then(handleResponse);
}

// prefixed function name with underscore because delete is a reserved word in javascript
function _delete(id) {
  const requestOptions = {
    method: "DELETE",
    headers: authHeader(),
    body: JSON.stringify(id)
  };

  return fetch(`/deleteUser`, requestOptions).then(handleResponse);
}

function handleResponse(response) {
  return response.text().then(text => {
    const data = text && JSON.parse(text);
    if (!response.ok) {
      if (response.status === 401) {
        // auto logout if 401 response returned from api
        logout();
      }

      const error = (data && data.message) || response.statusText;
      return Promise.reject(error);
    }

    return data;
  });
}

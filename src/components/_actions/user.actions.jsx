import { userConstants } from "../_constants";
import { userService } from "../_services";
import { alertActions } from "./";
import { history } from "../_helpers";

export const userActions = {
  login,
  logout,
  register,
  getAll,
  getUsersByType,
  addResource,
  addBook,
  getAllResources,
  getAllBooks,
  delete: _delete
};

function login(username, password) {
  return dispatch => {
    dispatch(request({ username }));

    userService.login(username, password).then(
      user => {
        dispatch(success(user));
        localStorage.setItem("user", JSON.stringify(user));
        history.push("/home");
      },
      error => {
        dispatch(failure(error));
        dispatch(alertActions.error(error));
      }
    );
  };

  function request(user) {
    return { type: userConstants.LOGIN_REQUEST, user };
  }
  function success(user) {
    return { type: userConstants.LOGIN_SUCCESS, user };
  }
  function failure(error) {
    return { type: userConstants.LOGIN_FAILURE, error };
  }
}

function logout() {
  userService.logout();
  history.push("/login");
  return { type: userConstants.LOGOUT };
}

function register(user) {
  return dispatch => {
    dispatch(request(user));

    userService.register(user).then(
      user => {
        dispatch(success());
        history.push("/");
        dispatch(alertActions.success(""));
      },
      error => {
        dispatch(failure(error));
        dispatch(alertActions.error(error));
      }
    );
  };

  function request(user) {
    return { type: userConstants.REGISTER_REQUEST, user };
  }
  function success(user) {
    return { type: userConstants.REGISTER_SUCCESS, user };
  }
  function failure(error) {
    return { type: userConstants.REGISTER_FAILURE, error };
  }
}

function getAll() {
  return dispatch => {
    dispatch(request());

    userService.getAll().then(
      users => dispatch(success(users)),
      error => dispatch(failure(error))
    );
  };

  function request(users) {
    return { type: userConstants.GETALL_REQUEST, users };
  }
  function success(users) {
    return { type: userConstants.GETALL_SUCCESS, users };
  }
  function failure(error) {
    return { type: userConstants.GETALL_FAILURE, error };
  }
}

function getUsersByType(user_type) {
  return dispatch => {
    dispatch(request({ user_type }));

    userService.getUsersByType(user_type).then(
      users => {
        dispatch(success(users));
      },
      error => {
        dispatch(failure(error));
      }
    );
  };

  function request(user) {
    return { type: userConstants.GETBYTYPE_REQUEST, user };
  }
  function success(users) {
    return { type: userConstants.GETBYTYPE_SUCCESS, users };
  }
  function failure(error) {
    return { type: userConstants.GETBYTYPE_FAILURE, error };
  }
}

function addResource(resource) {
  return dispatch => {
    dispatch(request({ resource }));

    userService.addResource(resource).then(
      resource => {
        dispatch(success(resource));
      },
      error => {
        dispatch(failure(error));
        dispatch(alertActions.error(error));
      }
    );
  };

  function request(resource) {
    return { type: userConstants.ADD_FILE_REQUEST, resource };
  }
  function success(resource) {
    return { type: userConstants.ADD_FILE_SUCCESS, resource };
  }
  function failure(error) {
    return { type: userConstants.ADD_FILE_FAILURE, error };
  }
}

function getAllResources() {
  return dispatch => {
    dispatch(request());

    userService.getAllResources().then(
      resources => dispatch(success(resources)),
      error => dispatch(failure(error))
    );
  };

  function request(users) {
    return { type: userConstants.GETALLRESOURCES_REQUEST, users };
  }
  function success(resources) {
    return { type: userConstants.GETALLRESOURCES_SUCCESS, resources };
  }
  function failure(error) {
    return { type: userConstants.GETALLRESOURCES_FAILURE, error };
  }
}

function addBook(book) {
  return dispatch => {
    dispatch(request({ book }));

    userService.addBook(book).then(
      book => {
        dispatch(success(book));
      },
      error => {
        dispatch(failure(error));
        dispatch(alertActions.error(error));
      }
    );
  };

  function request(book) {
    return { type: userConstants.ADD_FILE_REQUEST, book };
  }
  function success(book) {
    return { type: userConstants.ADD_FILE_SUCCESS, book };
  }
  function failure(error) {
    return { type: userConstants.ADD_FILE_FAILURE, error };
  }
}

function getAllBooks() {
  return dispatch => {
    dispatch(request());

    userService.getAllBooks().then(
      books => dispatch(success(books)),
      error => dispatch(failure(error))
    );
  };

  function request(book) {
    return { type: userConstants.GETALLBOOKS_REQUEST, book };
  }
  function success(books) {
    return { type: userConstants.GETALLBOOKS_SUCCESS, books };
  }
  function failure(error) {
    return { type: userConstants.GETALL_FAILURE, error };
  }
}

// prefixed function name with underscore because delete is a reserved word in javascript
function _delete(id) {
  return dispatch => {
    dispatch(request(id));

    userService.delete(id).then(
      user => {
        dispatch(success(id));
      },
      error => {
        dispatch(failure(id, error));
      }
    );
  };

  function request(id) {
    return { type: userConstants.DELETE_REQUEST, id };
  }
  function success(id) {
    return { type: userConstants.DELETE_SUCCESS, id };
  }
  function failure(id, error) {
    return { type: userConstants.DELETE_FAILURE, id, error };
  }
}

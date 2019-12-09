import { userConstants } from "../_constants";

export function users(state = {}, action) {
  switch (action.type) {
    case userConstants.GETALL_REQUEST:
      return {
        loading: true
      };
    case userConstants.GETALL_SUCCESS:
      return {
        items: action.users,
        loading: false
      };
    case userConstants.GETALL_FAILURE:
      return {
        error: action.error
      };

    case userConstants.GETALLRESOURCES_REQUEST:
      return {
        loading: true
      };
    case userConstants.GETALLRESOURCES_SUCCESS:
      return {
        items: action.resources,
        loading: false
      };
    case userConstants.GETALLRESOURCES_FAILURE:
      return {
        error: action.error
      };

    case userConstants.GETALLBOOKS_REQUEST:
      return {
        loading: true
      };

    case userConstants.GETALLBOOKS_SUCCESS:
      return {
        items: action.books,
        loading: false
      };

    case userConstants.GETALLBOOKS_FAILURE:
      return {
        error: action.error
      };

    case userConstants.GETBYTYPE_REQUEST:
      return {
        loading: true
      };
    case userConstants.GETBYTYPE_SUCCESS:
      return {
        items: action.users,
        loading: false
      };
    case userConstants.GETBYTYPE_FAILURE:
      return {
        error: action.error
      };
    case userConstants.DELETE_REQUEST:
      // add 'deleting:true' property to user being deleted
      return {
        ...state,
        items: state.items.map(user =>
          user.id === action.id ? { ...user, deleting: true } : user
        )
      };
    case userConstants.DELETE_SUCCESS:
      // remove deleted user from state
      return {
        items: state.items.filter(user => user.id !== action.id)
      };
    case userConstants.DELETE_FAILURE:
      // remove 'deleting:true' property and add 'deleteError:[error]' property to user
      return {
        ...state,
        items: state.items.map(user => {
          if (user.id === action.id) {
            // make copy of user without 'deleting:true' property
            const { deleting, ...userCopy } = user;
            // return copy of user with 'deleteError:[error]' property
            return { ...userCopy, deleteError: action.error };
          }

          return user;
        })
      };
    default:
      return state;
  }
}

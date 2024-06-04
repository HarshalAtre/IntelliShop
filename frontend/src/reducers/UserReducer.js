import { CLEAR_ERRORS, LOGIN_FAIL, LOGIN_REQUEST, LOGIN_SUCCESS, REGISTER_USER_FAIL, REGISTER_USER_REQUEST, REGISTER_USER_SUCCESS , LOAD_USER_REQUEST,
  LOAD_USER_SUCCESS,
  LOAD_USER_FAIL,LOGOUT_FAIL,LOGOUT_REQUEST,LOGOUT_SUCCESS,
  UPDATE_PROFILE_REQUEST,
  UPDATE_PROFILE_SUCCESS,
  UPDATE_PROFILE_FAIL,
  UPDATE_PROFILE_RESET,
  UPDATE_PASSWORD_REQUEST,
  UPDATE_PASSWORD_SUCCESS,
  UPDATE_PASSWORD_RESET,
  UPDATE_PASSWORD_FAIL,} from "../constants/UserConstants";

export const userReducer = (state = { user: {} }, action) => {
    switch (action.type) {
      case LOGIN_REQUEST:
      case REGISTER_USER_REQUEST:
      case LOAD_USER_REQUEST:
        case LOGOUT_REQUEST:
        return {
          loading: true,
          isAuthenticated: false,
        };
      case LOGIN_SUCCESS:
      case REGISTER_USER_SUCCESS:
      case LOAD_USER_SUCCESS:
        return {
          ...state,
          loading: false,
          isAuthenticated: true,
          user: action.payload,
        };
      case LOGOUT_SUCCESS:
        return {
          loading: false,
          user: null,
          isAuthenticated: false,
        }
        case LOGIN_FAIL:
        case REGISTER_USER_FAIL:
        case LOAD_USER_FAIL:
              return {
                ...state,
                loading: false,
                isAuthenticated: false,
                user: null,
                error: action.payload,
              };
              
              case LOGOUT_FAIL:
                return {
                  ...state,
                  loading: false,
                  error: action.payload,
                }
              case CLEAR_ERRORS:
                return {
                  ...state,
                  error: null,
                };
          
              default:
                return state;
            }
          };
          
          
          
export const UpdateProfileReducer = (state = { }, action) => {
            switch (action.type) {
              case UPDATE_PROFILE_REQUEST:
              case UPDATE_PASSWORD_REQUEST:
                return {
                  ...state,
                  loading: true,
                }
              case UPDATE_PROFILE_SUCCESS:
              case UPDATE_PASSWORD_SUCCESS:
                return {
                  ...state,
                  loading: false,
                  isUpdated: action.payload,
                }
              case UPDATE_PROFILE_FAIL:
              case UPDATE_PASSWORD_FAIL:
                return {
                  ...state,
                  loading: false,
                  error: action.payload,
                }
                case UPDATE_PROFILE_RESET:
                case UPDATE_PASSWORD_RESET:
                  return {
                    ...state,
                    isUpdated: false,
                  }
                      case CLEAR_ERRORS:
                        return {
                          ...state,
                          error: null,
                        };
                  
                      default:
                        return state;
                    }
                  };
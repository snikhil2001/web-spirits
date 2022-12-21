import axios from "axios";
import {
  LOGIN_ERROR,
  LOGIN_LOADING,
  LOGIN_SUCCESS,
  LOGOUT,
  SIGNUP_ERROR,
  SIGNUP_LOADING,
  SIGNUP_SUCCESS,
  VERIFY_SUCCESS,
} from "./user.type";

// const token = localStorage.getItem("token");

// const token = "";

// if (token) {
//   axios.defaults.headers.common["authorization"] = token;
// }

const initState = {
  isAuth: false,
  token: "",
  loading: false,
  error: false,
  tokenDetails: [],
};
console.log("isAuth:L", initState.isAuth);

export const userReducer = (state = initState, { type, payload }) => {
  switch (type) {
    case LOGIN_LOADING: {
      return {
        ...state,
        loading: true,
        error: false,
      };
    }
    case LOGIN_SUCCESS: {
      //   localStorage.setItem("token", payload.token);
      delete axios.defaults.headers.common["authorization"];
      axios.defaults.headers.common["authorization"] = payload.token;

      return {
        ...state,
        isAuth: true,
        token: payload.token,
        loading: false,
        error: false,
      };
    }
    case LOGIN_ERROR: {
      return {
        ...state,
        loading: true,
        error: false,
      };
    }
    case SIGNUP_LOADING: {
      return {
        ...state,
        // tokenDetails: [...state.tokenDetails, payload],
        loading: false,
        error: false,
      };
    }
    case SIGNUP_SUCCESS: {
      return {
        ...state,
        // tokenDetails: [...state.tokenDetails, payload],
        loading: false,
        error: false,
      };
    }
    case SIGNUP_ERROR: {
      return {
        ...state,
        loading: false,
        error: true,
      };
    }
    case VERIFY_SUCCESS: {
      return {
        ...state,
        tokenDetails: payload,
        loading: false,
        error: false,
      };
    }
    case LOGOUT: {
      localStorage.removeItem("token");
      delete axios.defaults.headers.common["authorization"];
      return {
        ...state,
        isAuth: false,
      };
    }
    default: {
      return state;
    }
  }
};

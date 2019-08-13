import axios from "axios";
import jwt from "jsonwebtoken";
const BASE_URL = "http://localhost:3000";

export default {
  state: {
    user: null,
    token: "",
    isAuthenticated: false
  },
  mutations: {
    SET_USER(state, user) {
      state.user = user;
    },
    SET_IS_AUTHENTICATED(state) {
      state.isAuthenticated = true;
    },
    SET_TOKEN(state, token) {
      state.token = token;
    }
  },
  actions: {
    async authLogin({ commit }, payload) {
      const response = await axios.post(BASE_URL + "/login", payload);
      try {
        console.log(response.data);
        const token = response.data["token"];
        const decodedToken = jwt.verify(token, "secretvotingappappsecret");
        console.log(decodedToken);
        commit("SET_TOKEN", token);
        axios.defaults.headers.common["Authorization"] = token;
        return true;
      } catch (error) {
        console.log(error);
        return false;
      }
    }
  },
  getters: {
    getUserToken: state => {
      return state.token;
    },
    getUser: state => {
      return state.user;
    },
    getIsAuthenticated: state => {
      return state.isAuthenticated;
    }
  }
};

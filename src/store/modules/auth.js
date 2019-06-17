import axios from "axios";
import jwt from "jsonwebtoken";

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
    }
  },
  actions: {
    async authLogin({ commit }, payload) {
      const response = await axios.post("http://localhost:3000/login", payload);
      try {
        console.log(response.data);
        const decodedToken = jwt.verify(
          response.data["token"],
          "secretvotingappappsecret"
        );
        console.log(decodedToken);
        return true;
      } catch (error) {
        console.log(error);
        return false;
      }
      // commit("AUTH_LOGIN", payload);
    }
  },
  getters: {}
};
